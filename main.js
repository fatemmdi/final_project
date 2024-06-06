// --------open tagsoptions-------

const tagsOption = document.querySelector('.main_container_box_new_window_body_options');
const tagsBtn = document.querySelector('.main_container_box_new_window_body_tags_name');
const tagsIcon = document.querySelector('.main_container_box_new_window_body_tags_icon');
tagsBtn.addEventListener("click",TagsBtnHandler);

function TagsBtnHandler(){
    if(tagsOption.style.display == "flex"){
        tagsOption.style.display = "none";
        tagsIcon.style.transform = "rotate(0deg)";
        tagsIcon.style.background = "none";
    }else{
        tagsOption.style.display = "flex";
        tagsIcon.style.transform = "rotate(90deg)";
        tagsIcon.style.background = "gray";
    }
}


// -----------add new task-------------

const taskTitleValue = document.querySelector('.main_container_box_new_window_body_titles_input1');
const taskDescValue = document.querySelector('.main_container_box_new_window_body_titles_input2');
const createBtn = document.querySelector('.main_container_box_new_window_footer_btn');

createBtn.addEventListener('click', CreateBtnHandler);
const tagsPriority = document.getElementsByName('tags');

const inProgressToDos = [];
function CreateBtnHandler(){
    let selectedPriority;
    for(let i = 0; i < tagsPriority.length; i++){

        if(tagsPriority[i].checked === true){
            selectedPriority = tagsPriority[i].value;
        }
    }

    // return(selectedPriority, taskDescValue.value, taskTitleValue.value);

    const taskToDo = {
        title : taskTitleValue.value,
        desc : taskDescValue.value,
        priority : selectedPriority

    };

    inProgressToDos.push(taskToDo);

    localStorage.setItem('inProgressToDo',JSON.stringify(inProgressToDos));

    // console.log(taskToDo);
}

// --------new task created-------

document.addEventListener('DOMContentLoaded',newTaskCards);
const inProgressToDoListDiv = document.querySelector(".main_container_box_new_task");

function newTaskCards(){
    const inProgressToDoList = JSON.parse(localStorage.getItem('inProgressToDo'));

    inProgressToDoList.forEach(task => {
        const newtask = document.createElement('div');
        newtask.classList.add(".main_container_box_new_task");
        newtask.innerHTML = `
        <span class="main_container_box_new_task_icon">
        <svg width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2" fill="#525252"/>
            <circle cx="2" cy="9" r="2" fill="#525252"/>
            <circle cx="2" cy="16" r="2" fill="#525252"/>
            </svg>                                
    </span>
    <div class="main_container_box_new_task_text">
        <div class="main_container_box_new_task_text_check" dir="rtl">
            <input type="checkbox" name="check1" id="check1" class="main_container_box_new_task_text_check_input">
            <label for="check1" class="main_container_box_new_task_text_check_label">${task.title}</label>
            <span class="main_container_box_new_task_text_check_span-high">${task.priority}</span>
        </div>
        <div class="main_container_box_new_task_text_discription">${task.desc}</div>
    </div>`
    });

    inProgressToDoListDiv.appendChild(newtask);

    console.log(inProgressToDoList);
}
// --------------------ادامه دارد-----------------------
// --------------------add btn-------------------

const addBtn = document.querySelector(".main_container_box_new_add_text");
const newWindow = document.querySelector(".main_container_box_new_window");

addBtn.addEventListener("click",addBtnHandler);

function addBtnHandler(){

    // addBtn.style.display = 'none';
    // newWindow.style.display = 'flex';

    if(addBtn.style.display === "flex"){
        newWindow.style.display = "none";
      
    }else{
        newWindow.style.display = "flex";
    }
}
// ---------------------------------

// ------------edit & delete-------------

const editOrDElete = document.querySelector(".main_container_box_new_icons");
const icon = document.querySelector(".main_container_box_new_task_icon");

icon.addEventListener('click',editHandler);

function editHandler (){

    editOrDElete.style.display = 'flex';
}

const editBtn = document.querySelector(".main_container_box_new_icons_edit");
const editTask = document.querySelector(".main_container_box_new_card");

editBtn.addEventListener('click',editTaskHandler);

function editTaskHandler (){

    editTask.style.display = 'flex';
}