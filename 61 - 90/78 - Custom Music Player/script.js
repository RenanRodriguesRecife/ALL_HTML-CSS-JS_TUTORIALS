const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const repeatButton = document.getElementById("repeat");
const shuffleButton = document.getElementById("shuffle");
const audio = document.getElementById("audio");
const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");
const pauseButton = document.getElementById("pause");
const playButton = document.getElementById("play");
const playlistButton = document.getElementById("playlist");
const maxDurataion = document.getElementById("max-duration");
const currentTimeRef = document.getElementById("current-time");
const progressBar = document.getElementById("progress-bar");
const playlistContainer = document.getElementById("playlist-container");
const closeButton = document.getElementById("close-button");
const playlistSongs = document.getElementById("playlist-songs");
const currentProgress = document.getElementById("current-progress");

let index;

let loop = true;

const songsList = [
    {
        name: "Farewell to the Fairground",
        link: "./audio/White Lies - Farewell to the Fairground.mp3",
        artist: "whitelies",
        image: "./img/whitelies.jpg",
    },
    {
        name: "Too Long Awake",
        link: "./audio/Too Long Awake.mp3",
        artist: "Idlewild",
        image: "./img/idlewild.jpg",
    },
    {
        name: "The mother we share",
        link: "./audio/CHVRCHES - The mother we share.mp3",
        artist: "Chvrches",
        image: "./img/chvrches.jpg",
    }
];


let events = {
    mouse: {
        click:"click",
    },
    touch:{
        click:"touchstart",
    },
}

let deviceType = "";

const isTouchDevice = () => {
    try{
        //tenta criar um evento trouch (irá falhar no desktops)
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    }catch(e){
        deviceType = "mouse";
        return false;
    }
}

console.log(isTouchDevice());

// time convert format (ms to seconds, minutes)
const timeFormatter = (timeInput) => {
    let minute = Math.floor(timeInput / 60);
    minute = minute < 10 ? "0" + minute : minute;
    let second = Math.floor(timeInput % 60);
    second = second < 10 ? "0" + second : second;
    return `${minute}:${second}`;
}

console.log(timeFormatter(400));

//set song
const setSong = (arrayIndex) => {
    let {name, link, artist, image} = songsList[arrayIndex];
    audio.src = link;
    songName.innerHTML = name;
    songArtist.innerHTML = artist;
    songImage.src = image;
    //mostra a duração do tempo
    audio.onloadedmetadata = () => {
        maxDurataion.innerHTML = timeFormatter(audio.duration);
    }
}

//play song
const playAudio = () =>{
    audio.play();
    pauseButton.classList.remove("hide");
    playButton.classList.add("hide");
}

//repeat button
repeatButton.addEventListener("click",()=>{
    if(repeatButton.classList.contains("active")){
        repeatButton.classList.remove("active");
        audio.loop = false;
        console.log("repeat off");
    }else{
        repeatButton.classList.add("active");
        audio.loop = true;
        console.log("repeat on");
    }
});

//Next song
const nextSong = () => {
    if(loop){
        if(index == songsList.length - 1){
            //se a ultima musica estiver sendo tocada
            index = 0;
        }else{
            index += 1;
        }
        setSong(index);
        playAudio();
    }
    else{
        //encontra um index aleatódio e toca a musica
        let randIndex = Math.floor(Math.random() = songsList.lenght);
        console.log(randIndex);
        setSong(randIndex);
        playAudio();
    }
}

//pause song
const pauseAudio = () => {
    audio.pause();
    pauseButton.classList.add("hide");
    playButton.classList.remove("hide");
}

//musica anterior
const previousSong = () => {
    if(index > 0){
        pauseAudio();
        index -= 1;
    }else{
        index = songsList.length - 1;
    }
    setSong(index);
    playAudio();
};

//proxima musica quando a música termina
audio.onended = () => {
    nextSong();
};

//embaralhar lista de musicas
shuffleButton.addEventListener("click",()=>{
    if(shuffleButton.classList.contains("active")){
        shuffleButton.classList.remove("active");
        loop = true;
        console.log("shuffle off");
    }else{
        shuffleButton.classList.add("active");
        loop = false;
        console.log("shuffle on")
    }
})

// play button
playButton.addEventListener("click",playAudio);

// next button
nextButton.addEventListener("click",nextSong);

//prev button
prevButton.addEventListener("click",previousSong);

// pause button
pauseButton.addEventListener("click",pauseAudio);

//if click on progress bar
isTouchDevice();
progressBar.addEventListener(events[deviceType].click,(event)=>{
    //start of progressBar
    let coordStart = progressBar.getBoundingClientRect().left;
    //mouse click position
    let coordEnd = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
    let progress = (coordEnd - coordStart)/ progressBar.offsetWidth;
    // aplicando a largura para o progresso da barra
    currentProgress.style.width = progress * 100 + "%";
    //aplicando o tempo
    audio.currentTime = progress * audio.duration;
    //play
    audio.play();
    pauseButton.classList.remove("hide");
    playButton.classList.add("hide");
    
})

//update the progress bar a cada segundo
setInterval(() =>{
    currentTimeRef.innerHTML = timeFormatter(audio.currentTime);
    currentProgress.style.width = (audio.currentTime/audio.duration.toFixed(3))*100 + "%";
})

//update time
audio.addEventListener("timeupdate",()=>{
    currentTimeRef.innerHTML = timeFormatter(audio.currentTime);
})


// create playlist
const initializePlaylist = () => {
    for (let i in songsList){
        playlistSongs.innerHTML += `
        <li class='playlistSong' on click='setSong(${i})'>
            <div class="playlist-image-container">
                <img src="${songsList[i].image}"/>
            </div>
            <div class="playlist-song-details">
                <span id="playlist-song-name">
                    ${songsList[i].name}
                </span>
                <span id="playlist-song-artist-album">
                    ${songsList[i].artist}
                </span>
            </div>
        </li>`;
    }
}

//display playlist
playlistButton.addEventListener("click",()=>{
    playlistContainer.classList.remove("hide");
})

closeButton.addEventListener("click",()=>{
    playlistContainer.classList.add("hide");
})

window.onload = () => {
    // inciando a primeira música
    index = 0;
    setSong(index);
    initializePlaylist();
}
