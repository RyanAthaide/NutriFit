// import para autenticacao via google
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebase.js";

export async function googleLogin(params) {
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        console.log("Usuário logado: ", result.user);
        window.location.href = "./public/pages/dashboard.html";
    }
    catch (error) {
        console.error("Erro ao fazer login:", error.massage);
    }
}

