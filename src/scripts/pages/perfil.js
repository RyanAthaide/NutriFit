import "/src/services/firebase.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (!user) return;

  document.getElementById("profile-name").textContent =
    user.displayName || "Usuário";

  document.getElementById("profile-email").textContent = user.email;

  document.getElementById("profile-photo").src =
    user.photoURL || "https://cdn-icons-png.flaticon.com/128/149/149071.png";
});
