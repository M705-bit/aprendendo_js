const form = document.getElementById("form");
const inputNome = document.getElementById("name");
const inputDate = document.getElementById("birthdate");
form.addEventListener("submit", function (event){
    event.preventDefault();
    x = inputNome.value;
    y = inputDate.value;
    [dia, mes, ano] = y.split("/");
    if(x < 3 || x > 120 || (x).match(/\d+/) || y === "" || !(1 < dia && dia < 31) || !(1 < mes && mes < 12) || ano === ""){
        alert("Por favor, verifique os dados inseridos.");
        return;
    } else {
        localStorage.setItem("birthdate", y);
        localStorage.setItem("name", x);
        const pessoa = {
            nome: localStorage.getItem("name"),
            dataNascimento: localStorage.getItem("birthdate")
        };
        
        adicionarNaTabela(pessoa)
        console.log("Formulário enviado!");
    }
});

var botao = null;
var adicionarNaTabela = function(pessoa) {
    const tabela = document.getElementById("tabela-pessoas");

    // Verifica se está editando
    if (botao && botao.classList.contains("editar")) {
        try {
            const linha = botao.parentNode.parentNode;
            linha.cells[0].innerText = inputNome.value;
            linha.cells[1].innerText = inputDate.value;
        } catch (error) {
            console.error("Erro ao editar linha:", error);
        }
    } else {
        // Adiciona nova linha
        let novalinha = tabela.insertRow();
        let celulaNome = novalinha.insertCell(0);
        let celulaData = novalinha.insertCell(1);
        let celulaAcoes = novalinha.insertCell(2);

        celulaNome.innerText = pessoa.nome;
        celulaData.innerText = pessoa.dataNascimento;
        celulaAcoes.innerHTML = '<button class="editar">Editar</button> <button class="deletar">Deletar</button>';
    }
};
const tabela = document.getElementById("tabela-pessoas");
tabela.addEventListener("click", function(event) {
    
	 botao = event.target;
    if (botao.classList.contains("deletar")){
        const linha = botao.parentNode.parentNode;
        linha.remove();
    }
});

