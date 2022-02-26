let botaoAdicionar = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');
let ol = document.getElementById('lista-tarefas'); // ol  e a lista 



botaoAdicionar.addEventListener('click', function() {
    let li = document.createElement('li');
    li.innerText = input.value;
    ol.appendChild(li);
    document.getElementById('texto-tarefa').value = null;
});    

