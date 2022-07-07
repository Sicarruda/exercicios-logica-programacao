// exercicio 06
//Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

var numeroN = parseInt(prompt("Escreva um numero"));
var operacao = prompt("Você que SOMAR ou MULTIPLICAR?");

function fazersoma(){
    var soma = 0;
    for(var i = 0 ; i <= numeroN; i++){
        soma = soma + i;
        console.log(`soma=${soma}+${i}`);          
    }
    console.log(soma);
}
function fazerMutiplicacao(){
    var multiplica = 1;
    for(var i = 1 ; i <= numeroN; i++){
        multiplica = multiplica * i;
        console.log(`Multiplicação=${multiplica}*${i}`);          
    }
    console.log(multiplica);
}

if(operacao == "SOMAR"){
    fazersoma();
}else if(operacao == "MULTIPLICAR"){
    fazerMutiplicacao();
}else{
    alert('Por favor, tente de novo');
}

