const input = document.getElementById("novaTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaTarefas");

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    const texto = input.value.trim();

    // Não deixa adicionar tarefas vazias
    if (texto === "") {
        input.focus();
        return;
    }

    // Cria o elemento li
    const tarefa = document.createElement("li");

    // Cria o texto da tarefa
    const textoTarefa = document.createElement("span");
    textoTarefa.textContent = texto;

    // Botão para concluir
    const btnConcluir = document.createElement("button");
    btnConcluir.textContent = "✓";
    btnConcluir.classList.add("btnConcluir");
    btnConcluir.title = "Concluir tarefa";

    btnConcluir.addEventListener("click", () => {
        tarefa.classList.toggle("concluida");
    });

    // Botão para remover
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "✕";
    btnRemover.classList.add("btnRemover");
    btnRemover.title = "Remover tarefa";

    btnRemover.addEventListener("click", () => {
        tarefa.remove();
    });

    // Junta tudo dentro do li
    tarefa.appendChild(textoTarefa);
    tarefa.appendChild(btnConcluir);
    tarefa.appendChild(btnRemover);

    // Adiciona a tarefa à lista
    lista.appendChild(tarefa);

    // Limpa o input
    input.value = "";
    input.focus();
}

// Adiciona ao clicar no botão
btnAdicionar.addEventListener("click", adicionarTarefa);

// Também adiciona ao apertar Enter
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});
