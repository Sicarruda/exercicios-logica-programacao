// exercício 01 
//Write a function that returns the largest element in a list.

var lista = [1,23,4,35,6,7,89,10,58,20,78,59,60,80];
var maiorLista = 0
function retornarMaior(){
    for(var i = 0; i <= lista.length; i++){
        if (lista[i] > maiorLista){
            maiorLista = lista[i];
        }
    }
    console.log(maiorLista);
}
retornarMaior();


var listaNegativos = [-23,-4,-35,-6,-7,-89,-10,-58,-20,-78,-59,-60,-1,-80];

var maiorListaNegativo = listaNegativos[0];

function retornarMaiorNegativo(){
    for(var i = 0; i <= listaNegativos.length; i++){
        if (listaNegativos[i] > maiorListaNegativo){
            maiorListaNegativo = listaNegativos[i];
        }
    }
    console.log(maiorListaNegativo);
}
retornarMaiorNegativo();