let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

// decimal -> binário
decInp.addEventListener("input",()=>{
    let decValue = parseInt(decInp.value);
    binInp.value = decValue.toString(2)
})

// binário -> decimal 
binInp.addEventListeners("input",() =>{
    let binValue = binInp.value;
    // se o número binário é válido
    if(binValidator(binValue)){

    }else{

    }

    // verifica se o número binário não contem nenhum número diferente de 0 e 1
    function binValidator(num){
        for(let i = 0; i< num.length;i++){
            if(num[i]!="0" && num[i] !="1"){
                return false;
            }
        }
    }
})