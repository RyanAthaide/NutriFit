// import para autenticacao via google
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import para autenticacao via github
// import { GithubAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "../../src/services/firebase.js";

// função de click para autenticacao via google
document.getElementById("btn-loginGoogle").addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result);
    })

    .catch((error) => {
        console.log(error);
    })
});


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