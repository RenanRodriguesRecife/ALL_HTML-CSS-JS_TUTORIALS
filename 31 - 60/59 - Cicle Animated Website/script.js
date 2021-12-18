let circles = document.getElementById('circles');
let btn = document.querySelector('.btn');
let furtherDetail = document.querySelector('.further-detail');
let triangle = document.querySelector('.triangle');

//loop for generation 16 circles
for(let i=1; i<=16;i++){
    //size of the circle
    let size = i % 2 === 0 ? `${i + 1+ '50'}` : `${i + 1}50`;

    //margin var store the margin of the circle. (center the circle)
    let margin = -(size/2);

    //animation variable stores the css  animation value
    let animation = i % 2 === 0 ? "rotate-1 3s linear infinite" : "rotate-2 3s linear infinite";

    //box shadow variable store the css box shadow
    let boxShadow = i % 2 === 0 ? "inset 0.1rem 0.2rem 0.6rem rgba(79,193,233,0.99)" : "inset 0.1rem 0.2rem 0.6rem rgba(255, 165, 0,0.99)";

    //new div element
    let circle = document.createElement('div');

    circle.classList.add('circle');

    //set style stribute to the element
    circle.setAttribute("style", `width: ${size}px; height: ${size}px; z-index: -${i}; margin: ${margin}px; animation: ${animation};
    box-shadow: ${boxShadow};`);

    circles.appendChild(circle);

}

btn.addEventListener('click',function(){
    furtherDetail.classList.toggle('further-detail-toggle');
    triangle.classList.toggle('triangle-toggle');
})
triangle.addEventListener('click',function(){
    furtherDetail.classList.toggle('further-detail-toggle');
    triangle.classList.toggle('triangle-toggle');
})