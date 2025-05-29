import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

// Inicializa o auth
const auth = getAuth();

// Referência ao botão de logout
const btnLogout = document.getElementById("btn-sair");

// Protege caso o botão ainda não exista no momento do script
if (btnLogout) {
  btnLogout.addEventListener("click", async () => {
    try {
      await signOut(auth);
      console.log("Usuário saiu com sucesso!");
      window.location.href = "index.html";
    } catch (error) {
      console.error("Erro ao sair:", error);
      alert("Erro ao sair da conta. Tente novamente.");
    }
  });
}

// Verifica se o usuário está logado
onAuthStateChanged(auth, (user) => {
  const perfilNome = document.getElementById("perfilNome");

  if (user) {
    // Tenta mostrar o nome. Se não tiver, mostra o email
    if (perfilNome) {
      perfilNome.textContent = user.displayName || user.email?.split("@")[0] || "Usuário";
    }
  } else {
    // Se não estiver logado, redireciona para a página de login
    window.location.href = "index.html";
  }
});
