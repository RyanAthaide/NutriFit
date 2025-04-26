
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