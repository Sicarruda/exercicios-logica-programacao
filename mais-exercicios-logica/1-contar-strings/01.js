//Faça um programa para contar a quantidade de caracteres que ele contem sem .length.

//um jeito
function contarCaracteres1(string) {
  var controle = 0;
  criarAssert(string);
  for (var i = 0; ; i++) {
    if (typeof string[i] === "undefined") {
      break;
    } else {
      controle += 1;
    }
  }
  return controle;
}

//dois jeitos
function contarCaracteres2(string) {
  var count = 0;
  criarAssert(string);
  while (typeof string[count] !== "undefined") {
    count += 1;
  }
  return count;
}

// três jeitos
function contarCaracteres3(string) {
  var count = -1;
  criarAssert(string);
  while (typeof string[++count] !== "undefined");
  return count;
}

function testes() {
  contarCaracteres3(null);
  console.assert(1 == 1, "1 sempre é igual a 1");
  console.assert(
    contarCaracteres3("gabriel") === 7,
    "conta corretamente strings com mais de 1 letra"
  );
  console.log("todos os testes foram executados com sucesso");
}

function criarAssert(string) {
  if (string == null || typeof string == "undefined") {
    throw new Error("lalal ");
  }
}

console.log(contarCaracteres1("maisu"));
console.log(contarCaracteres2("maisu"));
console.log(contarCaracteres3("maisu"));
