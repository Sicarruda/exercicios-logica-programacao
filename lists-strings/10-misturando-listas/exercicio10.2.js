//Outra abordagem para o exercicio

var listaA = [1,2,3];
var listaB = ["a","b","c"];

function misturarArray(array01,array02){
    var novaLista = [];
    for(var i = 0; i < array01.length; i++){
        novaLista.push(array01[i]);
        novaLista.push(array02[i]);
    }
    return novaLista;
}

console.log(misturarArray(listaA,listaB));
