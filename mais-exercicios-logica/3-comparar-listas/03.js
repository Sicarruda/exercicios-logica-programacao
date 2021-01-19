//Faça um programa para comparar se duas strings são iguais.

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
    console.log(`${listaA} é igual a ${listaB}`);
    return true;
  }
}

function teste(){
  test("compararListas: funciona corretamente", ()=>{
    jAssert(compararListas([1,2,3],[1,2,3]) === true, "para listas de numeros");
    jAssert(compararListas(["abc",123,"mnb",undefined],["abc",123,"mnb",undefined]) === true, "para listas mistas");
    jAssert(compararListas(["abc","bfe"],["abc","bfe"]) === true,"para listas de string");
    jAssert(compararListas([],[])===true, "para listas vazias");

  });
}

teste();

