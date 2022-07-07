//Write function that translates a text to Pig Latin and back.
//English is translated to Pig Latin by taking the first letter of every word, moving it
//to the end of the word and adding ‘ay’.
//“The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.

var frase = "The quick brown fox";

function transformarPigLatin(string){
    var primeiraLetra = arrayPrimeiraLetra(string);
    var primeiraLetraAy = adicionarAy(primeiraLetra);
    var formarPigLatin = tirarPrimeiraLetra(string);
    var arrayFinal = [];
    for(var i = 0; i <formarPigLatin.length; i++){
        formarPigLatin[i].join("");
        arrayFinal.push(formarPigLatin[i].join("") + primeiraLetraAy[i]);
    }
    return arrayFinal.join("");    
}        

function tirarPrimeiraLetra(string){
    var string = string.split(" ");
    var arrayC = [];
    for(var i = 0; i < string.length; i++){
        var arrayB = string[i].split("");
        arrayB.splice(0,1);
        arrayC.push(arrayB);
    }
    return arrayC;
}

function arrayPrimeiraLetra(string){
    var string = string.split(" ");
    var arrayPrimeiraLetra = [];
    for(var i = 0; i < string.length; i++){
        arrayPrimeiraLetra.push(string[i][0]);
    }
    return arrayPrimeiraLetra;
}

function adicionarAy(array){
    var arrayAy= [];
    for(var i = 0; i < array.length; i++){
        var ay = array[i] + "ay ";
        arrayAy.push(ay);
    }
    return arrayAy;
}


function convertePalavraPiglatin(palavra){

    var primeiraLetra = palavra[0];

    var restoDaPalavra = palavra.substr(1);

    return restoDaPalavra + primeiraLetra + "ay";
}

function piglatinFor(fraseOriginal){

    var palavras = fraseOriginal.split(" ");

    var novasPalavras = [];

    for(var i=0;i<palavras.length;i++){
        novasPalavras.push(convertePalavraPiglatin(palavras[i]))
    }

    return novasPalavras.join(" ");
}


function piglatin(fraseOriginal){
    return fraseOriginal
        .split(' ')
        .map(convertePalavraPiglatin)
        .join(" ");
}

console.log(transformarPigLatin(frase));
console.log(piglatinFor(frase));
console.log(piglatin(frase));
