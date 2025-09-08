const form = document.getElementById("form");
const inputNome = document.getElementById("name");
const inputDate = document.getElementById("birthdate");
form.addEventListener("submit", function (event){
    event.preventDefault();
    const nome = inputNome.value;
    const dataNascimento = inputDate.value;
    console.log(nome);
    console.log(dataNascimento);
    console.log("Formulário enviado!");
	});

