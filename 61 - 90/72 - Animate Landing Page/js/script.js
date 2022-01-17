const onLoad = () => {
    const whiteBox = document.querySelector(".white-box");
    const slideImg1 = document.querySelector(".slide-1 img");
    const slidePrice1 = document.querySelector(".price p");
    const itemName = document.querySelector(".item-name");
    const rating = document.querySelector(".rating");
    const generalName = document.querySelector(".numbers");
    const numbers = document.querySelector(".numbers");
    const btn = document.querySelector(".btn");

    let t1 = new TimelineLite();

    t1.fromTo(whiteBox, 1,{height: '0vh'},{height: '55vh'})
      .fromTo(slideImg1, 1 ,{opacity: 0},{opacity: 1})
      .fromTo(numbers, 1, {opacity: 0},{opacity: 1})
      .fromTo(itemName, 1,{opacity: 0},{opacity: 1})
      .fromTo(rating, 1,{opacity: 0,y:'-20px'},{opacity: 1,y: '0px',ease:Power4.easeOut},'start')
      .fromTo(generalName, 1, {marginTop: '120px'},{marginTop: '0px',ease:Power4.easeOut},'start')
      .fromTo(slidePrice1, 1, {opacity: 0, y: '20px'},{opacity: 1,y: '0px',ease:Power4.easeOut},'start')
      .fromTo(btn, 1,{opacity: 0},{opacity:1},'start')
};

const showItem = e => {
    const itemId = e.id;
    const activaLinks = document.querySelector('.activaLink');
    e.classList.add('activeLink')
    const slides = document.getElementsByClassName('main-content');
    for(let i=0; i<slides.length;i++){
        
    }
}