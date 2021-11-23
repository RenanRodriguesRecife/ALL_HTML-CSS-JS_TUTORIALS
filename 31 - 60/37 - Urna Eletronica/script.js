let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = '';

function começarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';
    console.log(etapa.numeros)
    for(let i=0;i<etapa.numeros;i++){
        numeroHtml += '<div class="numero"></div>';
    }

    seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function clicou(n){
    alert("Clicou em "+n);
}

function branco(){
    alert("Clicou em branco");
}

function corrige(){
    alert("Clicou em corrige");
}

function confirma(){
    alert("Clicou em confirma");
}

começarEtapa();