let optionsButtons = document.querySelectorAll(".option-button");
let advencedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");


// list of fonts
let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "cursive"
];

const initialize = () => {
    //iniciando os botões destacados
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);

    // option for fontlist
    fontList.map((value)=>{
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    //fontsize 
    for(let i = 1; i<=7;i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }
    //tamanho padrão
    fontSizeRef.value = 7;
}

//main logic
const modifyText = (command, defaultUi, value) =>{
    //execCommand executa o comando do texto selecionado
    document.execCommand(command,defaultUi, value);
}

//para operadores que não precisam de valores
optionsButtons.forEach((button) =>{
    button.addEventListener("click",()=>{
        modifyText(button.id, false,null);
    });
})

//para operadores que precisam de volores
advencedOptionButton.forEach((button) => {
    button.addEventListener("change",()=>{
        modifyText(button.id, false,button.value);
    });
});

// link button
linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a URL");
    // if link has http then pass directly else add https
    if(/http/i.test(userLink)){
        modifyText(linkButton.id, false, userLink);
    }else{
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
})

//Destaca botões clicados
const highlighter = (className, needsRemoval) => {
    className.forEach((button)=>{
        button.addEventListener("click",()=>{
            // needremovel significa que um unico botão deve está destacado
            if(needsRemoval){
                let alreadyActive = false;

                //se você já clicou no botão ele permanece ativo
                if(button.classList.contains("active")){
                    alreadyActive = true;
                }

                //Remove o destaque dos outros botões
                highlighterRemove(className);
                if(!alreadyActive){
                    //destaca botão clicado
                    button.classList.add("active");
                }
            }
            else{
                //se outros botões pode ser destacados
                button.classList.toggle("active");
            }
        })
    })
}

const highlighterRemove = (className) => {
    className.forEach((button) => {
        button.classList.remove("active");
    })
}

window.onload = initialize();