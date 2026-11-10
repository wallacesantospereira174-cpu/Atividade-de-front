// TODO 1: Ao clicar em Calcular, leia o preço e o desconto informados.
// Se algum campo estiver vazio ou contiver apenas espaços,
// mostre um aviso e interrompa o cálculo.
const calcularBtn = document.getElementById('preco-calc');
const precoDescontoInput = document.getElementById('desconto-calc');
const resultadoDiv = document.getElementById('saida-calc');
const botaoCalcular = document.getElementById('calcular');
function calcularDesconto() {
  
  if(calcularBtn.value.trim() === "" || precoDescontoInput.value.trim() === "" ) {
    resultadoDiv.textContent = 'Por favor, preencha todos os campos.';
    return;
  }
  valorPreco = Number(calcularBtn.value);
  valorDesconto = Number(precoDescontoInput.value);
  if(!isFinite(valorPreco) || !isFinite(valorDesconto)) {
    resultadoDiv.textContent = 'Por favor, insira valores numéricos válidos.';
    return;
  }
    if(valorPreco < 0) {
        resultadoDiv.textContent = 'O preço deve ser maior ou igual a zero.';
        return;
    }
    if(valorDesconto < 0 || valorDesconto > 100) {
        resultadoDiv.textContent = 'O desconto deve estar entre 0% e 100%, inclusive.';
        return;
    }
    let precoFinal = calcularPrecoFinal(valorPreco, valorDesconto);
    resultadoDiv.textContent = `O preço final com desconto é: ${formatarMoeda(precoFinal)}`;
}
botaoCalcular.addEventListener('click', calcularDesconto);
// TODO 2: Converta os valores informados em números.
// Se algum valor não for um número finito, mostre uma mensagem
// de erro e interrompa o cálculo.

// TODO 3: Valide os limites do preço e do desconto.
// O preço deve ser maior ou igual a zero.
// O desconto deve estar entre 0% e 100%, inclusive.
// Se algum valor for inválido, informe o que precisa ser corrigido
// e interrompa o cálculo.

// TODO 4: Use uma função para calcular o preço final com desconto.
// Mostre o resultado na página em reais, com duas casas decimais.