// Seleciona elementos
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Adiciona evento ao botão
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, insira uma tarefa!');
        return;
    }

    addTask(taskText);
    taskInput.value = ''; // Limpa o campo de entrada
});

// Função para adicionar tarefas
function addTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="remove-btn">Remover</button>
    `;

    // Adiciona evento para marcar como concluída
    li.querySelector('span').addEventListener('click', () => {
        li.querySelector('span').classList.toggle('complete');
    });

    // Adiciona evento para remover tarefa
    li.querySelector('.remove-btn').addEventListener('click', () => {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
}
