const loginForm = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const message = document.getElementById("message");


loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (password.value !== confirmPassword.value) {

        message.textContent = "As senhas não são iguais.";
        message.style.color = "#f87171";

        password.value = "";
        confirmPassword.value = "";

        password.focus();

        return;
    }
    message.textContent = "Conta criada com sucesso!";
    message.style.color = "#4ade80";


});

const forgotPasswordForm = document.getElementById(
    "forgotPasswordForm"
);

const email = document.getElementById("email");

const message = document.getElementById("message");


forgotPasswordForm.addEventListener("submit", function (event) {

    // Impede a página de recarregar
    event.preventDefault();


    // Verifica se o e-mail foi preenchido
    if (email.value.trim() === "") {

        message.textContent = "Digite seu e-mail.";

        message.style.color = "#f87171";

        return;
    }


    // Verifica se o formato do e-mail é válido
    if (!email.checkValidity()) {

        message.textContent = "Digite um e-mail válido.";

        message.style.color = "#f87171";

        return;
    }


    // Mensagem de sucesso
    message.textContent =
        "Mensagem enviada! Verifique seu e-mail para continuar.";

    message.style.color = "#4ade80";


    // Limpa o campo depois do envio
    email.value = "";

});
