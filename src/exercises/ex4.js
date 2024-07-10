// ex4.js

// Configuration de l'API
const apiKey = '891fcaaa0f613df11046ed15bd1a4607'; // Clé API
const cityName = 'Montcuq'; // Nom de la ville
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

// Fonction pour récupérer des données depuis l'API OpenWeatherMap
export const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // Convertir la température de Kelvin à Celsius
    data.main.tempCelsius = (data.main.temp - 273.15).toFixed(2);
    return data;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

// Fonction pour remplacer le contenu du paragraphe par les données récupérées
const replaceParagraphWithData = async () => {
  try {
    const data = await fetchData();
    if (data) {
      const paragraph = document.getElementById('paragraph');
      if (paragraph) {
        // Remplacer le contenu du paragraphe par les données météorologiques
        paragraph.innerHTML = `
          <h1>Weather in ${cityName}</h1>
          <p>Temperature: ${data.main.tempCelsius} °C</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
      } else {
        console.error('Paragraph with ID "paragraph" not found.');
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Attacher l'événement DOMContentLoaded pour appeler la fonction lorsque la page est chargée
document.addEventListener('DOMContentLoaded', () => {
  // Attacher l'événement click au bouton pour remplacer le paragraphe avec les données
  const button = document.getElementById('remove-paragraph-button');
  if (button) {
    button.addEventListener('click', replaceParagraphWithData);
  } else {
    console.error('Button with ID "remove-paragraph-button" not found.');
  }
});
