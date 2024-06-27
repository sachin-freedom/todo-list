let inputBox = document.querySelector("#input-box");
let listContainer = document.querySelector("#list-container");

let button = document.querySelector("button");

button.addEventListener("click", function () {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `${inputBox.value} <span>&times;</span>`;
    listContainer.appendChild(li);
  }

  inputBox.value = "";
  saveData();
});

listContainer.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else {
    e.target.parentElement.remove();
    saveData();
  }
});

console.log(localStorage);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();
