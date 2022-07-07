//exercicio 11
//Write a program that computes the sum of an alternating series where each
//element of the series is an expression of the form((-1)^(k+1))/(2*k-1) for 
//each value of k from 1 to a million, multiplied by 4. 

var conta = 0;
var potencia = Math.pow(10,6);
var potinho = 0; 
for(var i = 1; i<= potencia; i++){
    conta = conta + (-1)**(i + 1)/(2*i-1);
    potinho = potinho + 1;
    if(potinho == 999){
        console.log(conta);
        potinho = 0;
    }
}
conta = conta * 4

console.log(conta);

//if(i % 1000 == 0){
//   console.log("...");
//   console.log(conta)
//}    