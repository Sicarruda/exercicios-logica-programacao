// Exercicio 08
//Write a program that prints all prime numbers. 
//(Note: if your programming language does not support arbitrary size 
//numbers, printing all primes up to the largest number you can easily 
//represent is fine too.)

var numeroPrimo = 50;
for(var i = 1; i<=numeroPrimo; i++){
    var controle = 0;
    for(var a = 1; a <=i; a++){
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
