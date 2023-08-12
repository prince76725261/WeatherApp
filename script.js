// ... (Previous code)

const API_KEY = '52f564e6f8d110452fa5bc6b26186c44'; // Replace with your OpenWeatherMap API key
const weatherInfo = document.getElementById('weatherInfo');

getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city !== '') {
        getWeather(city);
    }
});
console.log("chutiya");
async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'52f564e6f8d110452fa5bc6b26186c44'}&units=metric`;
   //const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"52f564e6f8d110452fa5bc6b26186c44"}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            weatherInfo.textContent = 'City not found';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;

    const weatherHTML = `
        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${weatherDescription}</p>
        <p>Humidity: ${humidity}%</p>
    `;

    weatherInfo.innerHTML = weatherHTML;
}

// ... (Rest of the code)
