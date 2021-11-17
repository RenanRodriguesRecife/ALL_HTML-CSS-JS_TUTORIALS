const justBg = document.getElementsByClassName('just-bg')[0]
const logoBg = document.querySelector('.logo svg path')
const buyNow = document.getElementsByClassName('buy-now')[0]
const couch = document.querySelector('.couch svg path')
const colors = document.querySelectorAll('.colors li')

const changeColors = (e) => {
    let color = e.getAttribute('data-color')
    e.classList.add('animateColor')
    for(i=0; i<colors.lenght;i++){
        if(colors[i].hasAttribute('class')){
            colors[i].classList.remove('animateColor')
            e.classList.add('animateColor')
        }
    }

    justBg.style.backgroundColor = color;
    logoBg.style.fill = color;
    buyNow.style.backgroundColor = color;
    couch.style.fill = color;
}