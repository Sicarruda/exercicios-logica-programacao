// exercicio 04
//Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

var numeroN = parseInt(prompt("Escreva um numero"));
var soma = 0;
for(var i = 1 ; i <= numeroN; i++){
    soma = soma * i;
    console.log(`soma=${soma}+${i}`);        
}
console.log(soma);

//Exercicio 05
//Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

var soma02 = 0;
for(var i = 0; i <= numeroN; i++){
    if(i % 3 == 0 || i % 5 == 0){
        soma02 = soma02 + i;
        console.log(soma02);
    }
}