document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Empêche l'envoi classique du formulaire

    // Affiche un message de succès
    alert("✅ Merci ! Ton message a été envoyé avec succès !");

    // Redirection vers la page d'accueil après 2 secondes
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  });
});
