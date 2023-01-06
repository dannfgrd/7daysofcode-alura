let tentei = 0; 
let tentativa = 3;
let resposta;
let respostaCerta = (Math.floor(Math.random() * (10 - 0 + 1) + 0)).toString();

// para saber a resposta;
//console.log('resposta', respostaCerta)

while (tentei < tentativa) {
    resposta=prompt("Adivinhe um número de 0 a 10!");
    
    if (resposta === respostaCerta) {
        alert ("Você acertou!")
        break;
    } 
    else {
        alert ('Você errou!') 
        
        tentei = tentei + 1;
        alert ("Você tem mais " + (tentativa - tentei) + " tentativas")
    
        if (tentei === 3){
        alert ("A resposta é " + (respostaCerta) + " !")
        }
    }
}