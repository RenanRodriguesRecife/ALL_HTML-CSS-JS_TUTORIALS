
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

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()