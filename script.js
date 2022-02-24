let botaoAdicionar = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');
let ol = document.getElementById('lista-tarefas');

botaoAdicionar.addEventListener('click', function() {
let li = document.createElement('li');
li.innerText = input.value;
input.value = '';
ol.appendChild(li);
})

let li = document.createElement('li');

li.addEventListener('click', function() {
    let item = document.querySelector('li');
   for (i = 0; i < item.length; i += 1) {
       item[i].classList.remove('selected');
   }
   li.classList.add('selected'); 
}); 
