import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

document.addEventListener("DOMContentLoaded", () => {
  const formCadastro = document.querySelector("#form-cadastro");
  
  if (formCadastro) {
    formCadastro.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      // Dados básicos de autenticação
      const email = formCadastro.email.value;
      const senha = formCadastro.senha.value;

      try {
        // 1. Cria usuário básico (email/senha)
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        
        // 2. Salva dados temporários para completar cadastro depois
        sessionStorage.setItem("dadosTemporarios", JSON.stringify({
          email,
          uid: userCredential.user.uid
        }));

        // 3. Redireciona para completar cadastro
        window.location.href = "/pages/inscrever.html";
        
      } catch (error) {
        console.error("Erro no cadastro:", error.code);
        if (error.code === "auth/email-already-in-use") {
          alert("Este e-mail já está cadastrado. Faça login ou recupere sua senha.");
        } else {
          alert("Erro ao cadastrar: " + error.message);
        }
      }
    });
  }

  // Botão de "Entrar"
  const btnEntrar = document.getElementById("btn-entrar");
  btnEntrar.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});
