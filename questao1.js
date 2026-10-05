let numero = 100;


function numero_is_positivo(numero){
    if(numero > 0){
        console.log("Número positivo.");
    }else if(numero < 0){
        console.log("Número negativo.");
    }else{
        console.log("Número Zero.");
    }
}


console.log( numero_is_positivo(numero));