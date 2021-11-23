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
        if(i === 0){
            numeroHtml += '<div class="numero pisca"></div>';
        }else{
        numeroHtml += '<div class="numero"></div>';
        }
    }

    seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface(){
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        }else{
            return false;
        }
    })
    if(candidato.length > 0){
        candidato = candidato[0];
        seuVotoPara.style.display = "block";
        aviso.style.display = "block";
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;

        let fotosHtml = '';
        for(let i in candidato.fotos){
            console.log(candidato.fotos[i].url)
            fotosHtml += `<div class="d-1-image"><img src="./img/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`
        }
        lateral.innerHTML = fotosHtml;
    }else{
        seuVotoPara.style.display = "block";
        aviso.style.display = "block";
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'
    }
}

function clicou(n){
    let pisNum = document.querySelector('.numero.pisca')
    if(pisNum !== null){
        pisNum.innerHTML = n;
        numero = `${numero}${n}`;

        pisNum.classList.remove('pisca');
        if(pisNum.nextElementSibling !== null){
            pisNum.nextElementSibling.classList.add('pisca');
        }else{
            atualizaInterface();
        }
    }
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