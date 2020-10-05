// Abreviar nomes com mais de 2 nomes

var nome = "Pedro de Alcântara Francisco Antônio";

function abreviarNome(nome){
    var index = nome.length - 1;
    var listaIndex = [nome[0]];
    for(var i = 0; i <= index; i++){
        if (nome[i] == " "){
            listaIndex.push(nome[i+1]);
        }
    }
    return listaIndex.map((e)=>e.toUpperCase()).join(". ");
};

function abreviarNome2(nome){
    var listaNomes = nome.split(" ");
    var iniciais = listaNomes.map(primeiraLetra);
    var iniciaisMaiusculas = iniciais.map((passarMaiuscula));
    var nomeAbr = iniciaisMaiusculas.join(". ");
    return nomeAbr;
};

function abreviarNome3(nome){
    var index = nome.length - 1;
    var nomeAbr = ""
    for(var i = 0; i <= index; i++){
        if (nome[i] == " "){
            nomeAbr = nome[i+1].toUpperCase() + ". " + nome[0].toUpperCase();
        }
    }
    return nomeAbr;
};

function primeiraLetra(nome){
    return nome[0];
};

function passarMaiuscula(letra){
    return letra.toUpperCase();    
};

var pedro = {
    nome: "Pedro Alcântara João Carlos Leopoldo",
    idade: 30,
    nacionalidade: "Brasileiro",
};

var salvador = {
    nome: "Salvador Bibiano Francisco Xavier",
    idade: 28,
    nacionalidade: "Brasileiro"
};

var sakura ={
    nome: "Sakura Haruno",
    idade: 58,
    nacionalidade: "Japones" 
};

var pessoas = [pedro, salvador, sakura];

function classificarPessoas(pessoas){
    var listaAbr = [];
    for(var i = 0; i < pessoas.length; i++){
        if(pessoas[i].nacionalidade == "Brasileiro"){
            listaAbr.push(abreviarNome(pessoas[i].nome))
        }else{
            listaAbr.push(abreviarNome3(pessoas[i].nome))
        }
    }
    return listaAbr;
}

console.log(classificarPessoas(pessoas));
