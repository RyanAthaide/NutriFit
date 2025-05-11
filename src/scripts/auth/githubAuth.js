// import para autenticacao via github
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebase.js";

export async function githubLogin() {
    const provider = new GithubAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        console.log("Usuário logado: ", result.user);
        window.location.href = "./public/pages/dashboard.html";
    }  

    catch (error) {
        console.error("Erro ao fazer login:", error.message);
    }
}