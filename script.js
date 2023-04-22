const botaoAdicionar = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas'); // A ol e aa Lista PAI de Todos
const apagaTudo = document.getElementById('apaga-tudo');
const btnSalva = document.getElementById('salvar-tarefas');
const ClearComplete = document.getElementById('remover-finalizados');
const ApagaSelecionado = document.getElementById('remover-selecionado');
const botaoDown = document.getElementById('mover-baixo');
const botaoUp = document.getElementById('mover-cima');

botaoAdicionar.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = input.value;
  ol.appendChild(li);
  document.getElementById('texto-tarefa').value = null;
});

function pintarCinza(event) {
  const naoEscolhido = document.querySelector('.selected');
  if (naoEscolhido !== null) {
    naoEscolhido.classList.toggle('selected');
  }
  const itemEscolhido = event.target;
  itemEscolhido.classList.toggle('selected');
}
ol.addEventListener('click', pintarCinza);

function riscaItem(event) {
  const itemCompleto = event.target;
  itemCompleto.classList.toggle('completed');
}
ol.addEventListener('dblclick', riscaItem);

function apagaLista() {
  ol.innerHTML = '';
}
apagaTudo.addEventListener('click', apagaLista);

const ClearCompleted = document.getElementById('remover-finalizados'); // variavel
ClearCompleted.addEventListener('click', () => { // pegando a variavel para add o envento click
  const listRemove = document.querySelectorAll('li'); // variavel para remover todos do filho li
  for (let index = 0; index < listRemove.length; index += 1) { // for lacos e loop, menor e menos
    const taskRemove = listRemove[index]; // variavel taskremove e ela mesma com o arrayindex

    if (taskRemove.className.includes('completed')) { // condição se
      ol.removeChild(taskRemove); // pega a lista pai e remove o filho resultado }                                                                     //  ajuda hector , lucas
    }
  }
});

const ApagaCompleted = document.getElementById('remover-selecionado'); // variavel
ApagaCompleted.addEventListener('click', () => { // pegando a variavel para add o envento click
  const listRemove = document.querySelectorAll('li'); // variavel para remover todos do filho li
  for (let index = 0; index < listRemove.length; index += 1) { // for lacos e loop, menor e menos
    const taskRemove = listRemove[index]; // variavel taskremove e ela mesma com o arrayindex
    if (taskRemove.className.includes('selected')) { // condição se
      ol.removeChild(taskRemove); // pega a lista pai e remove o filho resultado }                                                                     //  ajuda hector , lucas
    }
  }
});

btnSalva.onclick = () => {
  const item = [];
  for (let index = 0; index < ol.children.length; index += 1) {
    item.push(ol.children[index].outerHTML);
  }
  localStorage.setItem('ol', JSON.stringify(item));
};

botaoUp.onclick = () => {
  const elem = document.getElementsByClassName('selected')[0];

  if (elem === undefined) {
    return;
  }

  if (elem.previousElementSibling === null) {
    return;
  }

  const elemTxt = elem.innerText;
  const prevElem = elem.previousElementSibling;
  const prevTxt = prevElem.innerText;

  prevElem.innerText = elemTxt;
  prevElem.className += elem.classList;
  elem.innerText = prevTxt;
  elem.classList.toggle('selected');
};

botaoDown.onclick = () => {
  const elem = document.getElementsByClassName('selected')[0];

  if (elem === undefined) {
    return;
  }

  if (elem.nextElementSibling === null) {
    return;
  }

  const elemTxt = elem.innerText;
  const nextElem = elem.nextElementSibling;
  const nextTxt = nextElem.innerText;

  nextElem.innerText = elemTxt;
  nextElem.className += elem.classList;
  elem.innerText = nextTxt;
  elem.classList.toggle('selected');
};

window.onload = () => {
  if (localStorage.ol) {
    const saveTry = JSON.parse(localStorage.getItem('ol'));
    for (let i = 0; i < saveTry.length; i += 1) {
      ol.insertAdjacentHTML('beforeend', saveTry[i]);
    }
  }
};
