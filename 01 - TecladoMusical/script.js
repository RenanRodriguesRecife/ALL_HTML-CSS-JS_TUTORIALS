const teclas = document.querySelectorAll(".oitava > div")
const audioSources = document.querySelectorAll(".source-audio")




function desmarcar(tecla){
    tecla.classList.remove("selecionada")
}

teclas.forEach(function(tecla){
    tecla.onmousedown = function(){
        tecla.classList.add("selecionada")
       
            audioSource.src = `audio/${tecla.attributes[1].name}.wav`
        
        audioSource.play()
    }


    tecla.onmouseup = () => desmarcar(tecla)

    tecla.onmouseleave = () => desmarcar(tecla)
})



function isPlaying(audio) { return !audio.paused; }