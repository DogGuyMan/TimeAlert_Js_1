const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    gretting = document.querySelector(".js-grettings");

const USER_LS = "currentUser", SHOWING_CS="showing";

function saveName(name)
{
    localStorage.setItem(USER_LS,name);
}

function handleSubmit(evt){
    evt.preventDefault();
    const curValue = input.value;
    saveName(curValue);
    printGretting(curValue);
}

function askForName(){
    form.classList.add(SHOWING_CS);
    form.addEventListener("submit", handleSubmit);
}

function printGretting(text){
    form.classList.remove(SHOWING_CS);
    gretting.classList.add(SHOWING_CS);
    gretting.innerText = `Hello ${text}`;
}

function localName(){
    const curUser = localStorage.getItem(USER_LS);
    if(curUser === null){
        askForName();
    }
    else {
        printGretting(curUser);
    }
}

function init(){
    localName();
}

init();