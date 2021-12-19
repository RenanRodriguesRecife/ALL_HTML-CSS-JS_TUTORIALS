const teclas = document.querySelectorAll(".oitava > div")
const audioSources = document.querySelectorAll(".source-audio")
// const teclasObj = {}

// function createAudioSource(){
//     for(i=0;i<=teclas.length;i++){
//         let audio = document.createElement('audio');
//         audio.setAttribute("src",`audio/${teclas[i].attributes[1].name}.wav`);
//         audioSources.appendChild(audio);
//     }
// }

// console.log(audioSources)

function desmarcar(tecla){
    tecla.classList.remove("selecionada")
}

teclas.forEach(function(tecla){
    tecla.onmousedown = function(){
        tecla.classList.add("selecionada")
       
        // console.log(tecla.attributes[1].name);
        audioSources[0].src = `audio/${tecla.attributes[1].name}.wav`
        
        audioSources[0].play()
    }


    tecla.onmouseup = () => desmarcar(tecla)

    tecla.onmouseleave = () => desmarcar(tecla)
})

createAudioSource();

function isPlaying(audio) { return !audio.paused; }