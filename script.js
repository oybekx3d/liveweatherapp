const apiKey = '67c2259d437fc7954ee851ee4a78a78b';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureCElement = document.getElementById('temperatureC');
const temperatureFElement = document.getElementById('temperatureF');
const descriptionElement = document.getElementById('description');
const iconId = document.getElementById('icon');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});
function fetchWeather(location) {
    var url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = "Current weather in " + data.name;
            temperatureCElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
            document.getElementById("icon").src = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
        
    var url = `${apiUrl}?q=${location}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            temperatureFElement.textContent = `${Math.round(data.main.temp)}°F`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}