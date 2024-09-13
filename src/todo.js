/* dark & light btn */

const lightBtn = document.getElementById("light-btn");
const darkBtn = document.getElementById("dark-btn");
const lightBtn2 = document.getElementById("light-btn2");
const darkBtn2 = document.getElementById("dark-btn2");

lightBtn.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");
  lightBtn.style.backgroundColor = "white";
  darkBtn.style.backgroundColor = "transparent";
});
darkBtn.addEventListener("click", () => {
  document.documentElement.classList.add("dark");
  darkBtn.style.backgroundColor = "#002247";
  lightBtn.style.backgroundColor = "transparent";
});

lightBtn2.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");
  lightBtn.style.backgroundColor = "white";
  darkBtn.style.backgroundColor = "transparent";
});
darkBtn2.addEventListener("click", () => {
  document.documentElement.classList.add("dark");
  darkBtn.style.backgroundColor = "#002247";
  lightBtn.style.backgroundColor = "transparent";
});

/* hambergur-menu */

const hamMenu = document.getElementById("ham-menu");
const mobileMenu = document.getElementById("menu-mobile");
const exitMenu = document.getElementById("exit-menu");
hamMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("right-[-450px]");
});

exitMenu.addEventListener("click", () => {
  mobileMenu.classList.add("right-[-450px]");
});

/* new task section elements*/

const noTaskPicture = document.getElementById("no-task-pic");
const taskSection = document.getElementById("task-section");
const newTask = document
  .getElementById("new-task")
  .addEventListener("click", () => {
    noTaskPicture.classList.toggle("hidden");
    taskSection.classList.toggle("hidden");
    taskSection.classList.toggle("block");
  });

const cancleBtn = document
  .getElementById("cancle-btn")
  .addEventListener("click", () => {
    noTaskPicture.classList.remove("hidden");
    taskSection.classList.replace("block", "hidden");
  });

const tags = document.getElementById("tags");
const tagsArrow = document.getElementById("tags-arrow");
const tagsOpener = document
  .getElementById("tags-opener")
  .addEventListener("click", () => {
    tags.classList.toggle("hidden");
    tags.classList.toggle("flex");
    tagsArrow.classList.toggle("rotate-90");
  });

const li = document.getElementById("li");

let selectedTagColor = "";
let selectedTagBackgroundColor = "";
let selectedBorderColor = "";

tags.addEventListener("click", function (event) {
  if (event.target.tagName === "P") {
    const target = event.target;
    document.querySelector("#tags-opener p").innerHTML = target.innerHTML;

    if (target.innerHTML === "پایین") {
      document.querySelector("#tags-opener p").style.backgroundColor =
        "#C3FFF1";
      document.querySelector("#tags-opener p").style.color = "#11A483";
      tags.classList.toggle("hidden");
      tags.classList.toggle("flex");
      selectedTagBackgroundColor = "#C3FFF1";
      selectedTagColor = "#11A483";
      selectedBorderColor = "#11A483";
    } else if (target.innerHTML === "متوسط") {
      document.querySelector("#tags-opener p").style.backgroundColor =
        "#FFEFD6";
      document.querySelector("#tags-opener p").style.color = "#FFAF37";
      tags.classList.add("hidden");
      tags.classList.add("hidden");
      tags.classList.toggle("flex");
      selectedTagBackgroundColor = "#FFEFD6";
      selectedTagColor = "#FFAF37";
      selectedBorderColor = "#FFAF37";
    } else if (target.innerHTML === "بالا") {
      document.querySelector("#tags-opener p").style.backgroundColor =
        "#FFE2DB";
      document.querySelector("#tags-opener p").style.color = "#FF5F37";
      document.querySelector("#tags-opener p").style.padding = "0 10px";
      tags.classList.add("hidden");
      tags.classList.add("hidden");
      tags.classList.toggle("flex");
      selectedTagBackgroundColor = "#FFE2DB";
      selectedTagColor = "#FF5F37";
      selectedBorderColor = "#FF5F37";
    }
  }
});


let tasksList = [];

const editSectionHTML = `
  <div id="edit-section" class="shadow-xl p-4 rounded-lg hidden">
    <input id="edit-task-name-input" type="text" placeholder="نام تسک" class="block w-[90%] mx-auto focus:outline-gray-400 p-2 rounded-lg placeholder:font-bold" autocomplete="off" required>
    <input id="edit-task-desc-input" type="text" placeholder="توضیحات" class="block w-[90%] mx-auto focus:outline-gray-400 p-2 rounded-lg placeholder:text-sm mt-2" autocomplete="off" required>
    <div class="text-left pt-4">
      <button id="edit-task-button" class="bg-light-nav-hover text-white p-2 rounded-lg">ویرایش تسک</button>
    </div>
  </div>
`;

