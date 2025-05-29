import { getAuth } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { app } from "../../services/firebase.js";

const auth = getAuth();
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", async () => {
  // Recupera dados temporários
  const dadosTemporarios = JSON.parse(sessionStorage.getItem("dadosTemporarios"));
  
  if (!dadosTemporarios) {
    window.location.href = "/cadastro.html"; // Volta se não vier do fluxo correto
    return;
  }

  const formCompleto = document.querySelector("#form-inscricao");
  
  if (formCompleto) {
    formCompleto.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      // Dados complementares
      const userData = {
        nome: formCompleto.nome.value,
        sobrenome: formCompleto.sobrenome.value,
        email: dadosTemporarios.email,
        criadoEm: new Date()
      };

      try {
        // Salva no Firestore
        await setDoc(doc(db, "usuarios", dadosTemporarios.uid), userData);
        
        // Limpa dados temporários
        sessionStorage.removeItem("dadosTemporarios");
        
        // Redireciona para área logada
        window.location.href = "/dashboard.html";
        
      } catch (error) {
        console.error("Erro ao completar cadastro:", error);
        alert("Erro ao salvar dados. Tente novamente.");
      }
    });
  }
});