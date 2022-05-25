let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

// decimal -> binário
decInp.addEventListener("input",()=>{
    let decValue = parseInt(decInp.value);
    binInp.value = decValue.toString(2);
    errorMsg.textContent = "";
})

// binário -> decimal 
binInp.addEventListener("input",() =>{
    let binValue = binInp.value;
    // se o número binário é válido
    if(binValidator(binValue)){
        decInp.value = parseInt(binValue, 2);
        errorMsg.textContent = "";
    }else{
        errorMsg.textContent = "Please Enter An Valid Binary Input";
    }   

    // verifica se o número binário não contem nenhum número diferente de 0 e 1
    function binValidator(num){
        for(let i = 0; i< num.length;i++){
            if(num[i]!="0" && num[i] !="1"){
                return false;
            }
        }
        return true;
    }
})