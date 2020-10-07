//Centralizado

var lista = ["Hello","World","in","a","frame","Caleidoscopio", "HGFDHSERDGHFDGERGRTRYTERGHRETHYFBS"];

function desenharQuadrado(array){
    var tamanhoMaiorElemento = acharMaiorElemento(array).length
    console.log(gerarLinha(tamanhoMaiorElemento));
    for(var i = 0; i < array.length; i++){
        var elemento = array[i];
        console.log("* " + colocarEspaco(elemento, tamanhoMaiorElemento) + " *");
    }
    
    console.log(gerarLinha(tamanhoMaiorElemento));
}

function acharMaiorElemento(array){
    var maiorElemento = array[0];
    for(var i = 0; i < array.length; i++){
        if(maiorElemento.length < array[i].length){
            maiorElemento = array[i];
        }
    }
    return maiorElemento;
}

function gerarLinha(tamanho){
    var linha = "*"
    for(var j = 0; j <= tamanho + 2; j++){
        linha = linha + "*";
    }
    return linha;
}

function colocarEspaco(elemento, numeroEspacos){
    var espaco = " ";
    var novoElemento = "";
    var conta = (numeroEspacos - elemento.length)/2;
    for(var i = 0; i <= conta; i++){
       if(elemento.length < numeroEspacos){
            novoElemento = novoElemento + espaco;
        }
    }
    elemento = novoElemento + elemento;
    for(var j = 0; j <= conta; j++){
        if(elemento.length < numeroEspacos){
            elemento = elemento + espaco;
        }
    }
     return elemento;
}



desenharQuadrado(lista);