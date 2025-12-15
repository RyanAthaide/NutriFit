import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

const imgPerfil = document.getElementById("profile-photo");
const nomeEl = document.getElementById("profile-name");
const emailEl = document.getElementById("profile-email");

onAuthStateChanged(auth, (user) => {
  if (!user) return;

  // Nome e email (sempre existem)
  nomeEl.textContent = user.displayName || "Usuário NutriFit";
  emailEl.textContent = user.email;

  // Foto (tratamento correto)
  if (user.photoURL) {
    imgPerfil.src = user.photoURL;
  } else {
    imgPerfil.src = "https://cdn-icons-png.flaticon.com/128/149/149071.png";
  }
});
