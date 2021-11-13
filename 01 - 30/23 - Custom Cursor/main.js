document.getElementsByTagName('body')[0].addEventListener('mousemove',
function(n) {
    t.style.top = n.clientY + 'px',
    t.style.left = n.clientX + 'px',
    e.style.top = n.clientY + 'px',
    e.style.left = n.clientX + 'px',
    i.style.top = n.clientY + 'px',
    i.style.left = n.clientX + 'px'
});

var t = document.getElementById('cursor'),
    e = document.getElementById('cursor2'),
    i = document.getElementById('cursor3');

function addHover(t){
    e.classList.add('hover'), i.classList.add('hover');
}

function remoHover(t){
    e.classList.remove('hover'), i.classList.remove('hover');

}

remoHover();

for(var h_target = document.querySelectorAll('.hover-target'),
        a = h_target.length -1; a>= 0; a--){
            o(h_target[a])
    }

function o(t){
    t.addEventListener('mouseover',addHover),t.addEventListener('mouseout',remoHover)
}
