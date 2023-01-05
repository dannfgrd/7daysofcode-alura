let pergunta;

while (pergunta != 'Front-End' && pergunta != 'Back-End') {
pergunta=prompt("Você quer seguir para área de Front-End ou seguir para a área de Back-End?");

if (pergunta === 'Front-End'){
    prompt ("Você quer aprender React ou aprender Vue?");
}
else if (pergunta === 'Back-End'){
    prompt ("Você quer aprender C# ou aprender Java?");
}
else {
    alert('Você precisa digitar Front-End ou Back-End');
}
}
pergunta=prompt ("Você quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?");

pergunta=prompt ("Quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer")

if (pergunta === 'JavaScript') {
    alert ("Legal! Você quer aprender JavaScript!")
}
else if (pergunta === 'C#'){
    alert ("Legal! Você quer aprender C#!")
}
else if (pergunta === 'Java'){
    alert ("Legal! Você quer aprender Java!")
}
else if (pergunta === 'Vue'){
    alert ("Legal! Você quer aprender Vue!")
}
else if (pergunta === 'React'){
    alert ("Legal! Você quer aprender React!")
}

