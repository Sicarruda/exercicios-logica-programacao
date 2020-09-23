//Write a program that prints the next 20 leap years.

var ano = 2020;
var anoBissesto = 2020;
for (var i = 0; i <= 20; i++){
    ano = anoBissesto;
    anoBissesto = ano + 4;
    if(!(anoBissesto % 100 == 0 && anoBissesto % 400 != 0)){
        console.log(`${anoBissesto} é bissexto`);
    }else {
        console.log(`${anoBissesto} não é bissexto`);
    }
}

