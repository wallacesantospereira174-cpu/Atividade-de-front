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


// TODO 01 — Pegue os elementos do formulário.
// Selecione #form-produto, #nome, #preco, #desconto e #retorno.
// Selecione também #erro-nome, #erro-preco e #erro-desconto.
// Dê nomes diferentes ao campo, à mensagem e ao valor lido.

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
let idModoEdicao = 0

const botaoOcultar = document.querySelector("#alternar-editor");
const sectionForm = document.querySelector("#editor");

botaoOcultar.addEventListener("click", function(event){
  if (sectionForm.classList.contains("oculto")){
    sectionForm.classList.remove("oculto");
    botaoOcultar.textContent = "Ocultar formulário";
  }else{
    sectionForm.classList.add("oculto");
    botaoOcultar.textContent = "Mostrar formulárop";
  }

});

function validar(){
  const nome = nomeInput.value.trim();
  const mensagemNome = nome.length < 2 ? "Digite pelo menos dois caracteres" : "";

  const preco = precoInput.value.trim();
  let mensagemPreco = "";
  if (preco != ""){
    if(Number(preco) < 0){
      mensagemPreco = "Digite um valor acima de R$0";
      precoInput.classList.add("campo-invalido");
    }else{
      mensagemPreco = "";
      precoInput.classList.remove("campo-invalido");
    }
  }else{
    mensagemPreco = "Digite um valor";
    precoInput.classList.add("campo-invalido");
  }

  const desconto = descontoInput.value.trim();
  let mensagemDesconto = "";
  if (desconto != ""){
    if (Number(desconto) >= 0 && Number(desconto) <= 100){
      mensagemDesconto = "";
      descontoInput.classList.remove("campo-invalido");
    }else{
      mensagemDesconto = "O desconto precisa estar entre 0 e 100";
      descontoInput.classList.add("campo-invalido");
    }
  }else{
    mensagemDesconto = "Digite o valor de desconto!";
    descontoInput.classList.add("campo-invalido");
  }

  erroNome.textContent = mensagemNome;
  erroPreco.textContent = mensagemPreco;
  erroDesconto.textContent = mensagemDesconto;

  return mensagemNome == "" && mensagemPreco == "" && mensagemDesconto == "";
}

const botaoSalvar = document.querySelector("#salvar")

function editarProduto(produto){
  idModoEdicao = produto.id;
  nomeInput.value = produto.nome;
  precoInput.value = produto.preco;
  desconto.value = produto.desconto;

  sectionForm.classList.remove("oculto");
  botaoOcultar.textContent = "Ocultar Formulário";
  sectionForm.classList.add("modo-edicao");
  botaoSalvar.textContent = "Salvar Alteração";
  nomeInput.focus();

}

function mostrarProduto(){
  linhas.innerHTML = "";

  for (const produto of produtos){
    const precoFinal = calcularPrecoFinal(produto.preco, produto.desconto);
    const linha = linhas.insertRow();

    linha.insertCell().textContent = produto.id;
    linha.insertCell().textContent = produto.nome;
    linha.insertCell().textContent = formatarMoeda(produto.preco);
    linha.insertCell().textContent = produto.desconto + "%";
    linha.insertCell().textContent = formatarMoeda(precoFinal);

    // Adicionando os botões de editar e excluir 
    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";
    botaoEditar.addEventListener("click", function(){
      editarProduto(produto);
    });
    //editar produto 

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.addEventListener("click", function(){
      excluirProduto(produto);
    })
    //excluir produto 

    linha.insertCell().append(botaoEditar, botaoExcluir);

  }
  if(produtos.length == 0){
    contagem.textContent = "Nenhum produto encontrado"
  }else{
    contagem.textContent = "Produtos cadastrados" + produtos.length;
  }
}

form.addEventListener("submit", function(event){
  event.preventDefault();
  if(validar()){
    const preco = Number(precoInput.value);
    const desconto = Number(descontoInput.value);
    const final = calcularPrecoFinal(preco, desconto);
    retorno.textContent = "Preço Final: " + formatarMoeda(final);

    if(idModoEdicao == 0){
      const produto = {
        id: proximoId,
        nome: nomeInput.value.trim(),
        preco: preco,
        desconto: desconto
      }
      produtos.push(produto);
      proximoId = proximoId + 1;
      mostrarProduto()
    }else{
      for(const item of produtos){
        if(item.id == idModoEdicao){
          item.nome = nomeInput.value.trim();
          item.preco = preco;
          item.desconto = desconto;
        }
      }
      retorno.textContent = nomeInput.value.trim() + "editado com sucesso!";
      idModoEdicao = 0;
      mostrarProduto()
    }

    const nome = document.querySelector("#nome");

    mostrarProduto();

    form.reset();
    retorno.textContent = nomeInput.value.trim() + "cadastrado com sucesso";
    nomeInput.focus();

  }else{
    retorno.textContent = "Verifique os valores digitados!"
    return;
  }

});


// TODO 02 — Valide o nome.
// Leia o nome e retire os espaços das pontas. Exija pelo menos dois caracteres.
// Se estiver inválido, escreva "Digite pelo menos 2 caracteres." em #erro-nome.
// Se estiver válido, apague a mensagem desse campo.

// TODO 03 — Valide o preço.
// Verifique se o campo foi preenchido antes de converter para número.
// Aceite preço igual ou maior que zero. Se estiver vazio ou inválido,
// mostre "Use um preço a partir de 0." em #erro-preco.
// Se estiver válido, apague a mensagem desse campo.

// TODO 04 — Valide o desconto.
// Verifique se o campo foi preenchido antes de converter para número.
// Aceite valores de 0 a 100, incluindo os dois limites. Se estiver vazio
// ou inválido, mostre "Use um desconto de 0 a 100." em #erro-desconto.
// Se estiver válido, apague a mensagem desse campo.

// TODO 05 — Controle o envio do formulário.
// Reúna as três verificações na função validar. Ela deve responder se
// todos os campos estão válidos.
// Use o evento submit, para funcionar tanto pelo botão quanto pela tecla Enter.
// Impeça que a página recarregue. Valide os três campos antes de decidir.
// Se houver erro, escreva "Corrija os campos sinalizados." em #retorno,
// mantenha o que foi digitado e interrompa o envio sem cadastrar nem editar.

// TODO 06 — Cadastre um produto válido.
// Crie uma lista de produtos inicialmente vazia. O primeiro ID deve ser 1.
// Ao cadastrar, guarde um produto com ID, nome, preço e desconto.
// Guarde preço e desconto como números. Aumente o próximo ID só após um novo cadastro.
// Mostre a tabela atualizada, limpe o formulário e informe em #retorno
// qual produto foi cadastrado. Volte o foco para o campo do nome.

// TODO 07 — Monte as linhas da tabela.
// Selecione #linhas-produtos. Antes de montar a tabela, limpe as linhas antigas.
// Percorra a lista e crie uma linha por produto com os métodos de tabela vistos em aula.
// Preencha ID, nome, preço, desconto e preço final. Mostre os preços em reais
// e o desconto com o símbolo %. Calcule o valor do desconto aplicando o
// percentual ao preço original, depois subtraia esse valor do preço.
// Deixe uma célula vazia para Ações. Ela receberá os botões na etapa 11.

// TODO 08 — Atualize a contagem.
// Em #contagem, escreva "Nenhum produto cadastrado." quando a lista estiver vazia.
// Quando houver produtos, mostre "Produtos cadastrados: " seguido da quantidade.
// Atualize a contagem sempre que montar a tabela.