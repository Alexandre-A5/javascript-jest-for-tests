
const fs = require('fs'); // Le module fs permet de lire les fichiers du système de fichiers.
const path = require('path'); // Le module path permet de manipuler les chemins de fichiers.
const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');


describe('addClassToElement', () => {
  let addButton;
  let element;

  beforeEach(() => {

    document.body.innerHTML = `
      <div class="container">
        <button id="add-class-button">Add Class</button>
        <div id="element" class="initial-class"></div>
      </div>
    `;
  
    addButton = document.getElementById('add-class-button');
    element = document.getElementById('element');
    require('./ex1');
  });


  test('should add a new class to the element when the button is clicked', () => {

    addButton.click();

    expect(element.classList.contains('new-class')).toBe(true);
  });
});