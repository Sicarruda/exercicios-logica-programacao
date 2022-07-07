function sockMerchant(n, ar) {
  const arraySocks = ar;
  const socksObj = {};
  for (var i = 0; i <= arraySocks.lentgh; i+=1){
    if(socksObj.arraySocks[i]){
      socksObj.arraySocks[i] = socksObj.arraySocks[i] + 1;
    }
    else{
      socksObj.arraySocks[i] = 1;
    }
  } 
console.log(socksObj)

}
