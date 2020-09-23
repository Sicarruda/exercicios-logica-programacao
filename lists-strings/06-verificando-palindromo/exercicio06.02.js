//Write a function that tests whether a string is a palindrome.

var nome = "ana";
var nome02 = "edevaldo";
function inverter(string){
    var a = ""
    for(var i = string.length - 1 ; i >= 0; i--){
        a = a + string[i];
    }
    if(a === string){
        return a;
    }else{
        return null;
    }
}
console.log(inverter(nome));
console.log(inverter(nome02));
