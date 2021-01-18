//Faça um programa que inverta uma string, exemplo: “animal” em “lamina”.

function inverterString(string) {
  var arrayInvertido = [];
  var stringFinal;
  for (
    var i = 0;
    i <= string.length;
    i++ /* se for alterado para i+=2 retornara um dos erros da função teste*/
  ) {
    arrayInvertido.push(string[string.length - i]);
  }
  /* o .join está escondendo o undefined que o arrayInvertido têm por conta da forma como a string é inserida no array. A string
  "jessica" têm um array de 8 elementos. Uma maneira de resolver é arrayInvertido.push(string[string.length - i -1])*/
  stringFinal = arrayInvertido.join("");
  return stringFinal;
}

function teste() {
  test("inverterString: funciona corretamente para", () => {
    jAssert(
      inverterString("jessica") === "acissej",
      "string de vários caracteres"
    );
    jAssert(inverterString("") === "", "string vazia");
    jAssert(inverterString("j") === "j", "string de um caracter");
    jAssert(inverterString("ovo") === "ovo", "palimdromo");
  });
}

teste();
