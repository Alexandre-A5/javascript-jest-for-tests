// Sélectionner les éléments
const hoverArea = document.getElementById('hover-area');
const interactionResult = document.getElementById('interaction-result');

// Ajouter un gestionnaire d'événement pour le survol de la zone
hoverArea.addEventListener('mouseover', () => {
  // Mettre à jour le texte de l'élément <p> quand la souris est sur la zone
  interactionResult.textContent = 'Vous survolez la zone!';
  hoverArea.style.backgroundColor='red';
});

// Ajouter un gestionnaire d'événement pour quand la souris quitte la zone
hoverArea.addEventListener('mouseout', () => {
  // Vider le texte de l'élément <p> quand la souris quitte la zone
  interactionResult.textContent = '';
  hoverArea.style.backgroundColor='lightblue';
});
