let nome;
let idade;
let linguagem;
let resposta;

const elementos = document.querySelectorAll('#enviar');
const botaoEnviar = elementos[0];

botaoEnviar.onclick=function () {

    const input1 = document.querySelectorAll('#nomesobrenome');
    const nomeSobrenome = input1[0];

    nome = nomeSobrenome.value;

    const input2 = document.querySelectorAll('#idade');
    const idadeInput = input2[0];

    idade = idadeInput.value;

    const input3 = document.querySelectorAll('#linguagem');
    const linguagemInput = input3[0];

    linguagem = linguagemInput.value;

    alert ("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!")

    pergunta=prompt("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO.")

    if (pergunta === '1'){
        alert ("Muito bom! Continue estudando e você terá muito sucesso.")
    }
    else {
        alert ("Ahh que pena... Já tentou aprender outras linguagens?")
    }

}



