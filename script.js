const adicionarBtn = document.getElementById('adicionar');
const tarefaInput = document.getElementById('tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

adicionarBtn.addEventListener('click', adicionarTarefa);
listaTarefas.addEventListener('click', removerTarefa);

// Carrega as tarefas salvas no LocalStorage
carregarTarefas();

function adicionarTarefa() {
  const tarefa = tarefaInput.value;
  
  if (tarefa === '') {
    return;
  }
  
  const li = document.createElement('li');
  const span = document.createElement('span');
  const botao = document.createElement('button');
  
  span.textContent = tarefa;
  botao.textContent = 'Remover';
  
  li.appendChild(span);
  li.appendChild(botao);
  
  listaTarefas.appendChild(li);
  
  // Salva a tarefa no LocalStorage
  salvarTarefa(tarefa);
  
  tarefaInput.value = '';
}

function removerTarefa(evento) {
  if (evento.target.tagName === 'BUTTON') {
    const li = evento.target.parentNode;
    listaTarefas.removeChild(li);
    
    // Remove a tarefa do LocalStorage
    removerTarefaLocalStorage(li);
  }
}

function salvarTarefa(tarefa) {
  let tarefas;
  
  if (localStorage.getItem('tarefas') === null) {
    tarefas = [];
  } else {
    tarefas = JSON.parse(localStorage.getItem('tarefas'));
  }
  
  tarefas.push(tarefa);
  
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function carregarTarefas() {
  let tarefas;
  
  if (localStorage.getItem('tarefas') === null) {
    tarefas = [];
  } else {
    tarefas = JSON.parse(localStorage.getItem('tarefas'));
  }
  
  tarefas.forEach((tarefa) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const botao = document.createElement('button');
  
    span.textContent = tarefa;
    botao.textContent = 'Remover';
  
    li.appendChild(span);
    li.appendChild(botao);
  
    listaTarefas.appendChild(li);
  });
}

function removerTarefaLocalStorage(tarefa) {
  let tarefas;
  
  if (localStorage.getItem('tarefas') === null) {
    tarefas = [];
  } else {
    tarefas = JSON.parse(localStorage.getItem('tarefas'));
  }
  
  const tarefaIndex = tarefa.children[0].textContent;
  tarefas.splice(tarefas.indexOf(tarefaIndex), 1);
  
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
