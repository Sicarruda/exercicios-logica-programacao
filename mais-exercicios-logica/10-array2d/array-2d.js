function hourglassSum(arr) {
  let l1 = 0;
  let l2 = 1;
  let l3 = 2;
  let soma1 = 0;
  let soma2 = 0;
  let somaTotal = 0;
  const arrSoma = [];
  for (let i = 0; i < 4; i += 1) {
      let c = 0;
      let c2 = 1;
      for (let j = 0; j < 4; j += 1) {
          soma1 = arr[l1][c] + arr[l1][c + 1] + arr[l1][c + 2];
          soma2 = arr[l2][c2] + arr[l3][c] + arr[l3][c + 1] + arr[l3][c + 2];
          somaTotal = soma1 + soma2;
          arrSoma.push(somaTotal);
          c = c + 1;
          c2 = c2 + 1;
      }
     
      l1 = l1 + 1;
      l2 = l2 + 1;
      l3 = l3 + 1;
  }
  return Math.max(...arrSoma);
}