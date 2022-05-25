let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

// decimal -> binário
decInp.addEventListener("input",()=>{
    let decValue = parseInt(decInp.value);
    binInp.value = decValue.toString(2)
})