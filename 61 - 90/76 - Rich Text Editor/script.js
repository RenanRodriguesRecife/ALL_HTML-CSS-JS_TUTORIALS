let optionsButtons = document.querySelectorAll(".option-button");
let advencedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementsByName("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll("script");


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
}

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