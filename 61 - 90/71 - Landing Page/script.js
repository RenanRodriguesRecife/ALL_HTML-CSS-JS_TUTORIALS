const collections = document.querySelector(".collections");
const chevron = document.querySelector(".chevron");
const signupBtn = document.querySelector(".signup");
const signupForm = document.querySelector(".signup-form");
const signupModalClose = document.querySelector(".signup-modal span");
const loginBtn = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const loginModalClose = document.querySelector(".login-modal span");

const showCollection = () => {
    collections.classList.toggle('collections-toggle');
    chevron.classList.toggle('chevron-toggle');
}

chevron.addEventListener('click',showCollection);

signupBtn.addEventListener('click',function(){
    signupForm.classList.add('show-signup-modal');
})

signupModalClose.addEventListener('click',function(){
    signupForm.classList.add('show-signup-modal');
})

signupBtn.addEventListener('click',function(){
    loginForm.classList.add('show-login-modal');
})

signupModalClose.addEventListener('click',function(){
    loginForm.classList.add('show-signup-modal');
})
