let botaoAdicionar = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');
let ol = document.getElementById('lista-tarefas');   // A ol e aa Lista PAI de Todos
let apagaTudo = document.getElementById('apaga-tudo');
let salvaTudo = document.getElementById('salvar-tarefas');
let ClearComplete = document.getElementById('remover-finalizados'); 


botaoAdicionar.addEventListener('click', function() {
  let li = document.createElement('li');
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
ClearCompleted.addEventListener('click', function () {                 // pegando a variavel para add o envento click
    const listRemove = document.querySelectorAll('li');                // variavel para remover todos do filho li
    for (let index = 0; index < listRemove.length; index += 1) {       // for lacos e loop, menor e menos 
      const taskRemove = listRemove[index];                             // variavel taskremove e ela mesma com o arrayindex

      if(taskRemove.className.includes('completed')){                   //condição se                
      ol.removeChild(taskRemove);                                       // pega a lista pai e remove o filho resultado
}
  }
});








// function pintarCinza (event) {
//   const itemEscolhido = event.target;
//   if (itemEscolhido.classlist.contains('selected')) {
//     itemEscolhido.classlist.remove('selected');
//   }
//   else{
//     itemEscolhido.classlist.add('selected');
//   }
// }
// ol.addEventListener('click', pintarCinza);