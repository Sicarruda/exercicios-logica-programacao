//Escreva uma função que concatene duas listas. 
//[a, b, c], [1,2,3] → [a, b, c, 1,2,3]

var lista = ["a","b","c"];
var lista02 = [1,2,3];

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

console.log(juntarArray(lista,lista02));
