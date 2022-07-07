//Write a function that tests whether a string is a palindrome.
var nome = "ana";
var nome02 = "edevaldo";

function inverter(string){
    var a = [];
    for(var i = 0; i <string.length; i++){
        a.push(string[i]);
    }
    var listaInversa = [];
    var b = 0;
    var index = 0;
    for(var i = 0; i < a.length; i++){ 
        b = b + 1;
        index = a.length - b;
        var ultimoElemento = a[index];
        listaInversa.push(ultimoElemento);      
    }
    var reconstruçãoString = "";
    for(var i = 0; i < listaInversa.length; i++){
        reconstruçãoString = reconstruçãoString + listaInversa[i];
    }
    if (reconstruçãoString == string){
        return reconstruçãoString;
    }else{
        return null;
    }

}
console.log(inverter(nome));
console.log(inverter(nome02));