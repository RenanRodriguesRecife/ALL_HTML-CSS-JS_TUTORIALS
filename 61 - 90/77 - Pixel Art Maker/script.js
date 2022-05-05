// initial references
let container = document.querySelector(".container");
let gridButton = document.getElementById("submit-grid");
let clearGridButton = document.getElementById("clear-grid");
let gridWidth = document.getElementById("width-range");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");
let widthValue = document.getElementById("width-value");
let HeightValue = document.getElementById("height-value");

// events
let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up:"mouseup",
    },
    touch:{
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
    },
};

let deviceType = "";
let draw = false;
let erase = false;
