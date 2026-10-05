let numero = 10; 

function verificarParidade(numero){
    for(let i = 0; i < numero; i++){
       if(i % 2 == 0){
           console.log("Número é par" + i);
       }else if (i % 2 != 0){
           console.log("Número é impar" + i);
       }
    }


}


verificarParidade(numero);