console.log("Study Planner Loaded");

/* TASK MANAGER */

function addTask(){
   
    let taskInput =
    document.getElementById("taskInput");

    let taskList =
    document.getElementById("taskList");

    if(taskInput.value === ""){

        alert("Please Enter Task");
        return;
    }

    let li =
    document.createElement("li");

    li.innerHTML = `
    
    ${taskInput.value}

    <button onclick="deleteTask(this)">
    Delete
    </button>
    
    `;

    taskList.appendChild(li);

    saveData();

    taskInput.value = "";
}
function deleteTask(button){

    button.parentElement.remove();

    saveData();
}
function saveData(){

    localStorage.setItem(
        "tasks",
        document.getElementById("taskList").innerHTML
    );
}

function showTask(){

    document.getElementById("taskList").innerHTML =
    localStorage.getItem("tasks");
}

showTask();
/* POMODORO TIMER */

let time = 1500;
let interval;

function startTimer(){

    clearInterval(interval);

    interval = setInterval(()=>{

        let minutes =
        Math.floor(time / 60);

        let seconds =
        time % 60;

        seconds =
        seconds < 10
        ? "0" + seconds
        : seconds;

        document.getElementById("timer")
        .innerText =
        `${minutes}:${seconds}`;

        time--;

        if(time < 0){

            clearInterval(interval);

            alert("Time Up");
        }

    },1000);
}
/* DARK MODE */

let darkBtn =
document.getElementById("darkBtn");

darkBtn.onclick = function(){

    document.body.classList.toggle("dark");
}