let slider = document.getElementById('myRange');

slider.oninput = () =>{
    document.body.style.background = `linear-gradient(90deg,#2b2e43 ${slider.value}%,#2b2e43 ${slider.value}%,#ffffff ${slider.value}.1%,#ffffff 100%)`;

}