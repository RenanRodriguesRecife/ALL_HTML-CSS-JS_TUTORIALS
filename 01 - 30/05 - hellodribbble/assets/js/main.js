const showMenu = (toggleID, navID) =>{
    const toggle = document.getElementById(toggleID),
          nav = document.getElementById(navID)
    
    if(toggle && nav){
        
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
            console.log(nav)
        })
    }
}
showMenu('menu-toggle','nav-menu')