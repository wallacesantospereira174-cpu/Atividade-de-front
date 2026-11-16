// Calcular o preço final e formatar em reais.
const moedaBRL = new Intl.NumberFormat("pt-BR", {
style: "currency",
currency: "BRL"
});

function calcularPrecoFinal(preco, percentual) {
const valorDesconto = preco * (percentual / 100);
return preco - valorDesconto;
}

function formatarMoeda(valor) {
return moedaBRL.format(valor);
}
campo-invalido
const form = document.querySelector("#form-produto");
const retorno = document.querySelector("#retorno");
const nomeInput = document.querySelector("#nome");
const precoInput = document.querySelector("#preco");
const descontoInput = document.querySelector("#desconto");
const erroNome = document.querySelector("#erro-nome");
const erroPreco = document.querySelector("#erro-preco");
const erroDesconto = document.querySelector("#erro-desconto");

const contagem = document.querySelector("#contagem");
const linhas = document.querySelector("#linhas-produtos");

let produtos = [];
let proximoId = 1;

const botaoOcultar = document.querySelector("#alternar-editor");
const sectionForm = document.querySelector("#editor");

botaoOcultar.addEventListener("click", function(event){
if (sectionForm.classList.contains("oculto")){
sectionForm.classList.remove("oculto");
botaoOcultar.textContent = "Ocultar Formulário";
}else{
sectionForm.classList.add("oculto");
botaoOcultar.textContent = "Mostrar Formulário";
}

});
// Eu sai e não terminei de fazer a parte do crud.

function editarProduto(produto){
    nomeInput.value = produto.nome;
    precoInput.value = produto.preco;
    descontoInput.value = produto.desconto;
}
function validar(){
const nome = nomeInput.value.trim();
const mensagemNome = nome.length < 2 ? "Digite pelo menos 2 caracteres" : "";

const preco = precoInput.value.trim();
let mensagemPreco = "";
if (preco != ""){
if (Number(preco) < 0){
mensagemPreco = "Digite um valor acima de R$0";
precoInput.classList.add("campo-invalido");
}else{
mensagemPreco = "";
precoInput.classList.remove("campo-invalido");
}
}else{
mensagemPreco = "Digite um valor!";
precoInput.classList.add("campo-invalido");
}

const desconto = descontoInput.value.trim();
let mensagemDesconto = "";
if (desconto != ""){
if (Number(desconto) >=0 && Number(desconto) <= 100){
mensagemDesconto = "";
descontoInput.classList.remove("campo-invalido");
}else{
mensagemDesconto = "O desconto precisa estar entre 0 e 100";
descontoInput.classList.add("campo-invalido");
}
}else{
mensagemDesconto = "Digite o valor do desconto!";
descontoInput.classList.add("campo-invalido");
}

erroNome.textContent = mensagemNome;
erroPreco.textContent = mensagemPreco;
erroDesconto.textContent = mensagemDesconto;

return mensagemNome == "" && mensagemPreco == "" && mensagemDesconto == "";
}

function mostrarProdutos(){
linhas.innerHTML = "";
for (const produto of produtos){
const precoFinal = calcularPrecoFinal(produto.preco, produto.desconto);
const linha = linhas.insertRow();
linha.insertCell().textContent = produto.id;
linha.insertCell().textContent = produto.nome;
linha.insertCell().textContent = formatarMoeda(produto.preco);
linha.insertCell().textContent = produto.desconto + "%";
linha.insertCell().textContent = formatarMoeda(precoFinal);
}
if(produtos.length == 0){
contagem.textContent = "Nenhum produto cadastrado!";
}else{
contagem.textContent = "Produtos cadastrados: " + produtos.length;
}
}

form.addEventListener("submit", function(event){
event.preventDefault();
if(validar()){
const preco = Number(precoInput.value);
const desconto = Number(descontoInput.value);
const final = calcularPrecoFinal(preco, desconto);
retorno.textContent = "Preço Final: " + formatarMoeda(final);

const produto = {
id: proximoId,
nome: nomeInput.value.trim(),
preco:preco,
desconto: desconto
}
produtos.push(produto);
proximoId = proximoId + 1;

mostrarProdutos();

form.reset();

retorno.textContent = nomeInput.value.trim() + " cadastrado com sucesso!";
nomeInput.focus();

}else{
retorno.textContent = "Verifique os valores digitados!";
return;
}
});