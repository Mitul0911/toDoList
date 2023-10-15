let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");
let error = document.querySelector(".error");

function addTask() {
    let value = inputBox.value;
    if (value) {
        error.style.display = "none";
        let listItem = document.createElement("li");
        listItem.innerHTML = inputBox.value;
        
        let crossIcon = document.createElement("span");
        crossIcon.innerHTML = "\u00d7";
        
        listItem.appendChild(crossIcon);
        listContainer.appendChild(listItem);
    } else {
        error.style.display = "block";
    }
    saveData();
    inputBox.value = "";
}

inputBox.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        addTask();
    }
})

listContainer.addEventListener("click", (e) => {
    let tagName = e.target.tagName;
    if (tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function fetchData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

fetchData();