const inputContainer = document.querySelector('input');
const rootElement = document.documentElement;

const lightTheme = {
    '--background-color':'#FFF',
    '--text-color':'#1A1A1A',
    '--button-background-color':'#9B8AFB',
}

const darkTheme = {
    '--background-color':'#1A1A1A',
    '--text-color':'#FFF',
    '--button-background-color':'#5925DC',
}

inputContainer.addEventListener('change',function(){
    const isChecked = inputContainer.checked;
    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
})

function changeTheme(theme){
    for(let prop in theme){
        changeProperty(prop, theme[prop])
    }
}

function changeProperty(property, value){
    rootElement.style.setProperty(property,value);
}