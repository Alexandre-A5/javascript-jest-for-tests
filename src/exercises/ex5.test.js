// events.test.js

// Nous avons besoin de simuler l'environnement DOM pour que les tests fonctionnent correctement.
document.body.innerHTML = `
  <div id="hover-area" style="width: 100px; height: 100px; background-color: lightblue;"></div>
  <p id="interaction-result"></p>
`;

const hoverArea = document.getElementById('hover-area');
const interactionResult = document.getElementById('interaction-result');

// Les gestionnaires d'événements que nous voulons tester
hoverArea.addEventListener('mouseover', () => {
  interactionResult.textContent = 'Vous survolez la zone!';
  hoverArea.style.backgroundColor = 'red';
});

hoverArea.addEventListener('mouseout', () => {
  interactionResult.textContent = '';
  hoverArea.style.backgroundColor = 'lightblue';
});

test('should change text and background color on mouseover', () => {
  // Simuler l'événement mouseover
  const event = new Event('mouseover');
  hoverArea.dispatchEvent(event);

  // Vérifier les résultats
  expect(interactionResult.textContent).toBe('Vous survolez la zone!');
  expect(hoverArea.style.backgroundColor).toBe('red');
});

test('should clear text and change background color on mouseout', () => {
  // Simuler l'événement mouseout
  const event = new Event('mouseout');
  hoverArea.dispatchEvent(event);

  // Vérifier les résultats
  expect(interactionResult.textContent).toBe('');
  expect(hoverArea.style.backgroundColor).toBe('lightblue');
});
