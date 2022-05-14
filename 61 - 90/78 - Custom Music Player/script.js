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

const isTouchDevice = () => {}