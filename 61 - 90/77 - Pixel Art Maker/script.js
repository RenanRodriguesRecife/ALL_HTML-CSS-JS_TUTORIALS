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

//Detecta touch device
const isTouchDevice = () => {
    try{
        //Tenta criar touchEvent(Isso irá falhar para Destops)
        document.createEvent("TouchEvent")
        deviceType = "touch";
        return true;
    }catch(e){
        deviceType = "mouse";
        return false;
    }
}


isTouchDevice();

gridButton.addEventListener("click",()=>{
    //limpando o grid 
    container.innerHTML = "";
    //gerar ids unicas
    let count = 0;
    //criando linhas
    for(let i = 0; i < gridHeight.value; i++){
        count += 2;
        let div = document.createElement("div");
        div.classList.add("gridRow");
        //criando colunas
        for(let j = 0;j < gridWidth.value; j++){
            count += 2;
            let col = document.createElement("div");
            col.classList.add("gridCol");
            //criando ids unicos
            col.setAttribute("id",`gridCol${count}`);

            /*
            se o devicetype = "mouse"
            o estado do evento será events[mouse].down
            se o devicetype = "touch"
            o estado do evento será events[touch].down que é igual a touchstart
            */

            col.addEventListener(events[deviceType].down,()=>{
                //usuário começa a desenhar
                draw = true;
                //se erase = true estão o background = transparent se não é igual a cor
                if(erase){
                    col.style.background = "transparent";
                }else{
                    col.style.backgroundColor = colorButton.value;
                }
            })

           
        }

    }
})