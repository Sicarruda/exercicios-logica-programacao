/*Write a function that computes the list of the first 100 Fibonacci numbers. 
The first two Fibonacci numbers are 1 and 1. The n+1-st Fibonacci number can be 
computed by adding the n-th and the n-1-th Fibonacci number. The first few are 
therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.?*/

function fibonacci() {
  var numerosFibonacci = [1, 1];
  for (var i = 1; i < 100; i++) {
    var soma = numerosFibonacci[i] + numerosFibonacci[i - 1];
    numerosFibonacci.push(soma);
  }
  return numerosFibonacci;
}
console.log(fibonacci());
