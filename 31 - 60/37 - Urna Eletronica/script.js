let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');
let telaPrincipal = document.querySelector('.d-1');
let Fim = document.querySelector('.aviso--gigante')

let etapaAtual = 0;
let numero = '';
let votoBranco = false;
let votos = [];

function começarEtapa(){
    Fim.style.display = 'none'
    let etapa = etapas[etapaAtual];

    let numeroHtml = ''; 
    numero = '';
    votoBranco = false;

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
            if(candidato.fotos[i].small){
                fotosHtml += `<div class="d-1-image small"><img src="./img/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`
            }else{
                fotosHtml += `<div class="d-1-image"><img src="./img/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`
            }
        }
        lateral.innerHTML = fotosHtml;
    }else{
        seuVotoPara.style.display = "block";
        aviso.style.display = "block";
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'
    }
}

function clicou(n){
    if(etapas[etapaAtual] !== undefined){
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
}

function branco(){
    if(etapas[etapaAtual] !== undefined){
        if(numero === ''){
            votoBranco = true;
            seuVotoPara.style.display = 'block';
            aviso.style.display = 'block';
            numeros.innerHTML = '';
            descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>'
        }else{
            alert("Para votar em BRANCO, não pode ter digitado nenhum número!")
        }
    }
}

function corrige(){
    if(etapas[etapaAtual] !== undefined){
    começarEtapa();
    }
}

function confirma(){
    let etapa = etapas[etapaAtual];

    let votoConfirmado = false;

    
    if(etapas[etapaAtual] === undefined)
    {
        console.log("entrou aqui")
        etapaAtual = 0;
        Fim.style.display = 'none';
        telaPrincipal.style.display = 'flex';
        aviso.style.display = 'flex';
        console.log(etapas[etapaAtual])
        começarEtapa();
    }else if(votoBranco === true){
        console.log("Confirmando como Branco...");
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto:numero
        })
    }else if(numero.length === etapa.numeros){
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto:numero
        })
        console.log(numero)
    }
    if(votoConfirmado){
        etapaAtual++;
        if(etapas[etapaAtual] !== undefined){
            começarEtapa();
        }else{
            console.log ("entrou aqui")
            telaPrincipal.style.display = 'none';
            aviso.style.display = 'none';
            Fim.style.display = 'flex';
            console.log(votos)
        }
    }
 
}

começarEtapa();