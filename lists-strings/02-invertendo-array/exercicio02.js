//Write function that reverses a list, preferably in place.

var lista = [120,655,26,85,323,65,778,12,10,5];


function inverterLista(array){
    var index = 0;
    var listaFinal = [];
    var a = 0;
    for(var i = 0; i < array.length; i++){    
        a = a + 1;
        index = array.length - a;
        var ultimoElemento = array[index];
        listaFinal.push(ultimoElemento);
    }
    return listaFinal;
}

lista = inverterLista(lista);
console.log (lista);






