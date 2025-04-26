
// Redirecionamento e retorno para paginas de login com botão 'cadastre-se'.
const btnCadastro = document.getElementById("btn-cadastro");

btnCadastro.addEventListener('click', function() {
    window.location.href = "/pages/cadastroForm.html";
});


// entrando na pagina increva-se com e-mail
const inscrever = document.getElementById("inscricao");
inscrever.addEventListener('click', function() {
    window.location.href = "/pages/inscrever.html";
});


// Prevenção de recarregamento do form
const formButton = document.querySelector('form button[type="submit"]');
if (formButton) {
    formButton.addEventListener('click', function(e) {
        e.preventDefault();
    });
}