document.body.insertAdjacentHTML('beforeend', editSectionHTML);

const addTaskBtn = document
  .getElementById("add-task-btn")
  .addEventListener("click", () => {
    const taskNameInput = document.getElementById("task-name-input").value;
    const taskDescInput = document.getElementById("task-desc-input").value;

    if (taskNameInput === "" || taskDescInput === "" || !isNaN(taskNameInput) || !isNaN(taskDescInput)) {
      alert("مقادیر تسک نباید خالی یا فقط شامل اعداد باشد");
      return;
    }

    const newTask = document.createElement("li");
    newTask.className = "shadow-md p-4 rounded-xl mb-5";
    newTask.style.borderRight = `4px solid ${selectedBorderColor}`;

    newTask.innerHTML = `
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-x-3">
          <img class="cursor-pointer" src="../assets/image/uncheckbox.png" alt="checkbox">
          <h3 class="text-lg font-bold dark:text-white">${taskNameInput}</h3>
          <p class="p-1" style="background-color: ${selectedTagBackgroundColor}; color: ${selectedTagColor};">
            ${document.querySelector("#tags-opener p").innerHTML}
          </p>
        </div>
        <svg class="delete-edit-opener cursor-pointer w-6 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
        </svg>
      </div>
      <div class="flex justify-between items-center">
        <p class="pr-9 pt-1 text-gray-400 text-sm">${taskDescInput}</p>
        <div class="delete-edit-section gap-x-1 hidden">
          <svg class="delete-btn cursor-pointer w-6 hover:text-red-600 dark:text-white dark:hover:text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
          <svg class="edit-btn cursor-pointer w-6 hover:text-green-600 dark:text-white dark:hover:text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
        </div>
      </div>
    `;

    const ul = document.getElementById("ul");
    ul.appendChild(newTask);

    tasksList.push({
      taskName: taskNameInput,
      taskDesc: taskDescInput,
      borderColor: selectedBorderColor,
      tagBackgroundColor: selectedTagBackgroundColor,
      tagTextColor: selectedTagColor,
      tagContent: document.querySelector("#tags-opener p").innerHTML,
    });

    saveTasksToLocalStorage(tasksList);

    document.getElementById("task-name-input").value = "";
    document.getElementById("task-desc-input").value = "";

    if (ul.querySelectorAll("li").length > 0) {
      noTaskPicture.style.display = "none";
    }

    taskSection.classList.add("hidden");
  });

/* delete and edit */
document.getElementById("ul").addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-edit-opener")) {
    const deleteEditSection = event.target.closest("li").querySelector(".delete-edit-section");
    deleteEditSection.classList.toggle("hidden");
    deleteEditSection.classList.toggle("flex");
  } else if (event.target.classList.contains("delete-btn")) {
    const listItem = event.target.closest("li");
    if (listItem) {
      listItem.remove();
    }
  } else if (event.target.classList.contains("edit-btn")) {
    const listItem = event.target.closest("li");

    const currentTaskName = listItem.querySelector("h3").innerText;
    const currentTaskDesc = listItem.querySelector("p.text-gray-400").innerText;

    const editTaskNameInput = document.getElementById("edit-task-name-input");
    const editTaskDescInput = document.getElementById("edit-task-desc-input");

    editTaskNameInput.value = currentTaskName;
    editTaskDescInput.value = currentTaskDesc;

    const editSection = document.getElementById("edit-section");
    editSection.classList.remove("hidden");

    listItem.insertAdjacentElement("afterend", editSection);

    document.getElementById("edit-task-button").onclick = function () {
      const newTaskName = editTaskNameInput.value;
      const newTaskDesc = editTaskDescInput.value;

      if (newTaskName !== "" && newTaskDesc !== "") {
        listItem.querySelector("h3").innerText = newTaskName;
        listItem.querySelector("p.text-gray-400").innerText = newTaskDesc;

        editTaskNameInput.value = "";
        editTaskDescInput.value = "";
        editSection.classList.add("hidden");
      } else {
        alert("مقادیر تسک نباید خالی یا فقط شامل اعداد باشد");
      }
    };
  }
  updateTaskCounter()
});

document.addEventListener("click", (event) => {
  const editSection = document.getElementById("edit-section");
  if (!editSection.contains(event.target) && !event.target.classList.contains("edit-btn") && !editSection.classList.contains("hidden")) {
    editSection.classList.add("hidden");
  }
});




  
/* task counter */

