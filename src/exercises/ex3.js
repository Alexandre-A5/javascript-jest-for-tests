// Récupération des éléments du DOM
const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const validationMessage = document.getElementById('validation-message');

// Fonction pour valider l'email
function validateEmail() {
    const email = emailInput.value.trim(); // Utilisation de trim() pour enlever les espaces superflus
    console.log('Validating email:', email); // Débogage

    // Expression régulière pour valider un email simple
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Vérification si le champ email est vide
    if (email === '') {
        validationMessage.textContent = "Veuillez entrer une adresse email.";
    } else if (emailPattern.test(email)) {
        validationMessage.textContent = "L'email est valide.";
        validationMessage.style.color = "green"; // Optionnel : change la couleur du message
    } else {
        validationMessage.textContent = "L'email est invalide. Veuillez entrer un email valide.";
        validationMessage.style.color = "red"; // Optionnel : change la couleur du message
    }
}

// Écouteur d'événement pour la soumission du formulaire
emailForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche la soumission du formulaire
    validateEmail(); // Valider l'email et afficher le message
});
