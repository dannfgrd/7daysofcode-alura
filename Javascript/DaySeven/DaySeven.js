const um = document.querySelector ('.um')
const dois = document.querySelector ('.dois')
const tres = document.querySelector ('.tres')
const quatro = document.querySelector ('.quatro')
const cinco = document.querySelector ('.cinco')
const seis = document.querySelector ('.seis')
const sete = document.querySelector ('.sete')
const oito = document.querySelector ('.oito')
const nove = document.querySelector ('.nove')
const zero = document.querySelector ('.zero')
const tela = document.querySelector ('.tela')
const somar = document.querySelector ('.somar')
const subtrair = document.querySelector ('.subtrair')
const dividir = document.querySelector ('.dividir')
const multiplicar = document.querySelector ('.multiplicar')
const igual = document.querySelector ('.igual')
const limpar = document.querySelector ('.limpar')

//Numeros

nove.onclick=function () {
    tela.innerHTML = tela.innerHTML + '9'; 
}
oito.onclick=function () {
    tela.innerHTML = tela.innerHTML + '8'; 
}
sete.onclick=function () {
    tela.innerHTML = tela.innerHTML + '7'; 
}
seis.onclick=function () {
    tela.innerHTML = tela.innerHTML + '6'; 
}
cinco.onclick=function () {
    tela.innerHTML = tela.innerHTML + '5'; 
}
quatro.onclick=function () {
    tela.innerHTML = tela.innerHTML + '4'; 
}
tres.onclick=function () {
    tela.innerHTML = tela.innerHTML + '3'; 
}
dois.onclick=function () {
    tela.innerHTML = tela.innerHTML + '2'; 
}
um.onclick=function () {
    tela.innerHTML = tela.innerHTML + '1'; 
}
zero.onclick=function () {
    tela.innerHTML = tela.innerHTML + '0'; 
}

//Operacoes
let numero = 0, segundoNumero = 0; 
let soma = false;
let subtrai = false;
let divide = false;
let multiplica = false;

somar.onclick=function () {
    soma = true;
    numero = parseInt(tela.innerHTML);
    tela.innerHTML = ''; 
}
subtrair.onclick=function () {
    subtrai = true;
    numero = parseInt(tela.innerHTML);
    tela.innerHTML = ''; 
}
dividir.onclick=function () {
    divide = true;
    numero = parseInt(tela.innerHTML);
    tela.innerHTML = '';
}
multiplicar.onclick=function () {
    multiplica = true;
    numero = parseInt(tela.innerHTML);
    tela.innerHTML = '';
}
igual.onclick=function () {
    segundoNumero = parseInt(tela.innerHTML);
    
    if (soma) {
        tela.innerHTML = numero + segundoNumero;
        soma = false;
    } else if (subtrai) {
        tela.innerHTML = numero - segundoNumero;
        subtrai = false;
    } else if (divide) {
        tela.innerHTML = numero / segundoNumero;
        divide = false;
    } else if (multiplica) {
        tela.innerHTML = numero * segundoNumero;
        multiplica = false;
    }
}
limpar.onclick=function () {
    tela.innerHTML = ''; 
}

