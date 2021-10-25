const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
        console.log(toggle)
    if(toggle && nav){
        toggle.addEventListener('click',() => {
            
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')