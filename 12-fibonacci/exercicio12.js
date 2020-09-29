// f(n)=f(n-1)+f(n-2)

function fibonacci(n){
    var conta = 0;
    var conta1 = 0;
    var conta2 = 0;
    if(n == 0){
        var conta2 = 0;
    }else if(n == 1){
        conta1 = 1;
    }else{
        conta1 = fibonacci(n-1);
        conta2 = fibonacci(n-2);
    }
    return conta = conta1 + conta2;
}

console.log(fibonacci(10));