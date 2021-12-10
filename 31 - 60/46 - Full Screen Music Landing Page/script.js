let musicIcon = document.getElementById('music-icon');
let chName = document.getElementById('ch-name');
let sgName = document.getElementById('sg-name');
let seek = document.querySelector('.seek');
let time = document.querySelector('.time');
let card1 = document.querySelector('.card-1');
let card2 = document.querySelector('.card-2');
let card3 = document.querySelector('.card-3');
let headingLg = document.querySelector('.heading-lg');

const t1 = new TimelineLite()

t1.from(musicIcon, .8, {opacity: 0, scale: 0,ease: Back.easeOut},'start');

mySplitText = new SplitText(chName, {type: 'words,chars,lines'});
chars = mySplitText.chars;
t1.staggerFrom(chars, .8,{opacity: 0, y:5,});

mySplitText2 = new SplitText(sgName, {type: 'words,chars,lines'});
chars2 = mySplitText2.chars;
t1.staggerFrom(chars2, .8, {opacity: 0, y:5, ease:Bounce.easeOut, delay: .3},.09,'start')

t1.from(seek, 1, {opacity: 0, y: 20, ease: Power4.easeOut},1.5, "start");
t1.from(time, 1, {opacity: 0, y: 20, ease: Power4.easeOut},1.5, "start");

t1.from(card1, .8,{y:1000,scale: 5, ease:Power4.easeOut},'start3');

t1.from(
    card2,
    0.8,
    { y: 1000, scale: 5, ease: Power4.easeOut, delay: 0.2},
    "start3"
);
t1.from(
    card3,
    0.8,
    {y:1000, scale: 5, ease: Power4.easeOut, delay: 0.4},
    "start3"
);

t1.from(headingLg, 0.8, {opacity: 0, scale: 1.8, ease: Back.easeOut});
