const onLoad = () => {
    const whiteBox = document.querySelector(".white-box");
    const slideImg1 = document.querySelector(".slide-1 img");
    const slidePricel = document.querySelector(".price p");
    const itemName = document.querySelector(".item-name");
    const rating = document.querySelector(".rating");
    const generalName = document.querySelector(".numbers");
    const numbers = document.querySelector(".numbers");
    const btn = document.querySelector(".btn");

    let t1 = new TimelineLite();

    t1.fromTo(whiteBox, 1,{height: '0vh'},{height: '55vh'})
};

