// Importa a autenticação via Google
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebase.js";

export async function googleLogin() {
  console.log("Tentando login com Google");

  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

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
