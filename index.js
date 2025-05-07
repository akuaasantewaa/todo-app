const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
    <span>${taskText}</span>
    <div>
    <button class="complete-btn"><i class="fas fa-check"></i></button>
    <button class="delete-btn"><i class="fas fa-trash"></i></button>
  </div>
  `;

    taskList.appendChild(li);
    taskInput.value = "";

    const completeBtn = li.querySelector(".complete-btn");
    const deleteBtn = li.querySelector(".delete-btn");

    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });
});
