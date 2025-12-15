// saveUser.js

import { db } from "/src/services/firebase.js";
import { doc, setDoc, getDoc } from "firebase/firestore";

/**
 * Salva os dados do usuário logado no Firestore.
 * @param {Object} user - Objeto do usuário Firebase
 */
export async function saveUser(user) {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  // Se o usuário ainda não existe, cria um novo documento
  if (!userSnap.exists()) {
    const { displayName, email, photoURL, providerId, uid } = user;

    try {
      await setDoc(userRef, {
        uid,
        displayName,
        email,
        photoURL,
        providerId,
        createdAt: new Date().toISOString()
      });

      console.log("Usuário salvo no Firestore!");
    } catch (error) {
      console.error("Erro ao salvar usuário no Firestore:", error);
    }
  } else {
    console.log("Usuário já existe no Firestore.");
  }
}
