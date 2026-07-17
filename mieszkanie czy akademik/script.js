const hiddenText = "…";

const answerCells = document.querySelectorAll(".answer-cell");
const showAllButton = document.querySelector("#showAllButton");
const hideAllButton = document.querySelector("#hideAllButton");
const resetButton = document.querySelector("#resetButton");

function hideCell(cell) {
  cell.classList.remove("is-visible");
  cell.textContent = hiddenText;
  cell.setAttribute("aria-label", "Pokaż odpowiedź");
}

function showCell(cell) {
  cell.classList.add("is-visible");
  cell.textContent = cell.dataset.answer;
  cell.setAttribute("aria-label", "Ukryj odpowiedź");
}

function toggleCell(cell) {
  if (cell.classList.contains("is-visible")) {
    hideCell(cell);
    return;
  }

  showCell(cell);
}

answerCells.forEach((cell) => {
  hideCell(cell);

  cell.addEventListener("click", () => {
    toggleCell(cell);
  });
});

showAllButton.addEventListener("click", () => {
  answerCells.forEach(showCell);
});

hideAllButton.addEventListener("click", () => {
  answerCells.forEach(hideCell);
});

resetButton.addEventListener("click", () => {
  answerCells.forEach(hideCell);
});

const task4Questions = [
  { id: "a", text: "Czy w łazience jest prysznic?" },
  { id: "b", text: "Czy można przyjść obejrzeć ten pokój dzisiaj o 19:00?" },
  { id: "c", text: "Czy opłata za internet jest wliczona w czynsz?" },
  { id: "d", text: "Gdzie znajduje się mieszkanie?" },
  { id: "e", text: "Ile bym płacił miesięcznie?" },
  { id: "f", text: "Dzień dobry! Czy ogłoszenie jest nadal aktualne?" },
  { id: "g", text: "Ile pomieszczeń jest w mieszkaniu?" },
  { id: "h", text: "Czy łazienka i toaleta są osobno?" },
  { id: "i", text: "Kiedy można obejrzeć pokój?" },
  { id: "j", text: "Ile metrów kwadratowych ma mieszkanie?" },
];

const task4CorrectAnswers = {
  1: "f",
  2: "d",
  3: "j",
  4: "g",
  5: "h",
  6: "a",
  7: "e",
  8: "c",
  9: "i",
  10: "b",
};

const task4QuestionsById = Object.fromEntries(
  task4Questions.map((question) => [question.id, question]),
);

const task4Elements = {
  questionsBox: document.querySelector("#task4QuestionsBox"),
  dropZones: Array.from(document.querySelectorAll(".task4DropZone")),
  checkButton: document.querySelector("#checkTask4"),
  showAnswersButton: document.querySelector("#showTask4Answers"),
  resetButton: document.querySelector("#resetTask4"),
  result: document.querySelector("#task4Result"),
};

const task4State = {
  assignments: {},
  selectedQuestionId: "",
  draggedQuestionId: "",
  mode: "idle",
};

function task4GetQuestionCardHtml(questionId, inZone = false) {
  const question = task4QuestionsById[questionId];
  const classes = ["task4QuestionCard"];

  if (inZone) {
    classes.push("is-in-zone");
  }

  if (task4State.selectedQuestionId === questionId) {
    classes.push("is-selected");
  }

  return `
    <div
      class="${classes.join(" ")}"
      draggable="true"
      data-question-id="${question.id}"
    >
      ${question.id}) ${question.text}
    </div>
  `;
}

function task4ClearStatuses() {
  task4Elements.dropZones.forEach((zone) => {
    zone.classList.remove("is-correct", "is-wrong", "is-empty", "is-drag-over");
  });
}

function task4RenderPool() {
  const assignedIds = new Set(Object.values(task4State.assignments).filter(Boolean));
  const availableQuestions = task4Questions.filter((question) => !assignedIds.has(question.id));

  task4Elements.questionsBox.innerHTML = availableQuestions
    .map((question) => task4GetQuestionCardHtml(question.id))
    .join("");
}

function task4RenderZones() {
  task4Elements.dropZones.forEach((zone) => {
    const slot = zone.dataset.slot;
    const questionId = task4State.assignments[slot];

    zone.classList.remove("is-correct", "is-wrong", "is-empty");

    if (!questionId) {
      zone.innerHTML = `<span class="task4DropZoneLabel">[${slot}] Przeciągnij pytanie tutaj</span>`;

      if (task4State.mode === "checked") {
        zone.classList.add("is-empty");
      }

      return;
    }

    zone.innerHTML = task4GetQuestionCardHtml(questionId, true);

    if (task4State.mode === "checked" || task4State.mode === "show") {
      if (task4CorrectAnswers[slot] === questionId) {
        zone.classList.add("is-correct");
      } else if (task4State.mode === "checked") {
        zone.classList.add("is-wrong");
      }
    }
  });
}

function task4RenderResult(text = "") {
  task4Elements.result.textContent = text;
}

