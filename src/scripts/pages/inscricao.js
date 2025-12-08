// src/scripts/pages/inscricao.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-inscricao");

  if (!form) {
    console.warn("Formulário de login não encontrado.");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("campo-email").value.trim();
    const senha = document.getElementById("campo-password").value;

    try {
      await signInWithEmailAndPassword(auth, email, senha);

      // login ok → vai pro dashboard
      window.location.href = "/Pages/dashboard.html";

    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao entrar: " + error.message);
    }
  });
});
