//exercicio 02
//Write a program that asks the user for their name and greets them with their name.

//VER EXERCÍCIO 01

//exercicio 03
//Modify the previous program such that only the users Alice and Bob are greeted with their names.

var inputNome = document.getElementsByTagName('input')[0];
var botao = document.getElementsByTagName("button")[0];

function verificarNome(){
    var verificarInputNome = inputNome.value;
    if(verificarInputNome == "Alice" || verificarInputNome == "Bob" ){
         alert('Ola '+ verificarInputNome); 
    }else{
        alert('Olá');
    }
}

botao.onclick = verificarNome;

