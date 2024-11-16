const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Function to add a new task
const addTask = () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const task = document.createElement("li");
  task.className = "task";

  task.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete-btn">&times;</button>
  `;

  taskList.appendChild(task);

  // Add event listeners for marking complete and deleting
  task.querySelector(".task-text").addEventListener("click", () => {
    task.classList.toggle("completed");
  });

  task.querySelector(".delete-btn").addEventListener("click", () => {
    task.remove();
  });

  // Clear input
  taskInput.value = "";
};

// Add event listener to the Add button
addBtn.addEventListener("click", addTask);

// Allow Enter key to add tasks
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
