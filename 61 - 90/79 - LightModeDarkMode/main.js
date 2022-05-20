const inputContainer = document.querySelector('input');


const lightTheme = {
    '--background-coloer':'#FFF',
    '--text-color':'#1A1A1A',
    '--button-background-color':'#9B8AFB',
}

const darkTheme = {
    '--background-coloer':'#1A1A1A',
    '--text-color':'#FFF',
    '--button-background-color':'#5925DC',
}

inputContainer.addEventListener('change',function(){
    const isChecked = inputContainer.checked;
    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
})

function changeTheme(theme){
    
}