// Récupration des éléments

const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Ajout d'évènements
// Création d'éléments

addTaskButton.addEventListener("click", function () {
  const taskText = newTaskInput.value;
  const taskItem = document.createElement("li");
  const taskCheckbox = document.createElement("input");
  const taskLabel = document.createElement("label");

  taskCheckbox.type = "checkbox";
  taskLabel.innerText = taskText;

  // Ajout de block
  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskLabel);
  taskList.appendChild(taskItem);

  newTaskInput.value = "";
});

// Changement d'évènements

taskList.addEventListener("change", (event) => {
  if (event.target.type === "checkbox") {
    const list = event.target.parentElement;
    list.classList.toggle("completed");
  }
});
