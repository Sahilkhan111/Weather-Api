const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "f1cb1f787045c5c81e1e7d88b45f5566"; // Your provided API key

document.getElementById("get-weather").addEventListener("click", function () {
  const city = document.getElementById("city-input").value.trim();

  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found. Please try again.");
      }
      return response.json();
    })
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      alert(error.message);
    });
});

function displayWeather(data) {
  const weatherResult = document.getElementById("weather-result");
  weatherResult.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}
