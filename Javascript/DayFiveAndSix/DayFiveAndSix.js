//Página 1
let nome;
let remover;
const botaoSim = document.querySelector ('.caixa1')
const botaoNao = document.querySelector ('.caixa2')
const botaoRemover = document.querySelector ('.caixatexto')

botaoSim.onclick=function () {
    document.getElementById("pagina1").style.display = "none";
    document.getElementById("pagina2").style.display = "block";
}
botaoNao.onclick=function () {
    document.getElementById("pagina1").style.display = "none";
    document.getElementById("pagina3").style.display = "block";
}
botaoRemover.onclick=function () {
    document.getElementById("pagina1").style.display = "none";
    document.getElementById("pagina4").style.display = "block";
}

//Página 2
const botaoVoltar = document.querySelector ('.voltar')
const botaoVerLista = document.querySelector ('.verlista')
const botaoFrutas = document.querySelector ('.caixa3')
const botaoLaticinios = document.querySelector ('.caixa4')
const botaoCongelados = document.querySelector ('.caixa5')
const botaoDoces = document.querySelector ('.caixa6')



botaoVoltar.onclick=function () {
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina1").style.display = "block";
}
botaoVerLista.onclick=function () {
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "block";
}
botaoFrutas.onclick=function () {
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "block";

    const adicionarFrutas = document.querySelector ('#produtos')
    const adicionarFrutas1 = adicionarFrutas [0];

    nome = adicionarFrutas.value;

    const adicionarFrutasLista = document.querySelector ('.frutas .caixalista')
    const adicionarFrutasLista1 = adicionarFrutasLista[0];

    adicionarFrutasLista.innerHTML = adicionarFrutasLista.innerHTML + "<li>" + nome + "</li>"; 
}
botaoLaticinios.onclick=function () {
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "block";

    const adicionarLaticinios = document.querySelector ('#produtos')
    const adicionarLaticinios1 = adicionarLaticinios [0];

    nome = adicionarLaticinios.value;

    const adicionarLaticiniosLista = document.querySelector ('.laticinios .caixalista')
    const adicionarLaticiniosLista1 = adicionarLaticiniosLista[0];

    adicionarLaticiniosLista.innerHTML = adicionarLaticiniosLista.innerHTML + "<li>" + nome + "</li>"; 
}
botaoCongelados.onclick=function () {
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "block";

    const adicionarCongelados = document.querySelector ('#produtos')
    const adicionarCongelados1 = adicionarCongelados [0];

    nome = adicionarCongelados.value;

    const adicionarCongeladosLista = document.querySelector ('.congelados .caixalista')
    const adicionarCongeladosLista1 = adicionarCongeladosLista[0];

    adicionarCongeladosLista.innerHTML = adicionarCongeladosLista.innerHTML + "<li>" + nome + "</li>"; 
}
botaoDoces.onclick=function () {
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "block";

    const adicionarDoces = document.querySelector ('#produtos')
    const adicionarDoces1 = adicionarDoces [0];

    nome = adicionarDoces.value;

    const adicionarDocesLista = document.querySelector ('.doces .caixalista')
    const adicionarDocesLista1 = adicionarDocesLista[0];

    adicionarDocesLista.innerHTML = adicionarDocesLista.innerHTML + "<li>" + nome + "</li>"; 
}

//Página 3

const botaoVoltar2 = document.querySelector ('.voltar2')
const botaoInicio = document.querySelector ('.inicio')

botaoVoltar2.onclick=function () {
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina2").style.display = "block";
}
botaoInicio.onclick=function () {
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina1").style.display = "block";
}

//Página 4

const botaoVoltar3 = document.querySelector ('.pagina4 .boxvoltarinicio .voltar2')
const botaoInicio2 = document.querySelector ('.pagina4 .boxvoltarinicio .inicio')
const removerLista = document.querySelector ('.removerbotao')
const inputRemover = document.querySelector('.pagina4 .container2 .input-padrao')

botaoVoltar3.onclick=function () {
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina3").style.display = "block";
}
botaoInicio2.onclick=function () {
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina1").style.display = "block";
}
removerLista.onclick=function () {
    const itens = document.querySelectorAll('.compras li')
    
    document.getElementById("pagina4").style.display = "none";
    document.getElementById("pagina3").style.display = "block";

    remover = inputRemover.value;

 for (let i = 0; i < itens.length; i++) {
     if (itens[i].textContent === remover) {
         itens[i].remove();
     }
 }
}

 




