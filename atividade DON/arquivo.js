"use strict";

/*
  ATIVIDADE PRÁTICA — LEITURA E ALTERAÇÃO DO DOM

  Regras:
  1. Não altere o arquivo atividade21.html.
  2. Faça todas as mudanças neste arquivo.
  3. Utilize document.querySelector() em todas as seleções.
  4. Utilize textContent para textos comuns e dados informados pelo usuário.
  5. Utilize innerText somente nas tarefas indicadas.
  6. Utilize innerHTML somente com conteúdos definidos no próprio código.
  7. Nunca insira dados do usuário com innerHTML ou outerHTML.
  8. Utilize outerHTML somente na tarefa indicada.
  9. Confira cada alteração no navegador e no Console.
*/
const mensagemBoasVindas = document.querySelector("#mensagem_boas_vindas");
mensagemBoasVindas.textContent = "Olá Wallace seja bem vindo.";

// 01. Solicite o nome do estudante e altere a mensagem de
// boas-vindas utilizando textContent.



// 02. Mostre no Console o texto atual do nome da loja usando
// textContent. Depois, altere o nome da loja com textContent.
const nomeLoja = document.querySelector("#nome-loja");
console.log("Nome da loja era " , nomeLoja.textContent);

nomeLoja.textContent = "Tech Store";


// 03. Altere o título principal da página utilizando textContent.
const tituloPrincipal = document.querySelector("#titulo-principal");
console.log("Título principal era " , tituloPrincipal.textContent);
tituloPrincipal.textContent = "Produtos em Destaque";

// 04. Mostre no Console o texto visível do subtítulo utilizando
// innerText. Depois, altere o subtítulo com innerText.
const subtitulo = document.querySelector("#subtitulo-principal");
console.log("Subtítulo era " , subtitulo.innerText);
subtitulo.innerText = "Confira nossas ofertas imperdíveis!";


// 05. Insira o aviso de promoção utilizando innerHTML.
const avisoPromocao = document.querySelector("#aviso-promocao");
console.log("Aviso de promoção era " , avisoPromocao.innerHTML);
avisoPromocao.innerHTML = "<strong>Promoção: </strong>Não se preocupe, você vai ter sucesso!";

// 06. Altere a categoria do produto em destaque utilizando
// textContent.
const categoriaProduto = document.querySelector("#categoria-destaque");
console.log("Categoria do produto era " , categoriaProduto.textContent);
categoriaProduto.textContent = "Dispositivos móveis";
// 07. Altere o nome do produto em destaque utilizando innerText.
const nomeProduto = document.querySelector("#nome-produto-destaque");
console.log("Nome do produto era " , nomeProduto.innerText);
nomeProduto.innerText = "Smartphone 18 Pro Max";

// 08. Mostre no Console o textContent e o innerText da descrição
// do produto. Depois, altere a descrição utilizando innerText.

const descricaoProduto = document.querySelector("#descricao-produto-destaque");
console.log("Descrição do produto era " , descricaoProduto.textContent);
descricaoProduto.innerText = "O Smartphone 18 Pro Max é o dispositivo mais avançado da nossa linha, oferecendo desempenho excepcional e recursos inovadores para atender às suas necessidades diárias.";
// 09. Altere o preço do produto em destaque utilizando textContent.
const precoProduto = document.querySelector("#preco-produto-destaque");
console.log("Preço do produto era " , precoProduto.textContent);
precoProduto.textContent = "R$ 12,000";

// 10. Altere a situação do estoque utilizando innerHTML.
// Destaque a situação com uma tag <strong>.
// Utilize somente um texto definido no próprio código.
const situacaoEstoque = document.querySelector("#status-estoque");
console.log("Situação do estoque era " , situacaoEstoque.innerHTML);
situacaoEstoque.innerHTML = "<strong>Em estoque</strong>";

//Alterando a imagem do produto em destaque utilizando outerHTML. Pura firula.
const produtoImagem = document.querySelector(".produto-imagem");

console.log("Imagem do produto era:", produtoImagem.outerHTML);

produtoImagem.outerHTML = `
  <img
    src="./pastaIMG/images.jpeg"
    style="width: 100%; right: 100%; object-fit: cover; border-radius: 8px;"
    alt="iphone 18 pro max"
  >
`;
// 11. Atualize as três estatísticas do catálogo.
// Utilize textContent na primeira, innerText na segunda e
// innerHTML com uma tag <strong> na terceira.
const estatistica1 = document.querySelector("#total-produtos");
console.log("Estatística 1 era " , estatistica1.textContent);
estatistica1.textContent = " 10.000 ";
const estatistica2 = document.querySelector("#total-categorias");
estatistica2.innerText = " 50 ";
const estatistica3 = document.querySelector("#total-ofertas");
estatistica3.innerHTML = "<strong> 100 </strong>";

// 12. Altere os nomes dos três produtos secundários.
// Utilize textContent para impedir que possíveis tags sejam
// interpretadas pelo navegador.

// 13. Atualize a lista de benefícios utilizando innerHTML.
// Crie pelo menos três elementos <li> dentro da lista.

// 14. Atualize automaticamente o ano do rodapé utilizando
// new Date().getFullYear() e textContent.

// 15. Mostre no Console o outerHTML do texto final do rodapé.
// Depois, utilize outerHTML para substituir completamente esse
// elemento por uma nova tag <p> com classe e conteúdo diferentes.
// Após a substituição, selecione novamente o novo elemento e
// mostre seu outerHTML no Console.







