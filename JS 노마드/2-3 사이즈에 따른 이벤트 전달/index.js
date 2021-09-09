const title = document.querySelector("#title");

title.innerHTML = "Click Here!";

function handleResize(event){
    console.log("I have been resized");
    console.log(event);
}

window.addEventListener("resize", handleResize);
