let btnText = document.getElementById("btnText");
let bgColor = document.getElementById("bgColor");
let txtColor = document.getElementById("txtColor");
let txtTransform = document.getElementById("txtTransform");
//padding
let tPad = document.getElementById("tPad");
let rPad = document.getElementById("rPad");
let bPad = document.getElementById("bPad");
let lPad = document.getElementById("lPad");
//radius
let tlRad = document.getElementById("tlRad");
let trRad = document.getElementById("trRad");
let blRad = document.getElementById("blRad");
let brRad = document.getElementById("brRad");

let btn = document.getElementById("btn");

//border
let border = document.getElementsByName("border");
let borderInp = document.getElementById("border");

//generate code button
let generateCode = document.getElementById("generateCode");

let html = document.querySelector(".html");
let css = document.querySelector(".css");

//code
let htmlCode = document.getElementById("html-code");
let csCode = document.getElementById("css-code");

let cssCode = "";
let bColor = "";
let tColor = "";
let tTransform = "";
let tPadding = "";
let lPadding = "";
let bPadding = "";
let rPadding = "";
let tLeftRadius = "";
let bLeftRadius = "";
let bRightRadius = "";
let borderProp = "";


btnText.addEventListener('input', function(){
    btn.innerText = btnText.value;
    button = `<button>${btnText.value}</button>`
})

// 

bgColor.addEventListener('input',function(){
    bColor = bgColor.value;
    btn.style.backgroundColor = bgColor.value;
})

txtColor.addEventListener('input',function(){
    tColor = txtColor.value;
    btn.style.color = txtColor.value;
})

txtTransform.addEventListener('input',function(){
    tTransform = txtTransform.value;
    btn.style.textTransform = txtTransform.value;
})

tPad.addEventListener('input',function(){
    tPadding = `${tPad.value}px`;
    btn.style.paddingTop = `${tPad.value}px`;
})

rPad.addEventListener('input',function(){
    rPadding = `${rPad.value}px`;
    btn.style.paddingRight = `${rPad.value}px`;
})

bPad.addEventListener('input',function(){
    bPadding = `${bPad.value}px`;
    btn.style.paddingBottom = `${bPad.value}px`;
})

lPad.addEventListener('input',function(){
        lPadding = `${lPad.value}px`;
        btn.style.paddingLeft = `${lPad.value}px`;
})

tlRad.addEventListener('input', function(){
    tLeftRadius = `${tlRad.value}px`;
    btn.style.borderTopLeftRadius = `${tlRad.value}`;
})

trRad.addEventListener('input', function(){
    tRightRadius = `${trRad.value}px`;
    btn.style.borderTopRightRadius = `${trRad.value}`;
})

blRad.addEventListener('input',function(){
    bLeftRadius = `${blRad.value}px`;
    btn.style.borderBottomLeftRadius = `${blRad.value}px`
})

brRad.addEventListener('input', function(){
    bRightRadius = `${brRad.value}px`;
    btn.style.borderBottomRightRadius = `${brRad.value}px`;
})

border[0].addEventListener('click',function(){
    borderInp.style.opacity = 1;
})

borderInp.addEventListener('click',function(){
    btn.style.border = borderInp.value;
    borderProp = borderInp.value;
})


border[1].addEventListener('click',function(){
    btn.style.border = "none";
    borderInp.style.opacity = 0;
    borderProp = "none";
})

const filterProps = (props, value) => {
    return value === "" ? : value === "px" ? "" : `${props}:${value};\n`;
}