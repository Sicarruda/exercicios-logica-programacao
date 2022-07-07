//Escreva uma função que concatene duas listas. 
//[a, b, c], [1,2,3] → [a, b, c, 1,2,3]

var listaA = ["a","b","c"];
var listaB = [1,2,3];

function juntarArray(array01,array02){
    var novoArray=[];
    for(var i = 0; i < array01.length; i++){
        novoArray.push(array01[i]);
    }
    for(var i = 0; i < array02.length; i++){
        novoArray.push(array02[i]);
    }
    return novoArray;
}

console.log(juntarArray(listaA,listaB));
