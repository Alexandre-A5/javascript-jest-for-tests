const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

describe('ShowMessage', () => {
    let clickMeButton;
    let message;

    beforeEach(() => {
        // Charger le HTML dans le document
        document.body.innerHTML = `
        <div class="container">
            <button id="click-me-button">Click Me</button>
            <p id="message">Hello, World!</p>
        </div>
        `;

        // Charger le script après avoir modifié le DOM
        require('./ex2');

        // Sélectionner les éléments maintenant que le DOM est prêt
        clickMeButton = document.getElementById('click-me-button');
        message = document.getElementById('message');
    });

    test('should change the message when button is clicked', () => {
        clickMeButton.click();
        expect(message.textContent).toBe('Le message a été changé.');
    });
});
