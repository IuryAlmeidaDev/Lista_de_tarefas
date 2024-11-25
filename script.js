// Seletores
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const pendentesList = document.getElementById('pendentes-list');
const concluidasList = document.getElementById('concluidas-list');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// Alternância de tema
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Adicionar tarefa
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Digite uma tarefa antes de adicionar.');
        return;
    }

    addTaskToList(taskText, pendentesList);
    taskInput.value = '';
    taskInput.focus();
});

// Adicionar tarefa na lista
function addTaskToList(taskText, list) {
    const li = document.createElement('li');
    li.textContent = taskText;

    // Botão de concluir
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔️';
    completeBtn.className = 'complete-btn';
    completeBtn.addEventListener('click', () => {
        if (list === pendentesList) {
            pendentesList.removeChild(li);
            addTaskToList(taskText, concluidasList);
        }
    });

    // Botão de remover
    const removeBtn = document.createElement('button');
    removeBtn.textContent = '❌';
    removeBtn.className = 'remove-btn';
    removeBtn.addEventListener('click', () => {
        list.removeChild(li);
    });

    li.appendChild(completeBtn);
    li.appendChild(removeBtn);
    list.appendChild(li);
}
