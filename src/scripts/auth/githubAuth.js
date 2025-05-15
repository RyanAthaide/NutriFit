// Importa a autenticação via GitHub
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebase.js";
import { saveUser } from "./saveUser.js";

export async function githubLogin() {
  console.log("Tentando login com GitHub");

  const provider = new GithubAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    saveUser(user);

    if (user) {
      console.log("Usuário logado:", user);
      window.location.href = "./public/pages/dashboard.html";
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error.code, error.message);

    if (error.code === "auth/account-exists-with-different-credential") {
      alert("Essa conta já está vinculada com outro provedor. Tente fazer login com o provedor original.");
    }

    if (error.code === "auth/popup-blocked") {
      alert("Popup bloqueado pelo navegador. Tente permitir pop-ups para este site.");
    }

    // Outros erros
    alert("Não foi possível realizar o login. Tente novamente.");
  }
}
