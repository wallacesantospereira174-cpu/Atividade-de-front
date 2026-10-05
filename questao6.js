function clacularCompra(valor){
    if(valor > 200){
        let desconto = valor * 0.1;
        return valor - desconto;
    }else{
        return valor;
    }
}