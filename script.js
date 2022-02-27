let botaoAdicionar = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');
let ol = document.getElementById('lista-tarefas'); // ol  e a lista pai d todos

botaoAdicionar.addEventListener('click', function() {
    let li = document.createElement('li');
    li.innerText = input.value;
    ol.appendChild(li);
    document.getElementById('texto-tarefa').value = null;
});   

function trocaColor(event) {
    const trocaClick = event.target;
    if (trocaClick.tagName === 'LI') {
        clearLiColor();
        trocaClick.style.backgroundColor = 'gray';
    }
}
document.addEventListener('click', trocaColor);

function liCinza(event) {
    const selectedLi = document.querySelectorAll('.selected');
        if (selectedLi !== null) {
            selectedLi.remove('selected');
        }
        event.target.classList.add('selected'); 
}
document.addEventListener('click', liCinza);


function LiRiscado(event) {
    event.target.classList.toggle('completed');
}
document.addEventListener('dblclick', LiRiscado);













