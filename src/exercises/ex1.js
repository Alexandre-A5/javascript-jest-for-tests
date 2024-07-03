// src/exercises/ex1.js
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('add-class-button');
  const element = document.getElementById('element');

  button.addEventListener('click', addClassToElement);

  function addClassToElement() {
      element.classList.add('new-class');
  }
});
module.exports = { addClassToElement };