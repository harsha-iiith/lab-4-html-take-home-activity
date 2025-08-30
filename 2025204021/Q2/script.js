let tasks = [];
function addTaskFunction() {
  const inputBox = document.getElementById("task-input");
  const inputValue = inputBox.value;

  if (inputValue == "") {
    alert("input some value first");
    return;
  }
  //   alert(inputValue);

  const tasksDiv = document.getElementById("task-list");
  const t = document.createElement("li");
  t.textContent = inputValue;
  inputBox.value = "";
  tasks.push(inputValue);
  tasksDiv.appendChild(t);
}
