let botaoAdicionar = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');
let ol = document.getElementById('lista-tarefas');

botaoAdicionar.addEventListener('click', function() {
let li = document.createElement('li');
li.innerText = input.value;
input.value = '';
ol.appendChild(li);
});
 // Selecionando a Color

 ol.getElementById