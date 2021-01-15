//Faça um programa para comparar se duas strings são iguais.

var listaA = [1, 2, undefined, 4];
var listaB = [1, 2, undefined, 4];

function compararListas(listaA, listaB) {

  var listasIguais = true;

  if (listaA.length === listaB.length) {
    for (var i = 0; i < listaA.length; i++) {
      if (listaB[i] !== listaA[i]) {
        console.log(`as listas não são iguais`);
        listasIguais = false;
        break;
      }
    }
  }
  if (listasIguais === true) {
    return console.log(`${listaA} é igual a ${listaB}`);
  }
}

compararListas(listaA, listaB);
