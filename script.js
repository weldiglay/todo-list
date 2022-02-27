let botaoAdicionar = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');
let ol = document.getElementById('lista-tarefas'); // ol  e a lista pai d todos

botaoAdicionar.addEventListener('click', function() {
  let li = document.createElement('li');
  li.innerText = input.value;
  ol.appendChild(li);
  document.getElementById('texto-tarefa').value = null;
});

// function pintarCinza () {
//   const itemEscolhido = event.target;
//   if (itemEscolhido.classlist.contains('selected')) {
//     itemEscolhido.classlist.remove('selected');
//   }
//   else{
//     itemEscolhido.classlist.add('selected');
//   }
// }
// ol.addEventListener('click', pintarCinza);

 function pintarCinza(event) {
     const naoEscolhido = document.querySelector('.selected');
     if (naoEscolhido !== null) {
        naoEscolhido.classList.toggle('selected');
       }
       const itemEscolhido = event.target;
       itemEscolhido.classList.toggle('selected');
     }
ol.addEventListener('click', pintarCinza);


