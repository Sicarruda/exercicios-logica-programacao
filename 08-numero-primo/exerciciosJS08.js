// Exercicio 08
//Write a program that prints all prime numbers. 
//(Note: if your programming language does not support arbitrary size 
//numbers, printing all primes up to the largest number you can easily 
//represent is fine too.)

var numeroPrimo = 50;
for(var i = 1; i<=numeroPrimo; i++){
    var controle = 0;
    for(var a = 1; a <=i; a++){
      //não precisa da linha de baixo você repete no ela no if
        var conta = i % a;
        if(i % a == 0){
            controle++;
        }
    }
    if(controle == 2){
        console.log(" ");
        console.log(i);
    }
}
/* solução generica para qualquer numero primo
var numerosPrimos = [];   
function checarPrimo(numero){
    for (var i = 2; i<numero; i++){
        if(numero % i == 0 ){
            return false
        }
    }
    return true;
}
for (var j = 2; j< n; j++){
    var ehPrimo = checarPrimo(j);
    if(ehPrimo){
        numerosPrimos.push(j);
    }
}*/