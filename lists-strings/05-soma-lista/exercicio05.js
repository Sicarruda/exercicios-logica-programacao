//Write a function that computes the running total of a list.

var lista = [1,2,3,4,5,6,7,8,9,10];

function somarLista(array){
    var total = 0;
    for(var i = 0; i < array.length; i++){
        total = total + array[i];
    }
    return total;
}

console.log(somarLista(lista));