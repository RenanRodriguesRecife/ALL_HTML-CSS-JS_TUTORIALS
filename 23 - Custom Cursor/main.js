document.getElementsByTagName('body')[0].addEventListener('mousemove',
function(n) {
    t.style.top = n.clientX = 'px',
    e.style.left = n.clientX = 'px',
    e.style.top = n.clientX = 'px',
    i.style.left = n.clientX = 'px',
    i.style.top = n.clientX = 'px',
});

var t = document.getElementById('cursor'),
    e = document.getElementById('cursor2'),
    i = document.getElementById('cursor3');

function n(t){
    e.classList.add('hover'), i.classList.add('hover');
}

function s(t){
    e.classList.remove('hover'), i.classList.remove('hover');

}

8:20