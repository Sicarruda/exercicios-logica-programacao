//abreviar um nome

var nome = "jessica arruda";
function abreviarNome(nome){
    var index = nome.length - 1;
    var nomeAbr = ""
    for(var i = 0; i <= index; i++){
        if (nome[i] == " "){
            nomeAbr = nome[0].toUpperCase() + ". " + nome[i+1].toUpperCase() + ".";
        }
    }
    return nomeAbr;
}

console.log(abreviarNome(nome));