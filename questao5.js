function classificarNota(nota){
    if (nota >= 7){
        console.log("Aprovafdo.");
       
    }
    else if (nota < 5){
        console.log("Reprovado.");
        
    }
    else{
        console.log("Recuperação.");
    }
}

classificarNota(nota);