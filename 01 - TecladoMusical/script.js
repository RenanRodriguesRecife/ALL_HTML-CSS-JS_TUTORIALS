const teclas = document.querySelectorAll(".oitava > div")
const audioSources = document.querySelectorAll(".source-audio")


console.log(audioSources)

function desmarcar(tecla){
    tecla.classList.remove("selecionada")
}

teclas.forEach(function(tecla){
    tecla.onmousedown = function(){
        tecla.classList.add("selecionada")
       
        audioSources[0].src = `audio/${tecla.attributes[1].name}.wav`
        
        audioSources[0].play()
    }


    tecla.onmouseup = () => desmarcar(tecla)

    tecla.onmouseleave = () => desmarcar(tecla)
})



function isPlaying(audio) { return !audio.paused; }