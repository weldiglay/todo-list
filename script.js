let botaoAdicionar = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');
let ol = document.getElementById('lista-tarefas');

botaoAdicionar.addEventListener('click', function() {
let li = document.createElement('li');
li.innerText = input.value;
input.value = '';
ol.appendChild(li);
});

let color = document.querySelector('.selected');
let selectedColor;

function clearSelection() {
    color.classList.remove('selected');
}
function addSelection(target) {
    target.classList.add('selected');
    Selection = document.querySelector('.selected');
}
