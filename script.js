const elementoLista = document.querySelector('ol');     // criado para pegar a ol.
const elementoInput = document.querySelector('input');  // criado para pegar o input.
const elementoBotao = document.querySelector('button'); // criado para pegar o botao.

const tarefas = []; // criado uma array vazia. 


function mostraTarefas() {  // cria umafunção 
    elementoLista.innerHTML = ''; // limpa minha html , para inserir outro 

    for (tarefa of tarefas) {  // criei um for para percorrer a array.
        const elementoTarefa = document.createElement('li') // criado para pegar o elemento li.
        const textoTarefa = document.createTextNode(tarefa) // criado para pegar o texto que a pessoa digitar 

        const elementoLink = document.createElement('a');

        elementoTarefa.appendChild(textoTarefa);
        elementoLista.appendChild(elementoTarefa);
    }
}

mostraTarefas() // chamo a função

function addTarefa() { // criado uma função
    const textoTarefa = elementoInput.value; // pega o valor do input
    tarefas.push(textoTarefa); // adiciona ao array 
    elementoInput.value = ''; // limpa 

    mostraTarefas() // chamo a função
}

elementoBotao.setAttribute('onclick', 'addTarefa()');
