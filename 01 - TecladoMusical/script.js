const teclas = document.querySelectorAll(".oitava > div")
const audioSource = document.getElementById("source-audio")

//console.log(teclas)

function desmarcar(tecla){
    tecla.classList.remove("selecionada")
}

teclas.forEach(function(tecla){
    tecla.onmousedown = function(){
        tecla.classList.add("selecionada")
        audioSource.src = `audio/${tecla.attributes[1].name}.wav`
        console.log(tecla.attributes[1].name)
        audioSource.play()
    }


    tecla.onmouseup = () => desmarcar(tecla)

    tecla.onmouseleave = () => desmarcar(tecla)
})