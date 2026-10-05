function calculadora(valor, numero1, numero2, operacao){
    if(operacao === "soma"){
        return valor + numero1 + numero2;
    }else if(operacao === "subtracao"){
        return valor - numero1 - numero2;
    }else if(operacao === "multiplicacao"){
        return valor * numero1 * numero2;
    }else if(operacao === "divisao"){
        return valor / numero1 / numero2;
    }
}