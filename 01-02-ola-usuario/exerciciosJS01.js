//exercicio 01
console.log('Hello world');

//exercicio 02
//Write a program that asks the user for their name and greets them with their name.

var inputNome = document.getElementsByTagName('input')[0];

function criarAlerta(){
    alert('Ola '+ inputNome.value);
}
var botao = document.getElementsByTagName("button")[0];
console.log(botao);
botao.onclick = criarAlerta;

