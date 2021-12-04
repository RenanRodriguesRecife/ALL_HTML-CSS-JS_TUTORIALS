const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
function navToggle(){
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
}

function hideNav(){
    if(window.innerWidth > 768 && btn.classList.contains('open')){
        navToggle()
    }
}

btn.addEventListener('click',navToggle);
window.addEventListener('resize', hideNav);
