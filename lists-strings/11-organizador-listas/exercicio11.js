/*Write a function that merges two sorted lists into a new sorted list.
 [1,4,6],[2,3,5] → [1,2,3,4,5,6]. You can do this quicker than concatenating
 them followed by a sort.*/

 var listaA = [10,30,90]
 var listaB = [20,60,50]
 var listaC = [40,80,70]
 
 function ordenarLista(lista){
    lista.sort(function(a,b){
        return a - b;
    })
    return lista;
 }

 function juntarLista(listaA, listaB){
    var arrayFinal = listaA.concat(listaB);
    ordenarLista(arrayFinal);
    return arrayFinal;
 }

 var arrayOrdenado = juntarLista(listaA,listaB);
 arrayOrdenado = juntarLista(arrayOrdenado,listaC);

 console.log(arrayOrdenado);