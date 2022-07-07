function arrPush(n){
  const arr = []
  for (let i = 0; i<n; i+=1){
    arr.push(i);
  }
  return arr
}

function rotLeft(a, d) {
  let fimArr = a.slice(0, d);
  let inicioArr = a.slice(d);
  return inicioArr.concat(fimArr);
}

rotLeft(arrPush(100_000_000), 10000000)