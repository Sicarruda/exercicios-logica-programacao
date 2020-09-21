//exercicio 07
//Write a program that prints a multiplication table for numbers up to 12.

var multiplicador = parseInt(prompt("Escreva um numero"));

console.log("Tabuada do " + multiplicador);
for(var i = 1; i <=10; i++){
    var conta = multiplicador * i; 
    console.log(multiplicador + " * " + i + " = " + conta);
}

for(var a = 1; a <= multiplicador; a++){
    console.log("Tabuada do " + a);
    for(var i = 1; i <=10; i++){
        var conta = a * i; 
        console.log(a + " * " + i + " = " + conta);
        
    }
}





