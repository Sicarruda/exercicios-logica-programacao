// faça uma função que conte quantas vezes um elemento aparece em uma lista.

var usuarioInput = prompt("Qual o numero você quer?");
var lista = [0,6,12,36,98,1,12,50,98,12,36,12];

function compararNumero(numeroUsuario,array){
    var controle = 0;
    for(var i = 0; i < array.length; i++){
        if(numeroUsuario == array[i]){
            controle = controle + 1;               
        }
    }
    return controle;
}

compararNumero(usuarioInput,lista);
console.log(compararNumero(usuarioInput,lista));