let totalSliders = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

let sliderWidth = document.querySelector('.slider').clientWidth;


document.querySelector('.slider--width').style.width = `(${sliderWidth * totalSliders})px`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;
document.querySelector('.slider--controls').style.width = `${sliderWidth}px`;

function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = (totalSliders - 1);
    }
    updateMargin();
}

function goNext(){
    currentSlide++;
    if(currentSlide > (totalSliders - 1)){
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin(){
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = 
    `-${newMargin}px`;
}

setInterval(goNext, 1700);