function task4Render() {
  task4ClearStatuses();
  task4RenderPool();
  task4RenderZones();
}

function task4FindAssignedSlot(questionId) {
  return Object.keys(task4State.assignments).find(
    (slot) => task4State.assignments[slot] === questionId,
  );
}

function task4UnassignQuestion(questionId) {
  const currentSlot = task4FindAssignedSlot(questionId);

  if (currentSlot) {
    delete task4State.assignments[currentSlot];
  }
}

function task4AssignQuestionToSlot(questionId, slot) {
  if (!questionId) {
    return;
  }

  task4State.mode = "idle";
  task4RenderResult("");

  const existingQuestionId = task4State.assignments[slot];

  task4UnassignQuestion(questionId);

  if (existingQuestionId && existingQuestionId !== questionId) {
    task4UnassignQuestion(existingQuestionId);
  }

  task4State.assignments[slot] = questionId;
  task4State.selectedQuestionId = "";
  task4Render();
}

function task4ReturnQuestionToPool(slot) {
  if (!task4State.assignments[slot]) {
    return;
  }

  delete task4State.assignments[slot];
  task4State.selectedQuestionId = "";
  task4State.mode = "idle";
  task4RenderResult("");
  task4Render();
}

function task4HandleQuestionCardClick(questionId) {
  if (task4State.selectedQuestionId === questionId) {
    task4State.selectedQuestionId = "";
  } else {
    task4State.selectedQuestionId = questionId;
  }

  task4Render();
}

function task4HandleDropZoneClick(slot) {
  const assignedQuestionId = task4State.assignments[slot];

  if (task4State.selectedQuestionId) {
    task4AssignQuestionToSlot(task4State.selectedQuestionId, slot);
    return;
  }

  if (assignedQuestionId) {
    task4ReturnQuestionToPool(slot);
  }
}

function task4CheckAnswers() {
  let score = 0;

  Object.keys(task4CorrectAnswers).forEach((slot) => {
    if (task4State.assignments[slot] === task4CorrectAnswers[slot]) {
      score += 1;
    }
  });

  task4State.mode = "checked";
  task4State.selectedQuestionId = "";
  task4Render();
  task4RenderResult(`Wynik: ${score}/10`);
}

function task4ShowAnswers() {
  task4State.assignments = { ...task4CorrectAnswers };
  task4State.selectedQuestionId = "";
  task4State.mode = "show";
  task4Render();
  task4RenderResult("Wynik: 10/10");
}

function task4Reset() {
  task4State.assignments = {};
  task4State.selectedQuestionId = "";
  task4State.draggedQuestionId = "";
  task4State.mode = "idle";
  task4Render();
  task4RenderResult("");
}

function task4InitEvents() {
  task4Elements.questionsBox.addEventListener("click", (event) => {
    const card = event.target.closest(".task4QuestionCard");

    if (!card) {
      return;
    }

    task4HandleQuestionCardClick(card.dataset.questionId);
  });

  task4Elements.questionsBox.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  task4Elements.questionsBox.addEventListener("drop", (event) => {
    event.preventDefault();

    const questionId =
      task4State.draggedQuestionId || event.dataTransfer?.getData("text/plain");

    if (!questionId) {
      return;
    }

    task4UnassignQuestion(questionId);
    task4State.selectedQuestionId = "";
    task4State.mode = "idle";
    task4RenderResult("");
    task4Render();
  });

  task4Elements.dropZones.forEach((zone) => {
    zone.addEventListener("click", () => {
      task4HandleDropZoneClick(zone.dataset.slot);
    });

    zone.addEventListener("dragover", (event) => {
      event.preventDefault();
      zone.classList.add("is-drag-over");
    });

    zone.addEventListener("dragleave", () => {
      zone.classList.remove("is-drag-over");
    });

    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.classList.remove("is-drag-over");

      const questionId =
        task4State.draggedQuestionId || event.dataTransfer?.getData("text/plain");

      task4AssignQuestionToSlot(questionId, zone.dataset.slot);
    });
  });

  document.addEventListener("dragstart", (event) => {
    const card = event.target.closest(".task4QuestionCard");

    if (!card) {
      return;
    }

    task4State.draggedQuestionId = card.dataset.questionId;
    event.dataTransfer.setData("text/plain", card.dataset.questionId);
    event.dataTransfer.effectAllowed = "move";
  });

  document.addEventListener("dragend", () => {
    task4State.draggedQuestionId = "";
    task4Elements.dropZones.forEach((zone) => {
      zone.classList.remove("is-drag-over");
    });
  });

  task4Elements.checkButton.addEventListener("click", task4CheckAnswers);
  task4Elements.showAnswersButton.addEventListener("click", task4ShowAnswers);
  task4Elements.resetButton.addEventListener("click", task4Reset);
}

if (
  task4Elements.questionsBox &&
  task4Elements.dropZones.length &&
  task4Elements.checkButton &&
  task4Elements.showAnswersButton &&
  task4Elements.resetButton &&
  task4Elements.result
) {
  task4InitEvents();
  task4Reset();
}
