/*
    1 - verifica se existe algum registro que já aceitou o banner (cookie)
    2 - se não encontrar aparece o banner
*/

let lgpdHtml =   `
<div class="lgpd">
        <div class="lgpd--left">
            Nós utilizamos cookies para melhorar a sua experiencia do usuário. <br>
            Para conferir detalhadamente todos os cookies utilizados, leia nossa <a>politica de privacidade</a> </div>
        <div class="lgpd--right">
            <button>OK</button>
        </div>
    </div>
    <link rel="stylesheet" href="lgpd.css"></link>
`;

//Conteúdo do local storage
let lsContent = localStorage.getItem('lgpd');
if(!lsContent){
    document.body.innerHTML += lgpdHtml;

    let lgpdArea = document.querySelector('.lgpd');
    let legpdButton = lgpdArea.querySelector('button');

    legpdButton.addEventListener('click',()=>{
        lgpdArea.remove();
    })
}