import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "/src/services/firebase.js";

const formCadastro = document.getElementById("form-cadastro");

function checkIn() {

    formCadastro.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nome = document.getElementById("campo-name").value.trim();
        const sobrenome = document.getElementById("campo-surname").value.trim();
        const email = document.getElementById("campo-email").value.trim();
        const senha = document.getElementById("campo-password").value;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;

            await updateProfile(user, {
                displayName: `${nome} ${sobrenome}`
            });

            alert("Cadastro realizado com sucesso! Faça login agora.");
            window.location.href = "index.html";

        } catch (error) {
            console.error("Erro no cadastro:", error.code, error.message);
            alert(`Erro ao cadastrar: ${error.message}`);
        }
    });

  }

checkIn();
  
  // Botão "Entrar"
  const btnEntrar = document.getElementById("btn-entrar");
  btnEntrar.addEventListener('click', function () {
    window.location.href = "index.html";
  });
  