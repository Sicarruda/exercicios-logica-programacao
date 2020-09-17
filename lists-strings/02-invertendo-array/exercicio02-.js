//Write function that reverses a list, preferably in place.

var lista = [120,655,26,85,323,65,778,12,10,5];


function inverterLista(array){
    var index = array.length; 
    for(var i = 0; i < index; i++){
        var elemento = array.length;
        elemento = elemento -1;
        var ultimoElemento = array[elemento];
        array.push(ultimoElemento);
        array.pop();
    }
}

inverterLista(lista);

console.log(lista);
