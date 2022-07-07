//Escreva uma função que combine duas listas tomando elementos alternadamente, 
//por exemplo, [a, b, c], [1,2,3] → [a, 1, b, 2, c, 3].
var listaA = [1,2,3];
var listaB = ["a","b","c"];

function misturarArray(array01,array02){
     var novaLista = [];
     var index = array01.length + array02.length;
     var indexArray01 = 0;
     var indexArray02 = 0;
     var conta = 1;
     var conta02 = 1;
     for(var i = 0; i < index; i++){
        if(i % 2 == 0){
            novaLista.push(array01[indexArray01]);
            indexArray01 = array01.length-(array01.length - conta++);
        }else{
            novaLista.push(array02[indexArray02]);
            indexArray02 = array02.length-(array02.length - conta02++);
        }
    }
    return novaLista;
}

console.log(misturarArray(listaA,listaB));