const taskCounter = document.getElementById("task-counter");
const ul = document.getElementById("ul");

function updateTaskCounter() {
  taskCounter.innerHTML = ul.querySelectorAll("li").length;
}

document.getElementById("add-task-btn").addEventListener("click", () => {
  updateTaskCounter(); 
});

ul.addEventListener("click", (event) => {
  if (event.target.id === "delete-btn") {
    const listItem = event.target.closest("li");
    if (listItem) {
      listItem.remove();
      updateTaskCounter();
    }
  }
});

const completeUl = document.getElementById("complete-ul");
const completeTaskCounter = document.getElementById("complete-task-counter");

function updateTaskCounter() {
  taskCounter.innerHTML = ul.querySelectorAll("li").length;
}

function updateCompleteTaskCounter() {
  completeTaskCounter.innerHTML = completeUl.querySelectorAll("li").length;
}




ul.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG" && event.target.alt === "checkbox") {
    const listItem = event.target.closest("li");
    if (listItem) {
      listItem.remove();

      const taskDesc = listItem.querySelector("p.text-gray-400");
      if (taskDesc) {
        taskDesc.remove(); 
      }

      const editBtn = listItem.querySelector("#edit-btn");
      const deleteBtn = listItem.querySelector("#delete-btn");
      if (editBtn) editBtn.remove(); 
      if (deleteBtn) deleteBtn.remove();

      const taskName = listItem.querySelector("h3");
      if (taskName) {
        taskName.style.textDecoration = "line-through"; 
      }

      completeUl.appendChild(listItem);

      event.target.src = "../assets/image/checkedbox.png";
      event.target.classList.add("w-6")
      updateTaskCounter();
      updateCompleteTaskCounter();
    }
  }
});



/* move tasks back to incomplete list */

completeUl.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG" && event.target.alt === "checkbox") {
    const listItem = event.target.closest("li");
    if (listItem) {
      listItem.remove();

      const taskName = listItem.querySelector("h3");
      if (taskName) {
        taskName.style.textDecoration = "none"; 
      }

      ul.appendChild(listItem);
      event.target.src = "../assets/image/uncheckbox.png";
      event.target.classList.add("w-6");

      updateTaskCounter();
      updateCompleteTaskCounter();
    }
  }
});

/* initial counter update */
updateTaskCounter();
updateCompleteTaskCounter();




const completeSection = document.getElementById("complete-section");
function toggleCompleteSection() {
  if (completeUl.querySelectorAll("li").length === 0) {
    completeSection.style.display = "none";
  } else {
    completeSection.style.display = "block";
  }
}
toggleCompleteSection();
ul.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG" && event.target.alt === "checkbox") {
    const listItem = event.target.closest("li");
    if (listItem) {
      completeUl.appendChild(listItem);
      toggleCompleteSection(); 
    }
  }
});

completeUl.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG" && event.target.alt === "checkbox") {
    const listItem = event.target.closest("li");
    if (listItem) {
      ul.appendChild(listItem);
      toggleCompleteSection();
    }
  }
});




function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    const tasksList = JSON.parse(storedTasks);
    tasksList.forEach((task) => {
      const newTask = document.createElement("li");
      newTask.className = "shadow-md p-4 rounded-xl mb-5";
      newTask.style.borderRight = `4px solid ${task.borderColor}`;

      newTask.innerHTML = `
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-x-3">
            <img class="cursor-pointer" src="../assets/image/uncheckbox.png" alt="checkbox">
            <h3 class="text-lg font-bold dark:text-white">${task.taskName}</h3>
            <p class="p-1" style="background-color: ${task.tagBackgroundColor}; color: ${task.tagTextColor};">
              ${task.tagContent} <!-- اعمال رنگ و محتوای تگ -->
            </p>
          </div>
          <svg id="delete-edit-opener" class="cursor-pointer w-6 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
        </div>
        <div class="flex justify-between items-center">
          <p class="pr-9 pt-1 text-gray-400 text-sm">${task.taskDesc}</p>
          <div id="delete-edit-section" class=" gap-x-1 hidden">
            <svg id="delete-btn" class="cursor-pointer w-6 hover:text-red-600 dark:text-white dark:hover:text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            <svg id="edit-btn" class="cursor-pointer w-6 hover:text-green-600 dark:text-white dark:hover:text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
          </div>
        </div>
      `;
      ul.appendChild(newTask);
    });
  }
  updateTaskCounter()
  
}


loadTasksFromLocalStorage();
