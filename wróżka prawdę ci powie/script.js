const sentences = [
  { id: "ty", text: "Czy będziesz mieć wolny wieczór?" },
  { id: "ja", text: "Będę robić zakupy z koleżanką." },
  { id: "one", text: "Olga i Ksenia będą uczyć się języka polskiego." },
  { id: "ona", text: "Iza będzie rozmawiać przez telefon z przyjaciółką." },
  { id: "wy", text: "Gdzie będziecie oglądać film? W domu czy w kinie?" },
  { id: "ono", text: "Moje dziecko już nie będzie pić mleka przed snem." },
  { id: "oni", text: "Skąd Kacper i Eryk będą wracać?" },
  { id: "on", text: "Z kim Marek będzie grać w karty?" },
  { id: "my", text: "Będziemy robić pizzę." },
];

const pool = document.querySelector("#sentencePool");
const zones = [...document.querySelectorAll(".drop-zone")];
const result = document.querySelector("#result");
let selectedCard = null;
let draggedCard = null;

function makeCard(sentence) {
  const card = document.createElement("div");
  card.className = "sentence-card";
  card.draggable = true;
  card.dataset.answer = sentence.id;
  card.textContent = sentence.text;
  return card;
}

function clearFeedback() {
  zones.forEach((zone) => zone.classList.remove("is-correct", "is-wrong", "is-empty"));
  result.textContent = "";
}

function selectCard(card) {
  document.querySelectorAll(".sentence-card").forEach((item) => item.classList.toggle("is-selected", item === card));
  selectedCard = card;
}

function moveToZone(card, zone) {
  if (!card || !zone) return;
  const oldCard = zone.querySelector(".sentence-card");
  if (oldCard && oldCard !== card) pool.append(oldCard);
  zone.append(card);
  selectCard(null);
  clearFeedback();
}

function returnToPool(card) {
  if (!card) return;
  pool.append(card);
  selectCard(null);
  clearFeedback();
}

function reset() {
  pool.querySelectorAll(".sentence-card").forEach((card) => card.remove());
  zones.forEach((zone) => {
    const card = zone.querySelector(".sentence-card");
    if (card) card.remove();
  });
  sentences.forEach((sentence) => pool.append(makeCard(sentence)));
  selectCard(null);
  clearFeedback();
}

document.addEventListener("click", (event) => {
  const card = event.target.closest(".sentence-card");
  if (card) {
    if (card.closest(".drop-zone")) returnToPool(card);
    else selectCard(selectedCard === card ? null : card);
    return;
  }
  const zone = event.target.closest(".drop-zone");
  if (zone && selectedCard) moveToZone(selectedCard, zone);
});

document.addEventListener("dragstart", (event) => {
  const card = event.target.closest(".sentence-card");
  if (!card) return;
  draggedCard = card;
  event.dataTransfer.setData("text/plain", card.dataset.answer);
  event.dataTransfer.effectAllowed = "move";
});
document.addEventListener("dragend", () => {
  draggedCard = null;
  zones.forEach((zone) => zone.classList.remove("is-over"));
});
zones.forEach((zone) => {
  zone.addEventListener("dragover", (event) => { event.preventDefault(); zone.classList.add("is-over"); });
  zone.addEventListener("dragleave", () => zone.classList.remove("is-over"));
  zone.addEventListener("drop", (event) => { event.preventDefault(); zone.classList.remove("is-over"); moveToZone(draggedCard, zone); });
});
pool.addEventListener("dragover", (event) => event.preventDefault());
pool.addEventListener("drop", (event) => { event.preventDefault(); returnToPool(draggedCard); });

document.querySelector("#checkAnswers").addEventListener("click", () => {
  let score = 0;
  zones.forEach((zone) => {
    const card = zone.querySelector(".sentence-card");
    zone.classList.remove("is-correct", "is-wrong", "is-empty");
    if (!card) zone.classList.add("is-empty");
    else if (card.dataset.answer === zone.dataset.pronoun) { zone.classList.add("is-correct"); score += 1; }
    else zone.classList.add("is-wrong");
  });
  selectCard(null);
  result.textContent = `Wynik: ${score}/9`;
});
document.querySelector("#resetTask").addEventListener("click", reset);
reset();
