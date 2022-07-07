/*var a = 10;
var b = 20;
function soma(c,d){
    c = c*2;
    return c + d;
}

console.log(soma(a,b));
a = 100;

var nomes = ["Gabriel","Jessica"];


function mudaNomes(lista){
    lista.pop();
}



console.log(nomes);
mudaNomes(nomes);
console.log(nomes);
*/
var checandoPalindromo = []
 var a = "SIM, SOU UM PALÍNDROMO";
 var b = "INFELIZMENTE, NÃO SOU UM PALÍNDROMO";
    for(var i = 0; i < palavra.length; i++){
        checandoPalindromo.push(palavra[i]);
    }
    checandoPalindromo.reverse();
    var comparandoPalindromo = checandoPalindromo.join("");
    if (comparandoPalindromo == palavra){
        return a;
    }else{
        return b;
    }