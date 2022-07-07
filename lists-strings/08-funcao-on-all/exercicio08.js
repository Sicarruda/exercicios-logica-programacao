//Escreva uma função on_all que aplique uma função a cada elemento de uma lista.

var lista = [1,2,3,4,5];

function soma1(a){
    return a+1;
}

function x(array,funcao){
    for(var i = 0; i < array.length; i++){
        console.log(funcao(array[i]));
    }
}

console.log(x(lista,soma1));

