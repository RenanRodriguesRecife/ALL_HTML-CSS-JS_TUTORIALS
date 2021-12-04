const btn = document.getElementById('menu-btn');

function navToggle(){
    btn.classList.toggle('open');
}

btn.addEventListener('click',navToggle);