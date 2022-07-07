//Write three functions that compute the sum of the numbers in a list: using a for-loop,
//a while-loop and recursion.

var lista = [ 1,2,3,4,5];

function somaFor(array){
    var conta = 0;
    for(var i = 0; i < array.length; i++){
        conta += array[i];
    }
    return conta;
}
console.log(somaFor(lista));

function somaRecursao(array,i){
    if(i < array.length){
        return array[i] + somaRecursao(array, i + 1);
    }
    return 0;
}
console.log(somaRecursao(lista,0));

function somaWhile(array,i){
    var conta = 0;
    while(i < array.length){
        conta += array[i];
        i++;
    }
    return conta;
}
console.log(somaWhile(lista,0));