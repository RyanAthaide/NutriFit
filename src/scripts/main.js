
// Importa as funções de login do Google e GitHub
import { googleLogin } from "./auth/googleAuth";
import { githubLogin } from "./auth/githubAuth";


// Busca o botão de login com Google e github
document.addEventListener('DOMContentLoaded', () => {

    const loginButtons = [
        { id: "btn-loginGoogle", action: googleLogin },
        { id: "btn-loginGithub", action: githubLogin },
    ];

    loginButtons.forEach(({ id, action }) => {
        const btnLogin = document.getElementById(id);
        if (btnLogin) {
            btnLogin.addEventListener('click', (e) => {
                e.preventDefault();
                action();    
            })
        }
    });
});


// Redirecionamento para página de cadastro (cadastre-se)
const btnCadastro = document.getElementById("btn-cadastro");
if (btnCadastro) {
    btnCadastro.addEventListener('click', function () {
        window.location.href = "/Pages/cadastroForm.html";
    });
}

// Redirecionamento para página de inscrição com e-mail (botão de se inscrever que esta na pagina principal de login)
const inscrever = document.getElementById("inscricao");
if (inscrever) {
    inscrever.addEventListener('click', function () {
        window.location.href = "/Pages/inscrever.html";
    });
}

