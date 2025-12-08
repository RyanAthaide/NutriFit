// Importa a autenticação via GitHub
import {
  GithubAuthProvider,
  signInWithPopup,
  fetchSignInMethodsForEmail,
  signInWithCredential,
  linkWithCredential
} from "firebase/auth";
import { auth } from "../../services/firebase.js";
import { saveUser } from "./saveUser.js";

const provider = new GithubAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export async function githubLogin() {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (user) {
     await saveUser(user); // ⚠️ aguarde salvar antes de redirecionar!
    window.location.href = "/Pages/dashboard.html";
    }
  } catch (error) {
    if (error.code === "auth/account-exists-with-different-credential") {
      const pendingCred = GithubAuthProvider.credentialFromError(error);
      const email = error.customData.email;

      // Descobre com qual provedor o email está registrado
      const methods = await fetchSignInMethodsForEmail(auth, email);
      if (methods.includes("google.com")) {
        alert("Este e-mail já foi usado com o Google. Faça login com o Google para vincular sua conta.");

        // Você pode forçar login com Google aqui e depois linkar:
        // (exemplo: signInWithPopup(googleProvider) e depois linkWithCredential)
      } else {
        alert("Este e-mail já foi usado com outro provedor.");
      }
    } else {
      console.error("Erro ao fazer login com GitHub:", error);
    }
  }
}