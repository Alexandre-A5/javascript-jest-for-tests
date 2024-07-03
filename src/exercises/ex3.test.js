// validateEmail.test.js

const fs = require('fs');
const path = require('path');

// Lire le contenu HTML pour les tests
const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

// Décrire le groupe de tests
describe('ValidateEmail Functionality', () => {
    let emailForm;
    let emailInput;
    let validationMessage;

    // Configurer le DOM avant chaque test
    beforeEach(() => {
        
        document.body.innerHTML = html;

        // Charger le script après avoir modifié le DOM
        require('./ex3'); // Assurez-vous que le chemin correspond au fichier script.js

        emailForm = document.getElementById('email-form');
        emailInput = document.getElementById('email-input');
        validationMessage = document.getElementById('validation-message');
    });

    test('should validate and display a message for a valid email', () => {
        emailInput.value = 'test@example.com';
        emailForm.dispatchEvent(new Event('submit'));

        expect(validationMessage.textContent).toBe("L'email est valide.");
        expect(validationMessage.style.color).toBe("green"); // Si vous utilisez la couleur pour le message valide
    });
});
