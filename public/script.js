let funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

function salvarLocalStorage() {
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
}

function atualizarQuantidade() {
    document.getElementById("quantidade").textContent = funcionarios.length;
}

function listarFuncionarios() {

    const lista = document.getElementById("listaFuncionarios");

    lista.innerHTML = "";

    for (let i = 0; i < funcionarios.length; i++) {

        const funcionario = funcionarios[i];

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h3>${funcionario.nome}</h3>
            <p>Email: ${funcionario.email}</p>
            <p>Cargo: ${funcionario.cargo}</p>
            <p>Departamento: ${funcionario.departamento}</p>
        `;

        lista.appendChild(card);
    }

    atualizarQuantidade();
}

function cadastrarFuncionario() {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cargo = document.getElementById("cargo").value;
    const departamento = document.getElementById("departamento").value;
    const senha = document.getElementById("senha").value;

    if (
        nome === "" ||
        email === "" ||
        cargo === "" ||
        departamento === "" ||
        senha === ""
    ) {
        alert("Preencha todos os campos!");
        return;
    }

    const funcionario = {
        id: Date.now(),
        nome: nome,
        email: email,
        cargo: cargo,
        departamento: departamento,
        senha: senha
    };

    funcionarios.push(funcionario);

    salvarLocalStorage();

    listarFuncionarios();

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("departamento").value = "";
    document.getElementById("senha").value = "";
}

document
    .getElementById("btnCadastrar")
    .addEventListener("click", cadastrarFuncionario);

listarFuncionarios();