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

