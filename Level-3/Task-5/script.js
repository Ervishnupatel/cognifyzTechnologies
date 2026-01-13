const weatherImages = {
    "Clear": "img/weather_clear&sunney.PNG",
    "Clouds": "img/weather_clouds.jpg",
    "Rain": "img/weather_rain.jpg",
    "Drizzle": "img/weather_drizzel.jpg",
    "Thunderstorm": "img/weather_thunderstrom.jpg",
    "Snow": "img/weather_snow.jpg",
    "Mist": "img/weather_mist.PNG",
    "Fog": "img/weather_fog.jpg",
    "Haze": "img/weather_haze.PNG",
    "Smoke": "img/weather_smoke.jpg"
};



// mian function that search weather and give output 
function getWeather() {
    let city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("weather").innerHTML = "Please enter a city name";
        return;
    }

    document.getElementById("weather").innerHTML = "Loading... ⏳";

    let apiKey = "79ef22f94f0f418030ca3069bd7d9ab8"; // paste your key here
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod != 200) {
                document.getElementById("weather").innerHTML = `City not found ❌ (${data.message})`;
                return;
            }

            // Create a card for weather details
            let weatherType = data.weather[0].main;  // e.g., "Clouds", "Rain"
let weatherImg = weatherImages[weatherType] || "img/weather/default.png";

document.getElementById("weather").innerHTML = `
    <div class="weather-card">
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>🌡 Temperature: ${data.main.temp} °C</p>
        <p>🌤 Weather: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        <img src="${weatherImg}" alt="${data.weather[0].description}">
    </div>
`;

        })
        .catch(error => {
            console.error(error);
            document.getElementById("weather").innerHTML = "Error loading weather ❌";
        });
}
