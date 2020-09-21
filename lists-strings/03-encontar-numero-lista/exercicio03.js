//Escreva uma função que retorne o indice de um elemento em uma lista e caso não encontre retorne null.

var usuarioInput = prompt("Qual o numero você quer ver se está na lista?");
var lista = [0,6,12,36,98,1];

function compararNumero(numeroUsuario,array){
    for(var i = 0; i < array.length; i++){
        if(numeroUsuario == array[i]){
            return i;               
        }
    }
    return null;
}

compararNumero(usuarioInput,lista);
console.log(compararNumero(usuarioInput,lista));