//Exercicio 09
//Escreva um jogo de adivinhação em que o usuário deve adivinhar um número secreto. 
//Depois de cada suposição, o programa informa ao usuário se seu número
//era muito grande ou muito pequeno.
//No final, deve ser impresso o número de tentativas necessárias.
//Conta apenas como uma tentativa se eles inserirem o mesmo número várias vezes consecutivamente.

var jogada = 0;

function geradorNumeroAleatorio(){
    var conta = Math.floor(Math.random() * 10 + 1);
    return conta;
}

var numeroAleatorio = geradorNumeroAleatorio();
var tentativas = 0
var a = 0
var b = 0

function jogar(){
    jogada = parseInt(prompt("Qual é o numero?"));    
    a = b
    b = jogada
    if(a != jogada){
        tentativas = tentativas + 1
    } 
    if(jogada == numeroAleatorio){
        alert("Você acertou! Você percisou de " + tentativas +" para acertar.");
    }else{
        verAproximacao(); 
        jogar();   
    }

}

jogar();

 function verAproximacao(){
     if(jogada < numeroAleatorio){
         alert("Muito baixo, tente de novo!");
     }else if (jogada > numeroAleatorio){
         alert("Muito alto, tente de novo!");
     }else{
         alert("Incorreto. Por favor tente novamente.");
     }
 }

