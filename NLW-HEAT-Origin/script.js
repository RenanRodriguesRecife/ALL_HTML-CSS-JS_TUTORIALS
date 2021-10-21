
const LinksSocialMedia = {
    github: "RenanRodriguesRecife",
    youtube: "5432",
    facebook: "",
    instagram: "",
    twitter: ""
}

changeSocialMediaLinks()

function changeSocialMediaLinks(userName){
    document.getElementsById('userName').
    textContent = userName
}

function changeSocialMediaLinks(){
    
    for(let li of socialLinks.children){
        const social = li.getAttribute('class')
        li.children[0].href = `http://${social}.com/${LinksSocialMedia[social]}`   
    }
}


