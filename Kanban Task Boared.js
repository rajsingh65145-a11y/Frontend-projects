let tasks = JSON.parse(localStorage.getItem("kanbanTasks")) || {
  todo: [],
  doing: [],
  done: []
};

function saveData() {
  localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
  render();
}

function addTask() {
  const input = document.getElementById("taskInput");
  const value = input.value.trim();

  if (!value) return;

  tasks.todo.push(value);

  input.value = "";

  saveData();
}

function render() {

  ["todo", "doing", "done"].forEach((col) => {
    const container = document.getElementById(col);
    container.innerHTML = "";

    tasks[col].forEach((task, index) => {
      const div = document.createElement("div");
      div.className = "task";
      div.draggable = true;
      div.innerText = task;

      div.ondragstart = (e) => {
        e.dataTransfer.setData("text", JSON.stringify({
          task,
          from: col,
          index
        }));
      };

      container.appendChild(div);
    });
  });

  saveData();
}

function allowDrop(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();

  const data = JSON.parse(e.dataTransfer.getData("text"));

  // remove from old column
  tasks[data.from].splice(data.index, 1);

  // add to new column
  const newColumn = e.target.closest(".column").querySelector(".list").id;

  tasks[newColumn].push(data.task);

  saveData();
}

render();