const title = document.querySelector("#title");

const CLICED_CLASS = "clicked";

function handleClick()
{
    title.classList.toggle("clicked");
}

title.addEventListener("click", handleClick);
