//Write a function that takes a list of strings an prints them, one per line, 
//in a rectangular frame. For example the list ["Hello", "World", "in", "a", 
//"frame"] gets printed as:
//  *********
//  * Hello *
//  * World *
//  * in    *
//  * a     *
//  * frame *
//  *********

var lista = ["Hello","World","in","a","frame","Caleidoscopio", "HGFDHSERDGHFDGERGRTRYTERGHRETHYFBS"];

function desenharQuadrado(array){
    console.log(desenharLinha(array));
    var elemento = "";
    for(var i = 0; i < array.length; i++){
        elemento = array[i];
        console.log("* " + colocarEspaco(elemento,acharMaiorElemento(array)) + " *");
    }
    
    console.log(desenharLinha(array));
}
function acharMaiorElemento(array){
    var maiorElemento = "";
    for(var i = 0; i < array.length; i++){
        if(maiorElemento.length < array[i].length){
            maiorElemento = array[i];
        }
    }
    return maiorElemento;
}

function desenharLinha(array){
    var linha = "*"
    for(var j = 0; j <= acharMaiorElemento(array).length + 2; j++){
        linha = linha + "*";
    }
    return linha;
}

function colocarEspaco(elemento, array){
    var espaco = " ";
    for(var i = 0; i <= array.length; i++){
       if(elemento.length < array.length){
            elemento = elemento + espaco;
        }
    }
    return elemento;
}


desenharQuadrado(lista);