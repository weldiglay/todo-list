const getButton = document.getElementById('criar-tarefa'); // variavel criada para pegar o botão

function getTask() {  //funcção para obter tarefa 
  const getWork = document.getElementById('texto-tarefa').value; // variavel pegar o elemento by ID
  const getOl = document.querySelector('lista-tarefas'); // variavel criada para selecionar lista-tarefas
  const addList = document.createComment('li'); // variavel criada para a criação de itens
  
  addList.innerText = getWork; // copia e transfere
  //getOl.appendChild(addList); // seleciona a criança e adiciona
  getWork = '';
}
getButton.addEventListener('click', getTask); // pega o botão e adiciona um evento click na funcao.