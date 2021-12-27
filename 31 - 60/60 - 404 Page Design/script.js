let divOpen = document.querySelector(".div-open-data");
let divClose = document.querySelector(".div-close-data");
let divImg = document.querySelector(".div-img-data");
let divOpenCursor = document.querySelector(".div-open-cursor");
let divCloseCursor = document.querySelector(".div-close-cursor");
let divImgCursor = document.querySelector(".div-img-cursor");
let mouse = document.querySelector(".mouse");
let mouseOptions = document.querySelector(".mouse-options");
let execute = document.querySelector(".execute");
let wrapper = document.querySelector(".wrapper");
let errorPage = document.querySelector(".error-page");


let divOpenData = "<div>";
let divCloseData = "</div>";
let divImgData = "<img src='./img/404.jpg'/>";

let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;
let animationSpeed = 200;

divImgCursor.style.animationDelay = "ls";
divCloseCursor.style.animationDelay = "6.5s";
mouse.style.animationDelay = "8s";

setTimeout(() => {
    mouseOptions.style.opacity = 1;
}, 13000);

setTimeout(() =>{
    mouse.style.animation = "move2 1s ease forwards";
},13500);

setTimeout(() =>{
    execute.style.backgroundColor = "#656d78";
}, 13600);

setTimeout(() =>{
    execute.style.opacity = "0";
}, 14500);

setTimeout(() =>{
    errorPage.style.opacity = "1";
}, 14600);

function divOpenTyping(){
    divOpen.innerHTML += divOpenData.charAt(currentIndex1);
    currentIndex1++;
    setTimeout(divOpenTyping, animationSpeed);
    currentIndex1 === divOpenData.length ? removeCursor(divOpenCursor) : null;
}

function divImgTyping(){
    divImg.innerHTML += divImgData.charAt(currentIndex2);
    currentIndex2++;
    setTimeout(divImgTyping, animationSpeed);
    currentIndex2 === divImgData.length ? removeCursor(divImgCursor) : null;
}


function divCloseTyping(){
    divClose.innerHTML += divCloseData.charAt(currentIndex3);
    currentIndex3++;
    setTimeout(divCloseTyping, animationSpeed);
    currentIndex3 === divCloseData.length ? removeCursor(divCloseCursor) : null;
}

function removeCursor(cursor){
    cursor.style.opacity = 0;
    cursor.style.animation = "none";
}

function allCall(){
    setTimeout(divOpenTyping, 100);
    setTimeout(divImgTyping, 1200);
    setTimeout(divCloseTyping, 6700);
}

allCall();