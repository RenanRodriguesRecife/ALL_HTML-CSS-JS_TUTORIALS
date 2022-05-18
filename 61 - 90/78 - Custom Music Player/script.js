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
        name: "",
        link: "",
        artist: "",
        image: "",
    },
    {
        name: "",
        link: "",
        artist: "",
        image: "",
    },
    {
        name: "",
        link: "",
        artist: "",
        image: "",
    },
    {
        name: "",
        link: "",
        artist: "",
        image: "",
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
        index = songsList.length - 1;
    }else{
        index = songsList.length - 1;
    }
    setSong(index);
};

// play button
playButton.addEventListener("click",playAudio);

// next button
nextButton.addEventListener("click",nextSong);

//prev button
prevButton.addEventListener("click",previousSong);

window.onload = () => {
    // inciando a primeira música
    index = 0;
    setSong(index);
}