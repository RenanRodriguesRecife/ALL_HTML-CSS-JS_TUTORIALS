const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
   
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            console.log("entrou aqui")
            nav.classList.toggle('show')

        })
    }
}


showMenu('nav__toggle','nav-menu')