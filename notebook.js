(() => {
  const storageKey = "pl-tr-lesson-notebook-v1";
  const defaults = { text: "", fontSize: 18, isOpen: false, isCollapsed: false, x: null, y: null };
  const load = () => {
    try { return { ...defaults, ...JSON.parse(localStorage.getItem(storageKey) || "{}") }; }
    catch (_error) { return { ...defaults }; }
  };
  let state = load();
  let saveTimer = 0;
  let drag = null;

  const launcher = document.createElement("button");
  launcher.className = "lesson-notebook-launcher";
  launcher.type = "button";
  launcher.innerHTML = '<span aria-hidden="true">✎</span><span>Notatnik</span>';
  launcher.setAttribute("aria-label", "Otwórz notatnik");

  const notebook = document.createElement("section");
  notebook.className = "lesson-notebook";
  notebook.setAttribute("aria-label", "Notatnik do lekcji");
  notebook.innerHTML = `
    <header class="lesson-notebook-header">
      <span class="lesson-notebook-grip" aria-hidden="true">⠿</span>
      <h2 class="lesson-notebook-title">Notatnik</h2>
      <div class="lesson-notebook-controls">
        <button class="lesson-notebook-control" data-action="smaller" type="button" aria-label="Zmniejsz tekst" title="Zmniejsz tekst">A−</button>
        <button class="lesson-notebook-control" data-action="larger" type="button" aria-label="Powiększ tekst" title="Powiększ tekst">A+</button>
        <button class="lesson-notebook-control" data-action="collapse" type="button" aria-label="Zwiń notatnik" title="Zwiń notatnik">−</button>
        <button class="lesson-notebook-control" data-action="close" type="button" aria-label="Zamknij notatnik" title="Zamknij notatnik">×</button>
      </div>
    </header>
    <div class="lesson-notebook-body">
      <textarea class="lesson-notebook-text" aria-label="Treść notatki" placeholder="Zapisuj tutaj notatki z lekcji…"></textarea>
      <p class="lesson-notebook-status" aria-live="polite">Notatki zapisują się automatycznie</p>
    </div>`;
  document.body.append(launcher, notebook);

  const header = notebook.querySelector(".lesson-notebook-header");
  const text = notebook.querySelector(".lesson-notebook-text");
  const status = notebook.querySelector(".lesson-notebook-status");
  const collapse = notebook.querySelector('[data-action="collapse"]');

  function persist(showStatus = false) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
      if (showStatus) {
        status.textContent = "Zapisano";
        clearTimeout(saveTimer);
        saveTimer = setTimeout(() => { status.textContent = "Notatki zapisują się automatycznie"; }, 1200);
      }
    } catch (_error) { status.textContent = "Nie udało się zapisać notatki"; }
  }

  function clamp(x, y) {
    const margin = 8;
    return {
      x: Math.min(Math.max(margin, x), Math.max(margin, innerWidth - notebook.offsetWidth - margin)),
      y: Math.min(Math.max(margin, y), Math.max(margin, innerHeight - notebook.offsetHeight - margin)),
    };
  }
  function applyPosition() {
    if (!Number.isFinite(state.x) || !Number.isFinite(state.y)) {
      const margin = innerWidth <= 520 ? 8 : 22;
      state.x = Math.max(margin, innerWidth - notebook.offsetWidth - margin);
      state.y = Math.max(margin, innerHeight - notebook.offsetHeight - 78);
    }
    Object.assign(state, clamp(state.x, state.y));
    notebook.style.left = `${state.x}px`;
    notebook.style.top = `${state.y}px`;
  }
  function render() {
    text.value = state.text;
    text.style.fontSize = `${state.fontSize}px`;
    notebook.hidden = !state.isOpen;
    launcher.hidden = state.isOpen;
    notebook.classList.toggle("is-collapsed", state.isCollapsed);
    collapse.textContent = state.isCollapsed ? "+" : "−";
    collapse.title = state.isCollapsed ? "Rozwiń notatnik" : "Zwiń notatnik";
    collapse.setAttribute("aria-label", collapse.title);
    if (state.isOpen) requestAnimationFrame(applyPosition);
  }

  launcher.addEventListener("click", () => {
    state.isOpen = true; render(); persist(); requestAnimationFrame(() => text.focus());
  });
  text.addEventListener("input", () => { state.text = text.value; persist(true); });
  notebook.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const action = button.dataset.action;
    if (action === "smaller") state.fontSize = Math.max(12, state.fontSize - 2);
    if (action === "larger") state.fontSize = Math.min(32, state.fontSize + 2);
    if (action === "collapse") state.isCollapsed = !state.isCollapsed;
    if (action === "close") state.isOpen = false;
    render(); persist();
  });

  header.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) return;
    applyPosition();
    drag = { id: event.pointerId, startX: event.clientX, startY: event.clientY, x: state.x, y: state.y };
    header.setPointerCapture(event.pointerId);
    notebook.classList.add("is-dragging");
    event.preventDefault();
  });
  header.addEventListener("pointermove", (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    Object.assign(state, clamp(drag.x + event.clientX - drag.startX, drag.y + event.clientY - drag.startY));
    notebook.style.left = `${state.x}px`; notebook.style.top = `${state.y}px`;
  });
  const stopDrag = (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    drag = null; notebook.classList.remove("is-dragging"); persist();
  };
  header.addEventListener("pointerup", stopDrag);
  header.addEventListener("pointercancel", stopDrag);
  addEventListener("resize", () => { if (state.isOpen) { applyPosition(); persist(); } });
  render();
})();
