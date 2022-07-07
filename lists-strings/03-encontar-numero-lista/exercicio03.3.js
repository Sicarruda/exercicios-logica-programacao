// Faça uma função que conte quantas vezes todos os elementos aparecem em uma lista.

var lista = [3,3,8,32,36,58,58,65,8,8];

function criarArray(a,b){
    var novaLista = [];
    var listaFinal = [];
    novaLista.push(a,b);
    console.log(novaLista);
    listaFinal.push(novaLista);
    console.log(listaFinal);
}

function compararNumero(array){
    var controle = 0;
    var elemento = 0;
    for(var i = 0; i < array.length; i++){
        elemento = array[i];
        for (var x = 0; x < array.length; x++){
            if( elemento == array[x]){
                controle = controle + 1;
            }
        }
        criarArray(elemento,controle)
        controle = 0;
    }  
}    


 


compararNumero(lista);