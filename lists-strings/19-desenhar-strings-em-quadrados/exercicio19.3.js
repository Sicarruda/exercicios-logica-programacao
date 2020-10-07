//alinhado a direita

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
    for(var i = 0; i <= numeroEspacos; i++){
       if(elemento.length < numeroEspacos){
            elemento = espaco + elemento;
        }
    }
    return elemento;
}


desenharQuadrado(lista);