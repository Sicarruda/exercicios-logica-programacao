//Write a function that returns the elements on odd positions in a list.

var lista = [0,2,6,3,5,8,6,4,5,3]

function retornarImpar(array){
    var listaNova = [];
    for(var i = 1; i < array.length; i+=2){ 
        listaNova.push(array[i]);  
    }
    return listaNova;
}

console.log(retornarImpar(lista));