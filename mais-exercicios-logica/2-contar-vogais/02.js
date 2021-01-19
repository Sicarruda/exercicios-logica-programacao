//Faça um programa que descubra a quantidade de vogais de uma determinada string.

//jeito 01
function contarVogal1(string) {
  var controle = 0;
  for (var i = 0; i < 10000000000; i++) {
    if (typeof string[i] === "undefined") {
      break;
    } else if (
      string[i] == "a" ||
      string[i] == "e" ||
      string[i] == "i" ||
      string[i] == "o" ||
      string[i] == "u"
    ) {
      controle += 1;
    }
  }
  return controle;
}

//jeito 02
function contarVogal2(string) {
  var controle = -1;
  var vogal = 0;
  while (typeof string[++controle] !== "undefined") {
    if (
      string[controle] == "a" ||
      string[controle] == "e" ||
      string[controle] == "i" ||
      string[controle] == "o" ||
      string[controle] == "u"
    ) {
      vogal += 1;
    }
  }
  return vogal;
}

function teste() {
  test("contarVogal1: funciona corretamente", () => {
    jAssert(contarVogal1("aeiou") === 5, "para strings com varias vogais");
    jAssert(contarVogal1("kjisdf") === 1, "para strings com uma vogal");
    jAssert(contarVogal1("lkjsdf") === 0, "para strings sem vogais");
    jAssert(contarVogal1(65465) === 0, "para numeros");
    jAssert(contarVogal1("") === 0, "para strings vazias");
  });
  test("contarVogal2: funciona corretamente", () => {
    jAssert(contarVogal2("aeiou") === 5, "para strings com varias vogais");
    jAssert(contarVogal2("kjisdf") === 1, "para strings com uma vogal");
    jAssert(contarVogal2("lkjsdf") === 0, "para strings sem vogais");
    jAssert(contarVogal2(65465) === 0, "para numeros");
    jAssert(contarVogal2("") === 0, "para strings vazias");
  });
}

teste();
