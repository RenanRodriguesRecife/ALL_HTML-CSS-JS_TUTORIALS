let getFactBtn = document.getElementById("get-fact-btn");
let ranFactBtn = document.getElementById("ran-fact-btn");
let fact = document.querySelector(".fact");
let url = "http://numbersapi.com/";

let fetchFact = (num) => {
    let finalUrl = url + num;
    fetch(finalUrl)
    .then((resp) => resp.text())
    .then((data) => {
        fact.innerHTML = `<h2>${num}</h2>
        <p>${data}</p>`;
        document.querySelector(".container").append(fact);
    })
}

let getFact = () => {
    let num = document.getElementById("num").value;
    if(num){
        if(num >= 0 && num <= 300){
            fact.style.display = "block";
            fetchFact(num);
        }else{
            fact.style.display = "block";
            fact.innerHTML = `<p class="msg"> Please enter a number between 0 to 300.</p>`;
        }
    }else{
        fact.style.display = "block";
        fact.innerHTML = `<p class="msg">The input field cannot be empty</p>`;
    }
}

getFactBtn.addEventListener("click",getFact);