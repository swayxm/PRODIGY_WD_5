const apiKey = '9ecc0491d2d97c1c7b6d743a547cfdda'; 
const weatherDisplay = document.getElementById('weatherDisplay');
const locationName = document.getElementById('locationName');
const description = document.getElementById('description');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');

function getWeather() {
    const location = document.getElementById('locationInput').value;
    if (location) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    updateWeather(data);
                } else {
                    console.error('Error:', data.message);
                    alert('Location not found. Please try again.');
                }
            })
            .catch(error => console.error('Error fetching weather data:', error));
    } else {
        alert('Please enter a location.');
    }
}

function updateWeather(data) {
    locationName.innerText = data.name;
    description.innerText = data.weather[0].description;
    temperature.innerText = data.main.temp;
    humidity.innerText = data.main.humidity;
    windSpeed.innerText = data.wind.speed;
    weatherDisplay.style.display = 'block';
}


window.onload = function() {
    document.getElementById('locationInput').value = 'Mumbai';
    getWeather();
}
