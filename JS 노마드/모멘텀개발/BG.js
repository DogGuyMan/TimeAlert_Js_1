const body = document.querySelector("body");

const IMAGE_FILE_LENGTH = 5;

function paintImage(Num){
    const image = new Image();
    image.src = `imgData/_ (${Num}).jpg`
    image.classList.add("bgImage");
    body.prepend(image)
}

function init(){
    let randomNum = Math.ceil((Math.random() * IMAGE_FILE_LENGTH));
    paintImage(randomNum);
}

init();