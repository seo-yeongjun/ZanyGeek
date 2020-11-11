const toDoForm = document.querySelector(".todoform"), //form 변수
    toDoInput = toDoForm.querySelector('input'), //input 변수
    toDoList = document.querySelector(".todolist"); //dl 변수

const TODOSAVE = "toDos"; //todo문자열 저장을 위한 변수

let toDos = []; //todo들의 배열

function DATE() {  //날짜표시
    const clock = document.querySelector(".date");
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth();
    const day = time.getDay();
    clock.innerText = `${year}` + `.` + `${`${month}` < 10 ? `${0}` + `${month}` : `${month}`}` + `.` + `${`${day}` < 10 ? `${0}` + `${day}` : `${day}`}`
}

function saveToDos()// ToDo 저장을 위한 함수
{
    localStorage.setItem(TODOSAVE, JSON.stringify(toDos));
}

function MakeToDoList(newtext) {  //todolist 그리기 함수
    const dd = document.createElement("dd"); //새로운 리스트 요소 dd를 만듬
    const id = toDos.length + 1;
    const newCheckBox = document.createElement("input"); //채크 박스
    newCheckBox.type = 'checkbox';
    newCheckBox.id = "cb_" + id;
    newCheckBox.onclick = DoneLine;

    const delBtn = document.createElement("img"); //삭제 버튼
    delBtn.src = "icon/garbage.svg";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span"); //리스트 내용
    span.id = "item_" + id;
    span.innerText = newtext;

    var DDItem = document.createElement("dd"); //리스트
    DDItem.id = id;
    DDItem.appendChild(newCheckBox);
    DDItem.appendChild(span);
    DDItem.appendChild(delBtn);
    toDoList.appendChild(DDItem);

    const toDoObj = {
        text: newtext,
        id: id
    };
    toDos.push(toDoObj);
    saveToDos();
}
function DoneLine() {  //채크시 중간 줄을 만들기 위한 함수
    var cbId = this.id.replace("cb_", "");
    var itemText = document.getElementById("item_" + cbId);

    if (this.checked) {
        itemText.style.textDecoration = "line-through";
        itemText.style.color = "#FB1D70";
    }
    else {
        itemText.style.textDecoration = "none";
        itemText.style.color = "black";
    }
}

function handleSubmit(event) { //입력 submit 함수
    event.preventDefault();
    const currentValue = toDoInput.value;
    MakeToDoList(currentValue);
    toDoInput.value = "";
}

function loadToDos() { //저장된 메모 불러오는 함수
    const loadedToDos = localStorage.getItem(TODOSAVE);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            MakeToDoList(toDo.text);
        });
    }
}

function deleteToDo(event) {
    const btn = event.target;
    const dd = btn.parentNode;
    toDoList.removeChild(dd);
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(dd.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();