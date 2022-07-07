
var listaDeLista = [[1,2,3],[4,5,6],[7,8,9]];

function mostrarListas(array){
    
    for(var i = 0; i < array.length; i++){
        for(var a = 0; a < array[i].length; a++){
            console.log(array[i][a]);
        }
    } 
}

mostrarListas(listaDeLista);