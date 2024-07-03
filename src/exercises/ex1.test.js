// tests/ex1.test.js
document.body.innerHTML = `
  <div class="container">
    <button id="add-class-button">Add Class</button>
    <div id="element" class="initial-class"></div>
  </div>
`;

require('./exercises/ex1.js');

test('adds class to element when button is clicked', () => {
    const button = document.getElementById('add-class-button');
    const element = document.getElementById('element');

    // Click the button
    button.click();

    // Check if the new class is added
    expect(element.classList.contains('new-class')).toBe(true);
});
