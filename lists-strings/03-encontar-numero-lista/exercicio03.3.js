// Faça uma função que conte quantas vezes todos os elementos aparecem em uma lista.

var lista = [3,3,8];

function compararNumero(array){
    var controle = 0;
    var novaLista = [];
    var elemento = 0;
    for(var i = 0; i < array.length; i++){
        elemento = array[i];
        for (var x = 0; x < array.length; x++){
            if( elemento == array[x]){
                controle = controle + 1;
            }
            if(controle < 2){
                novaLista.push(elemento);
            }
        }
        console.log(elemento + "," + controle);
       
        controle = 0;
    }    
    console.log(novaLista);
} 


compararNumero(lista);