/*Write a function that takes a number and returns a list of its digits. 
So for 2342 it should return [2,3,4,2].*/

function quebrarNumero(numero) {
  var numInteiro = numero
  var stringNumInteiro = numInteiro.toString();
  var listaNumeros = [];

  for (var i = 0; i < stringNumInteiro.length; i++) {
    listaNumeros.push(parseInt(stringNumInteiro[i]));
  }
  
  return listaNumeros;
}

console.log(quebrarNumero(8541256035));
