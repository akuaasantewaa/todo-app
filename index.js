const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


window.addEventListener("load", loadTasks);


addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  addTaskToDOM(taskText);
  saveTask(taskText);

  taskInput.value = "";
});


function saveTask(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(taskText => addTaskToDOM(taskText));
}


function addTaskToDOM(taskText) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="complete-btn"><i class="fas fa-check"></i></button>
      <button class="delete-btn"><i class="fas fa-trash"></i></button>
    </div>
  `;

  taskList.appendChild(li);

  const completeBtn = li.querySelector(".complete-btn");
  const deleteBtn = li.querySelector(".delete-btn");

  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
    deleteTask(taskText);
  });
}


function deleteTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(t => t !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
