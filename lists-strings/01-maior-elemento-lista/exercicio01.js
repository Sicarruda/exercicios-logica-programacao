// exercício 01 
//Write a function that returns the largest element in a list.

var lista = [1,23,4,35,6,7,89,10,58,20,78,59,60,80];

function retornarMaior(array){
    var maiorElemento = array[0];
    if(array.length > 0){
        for(var i = 0; i < array.length; i++){
            if (array[i] > maiorElemento){
                maiorElemento = array[i];
            }   
        }return maiorElemento;
    }else {
        return null;
    }
}
console.log(retornarMaior(lista));

var listaNegativos = [-23,-4,-35,-6,-7,-89,-10,-58,-20,-78,-59,-60,-80];
var listaVazia = [];
console.log(retornarMaior(listaNegativos));
console.log(retornarMaior(listaVazia));