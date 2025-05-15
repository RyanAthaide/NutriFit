export function saveUser(user) {
  if (!user) return;

  const userData = {
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    uid: user.uid,
    providerId: user.providerId,
  };

  localStorage.setItem("userData", JSON.stringify(userData));
}
