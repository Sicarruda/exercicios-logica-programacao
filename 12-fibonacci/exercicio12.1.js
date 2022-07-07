function contaAte(inicial,final){
    console.log(inicial);
    if(inicial < final){
        contaAte(inicial+1,final);
    }
    //colocando o console.log aqui inverte-se a contagem dos números.
}


var a = [1,2,3,4,5,6];

function s(array,i,max){
    if(i <= max){
        return array[i] + s(array,i+1,max);
    }
    return 0;
}

console.log(s(a,0,5));
