var nome = "ana";
var nome02 = "edevaldo"; 
function compararPalindromo(string){
    var index = string.length - 1; 
    for(var i = 0; i <= index; i++){
        if(string[i] != string[index] ){
            return false;
        }
        index = index - 1;
    }   
    return true;
}

console.log(compararPalindromo(nome));
console.log(compararPalindromo(nome02));