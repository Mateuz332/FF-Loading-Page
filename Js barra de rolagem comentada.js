// Js barra de rolagem comentada

js
// configuração de animação da barrra de pesquisa

let findBox = document.querySelector(".buscar-box");
let find = document.querySelector(".find-box");
let closebtn = document.querySelector(".closebtn");
let colorfind = document.querySelector(".lupa");

find.addEventListener("click", () => {
  findBox.classList.add("ative");
  colorfind.style.color = 'black'
})

closebtn.addEventListener("click", () => {
  findBox.classList.remove("ative")
  colorfind.style.color = 'white'
})

// fim da config estilização da barra





// inicio da config de busca da barra de pesquisa


// determina os topicos usados na pagina
const topicos = [
  "Introdução",
  "Jogabilidade",
  "Comunidade",
]

// verifica se o ultimo topico existe
let ultimoTopico = null;


// 1 - verifica se o termo existe 
// 2 - a constante "topicoMaisSimilar"  busca o topico que pode ser lowercase nas strings do input
// 3 - se o  "topicoMaisSimilar" for igual ao ultimo topico pesquisado a função não executa  /kk pra isso que serve o return
// 4 - se nao existir um topico mais similar a função nao executa
// 5 - o ultimo topico é igual ao topicosimilar
// 6 - a constante topico para ir é uma junção do id do topico mais as stings que podem ser usadas no input,
// os topicos chave estão contidos em um array de objetos
// 7 - se nao existir topico para ir não execute a função
// 8- o topico para ir tem a propriedade smoth para escrolar com estravagancia

// Função para pesquisar e rolar para o tópico correspondente
function search(termo) {
  if (!termo) {
    return
  }

  const topicoMaisSimilar = topicos.find(
    (topico) =>
      topico.toLowerCase().includes(termo.toLowerCase())
  )


  if (topicoMaisSimilar === ultimoTopico) {
    return
  }

  if (!topicoMaisSimilar) {
    return
  }

  ultimoTopico = topicoMaisSimilar

  const topicoParaIr = document.querySelector('#' + topicoMaisSimilar);

  if (!topicoParaIr) {
    return
  }

  topicoParaIr.scrollIntoView({ behavior: 'smooth' });
}



// Event listener para a tecla Enter na barra de pesquisa
// keyup é a ação de soltar a tecla do teclado
// o console.log exibe a tecla escrita no input



document.getElementById('searchInput').addEventListener('keyup', (event) => { 
  console.log(event.target.value) 
  search(event.target.value.trim());
});


// praticar com o auto complete agora

// Event listener para clicar em um dos itens de auto complete
// document.querySelectorAll('.autoCompleteItem').forEach(item => {
//   item.addEventListener('click', () => {
//     search(item.textContent.trim());
//   });
// });