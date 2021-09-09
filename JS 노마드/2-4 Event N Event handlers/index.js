const title = document.querySelector("#title");

title.innerHTML = "Click Here!";

function handleClick(){
    if(title.style.color == "red")
        title.style.color= "white";
    else
        title.style.color = "red";
}

title.addEventListener("click", handleClick);
