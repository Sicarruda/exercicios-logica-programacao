/*Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by 
two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the list.*/

var lista = [1,2,3,4,5,6,7,8,9,10];

function rotarLista(rotacoes){
    for(var i = 0; i < rotacoes; i++){
        lista.push(lista[i]);
    }
    lista.splice(0,rotacoes);
    return lista;
}

console.log(rotarLista(5))