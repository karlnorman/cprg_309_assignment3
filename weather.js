document.addEventListener("DOMContentLoaded", function () {
  async function fetchWeather() {
    const temperatureElement = document.getElementById("temperature");
    const weatherIcon = document.querySelector(".weather-icon");

    if (!temperatureElement || !weatherIcon) return;

    const lon = -86.83;
    const lat = 21.16;
    const apiKey = "ae70f83319c13cd1aeda2775a76201e8";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      if (data.main) {
        const temperature = Math.round(data.main.temp);
        temperatureElement.textContent = `${temperature}°C`;
      } else {
        throw new Error("Temperature data not found");
      }

      const weatherCondition = data.weather[0].main.toLowerCase();
      const weatherIconCode = data.weather[0].icon;

      let iconClass = "fa-sun";

      if (weatherCondition.includes("cloud")) {
        if (
          weatherCondition.includes("scattered") ||
          weatherIconCode.includes("02")
        ) {
          iconClass = "fa-cloud-sun";
        } else {
          iconClass = "fa-cloud";
        }
      } else if (
        weatherCondition.includes("rain") ||
        weatherIconCode.includes("09") ||
        weatherIconCode.includes("10")
      ) {
        iconClass = "fa-cloud-rain";
      } else if (
        weatherCondition.includes("thunder") ||
        weatherIconCode.includes("11")
      ) {
        iconClass = "fa-bolt";
      } else if (
        weatherCondition.includes("snow") ||
        weatherIconCode.includes("13")
      ) {
        iconClass = "fa-snowflake";
      } else if (
        weatherCondition.includes("mist") ||
        weatherCondition.includes("fog") ||
        weatherCondition.includes("haze") ||
        weatherIconCode.includes("50")
      ) {
        iconClass = "fa-smog";
      } else if (
        weatherCondition.includes("clear") ||
        weatherIconCode.includes("01")
      ) {
        const isNight = weatherIconCode.includes("n");
        iconClass = isNight ? "fa-moon" : "fa-sun";
      }

      weatherIcon.className = "";
      weatherIcon.classList.add("fas", iconClass, "weather-icon");
    } catch (error) {
      console.error("Error fetching weather data:", error);
      temperatureElement.textContent = "28°C";
      weatherIcon.className = "";
      weatherIcon.classList.add("fas", "fa-sun", "weather-icon");
    }
  }

  fetchWeather();
  setInterval(fetchWeather, 30 * 60 * 1000);
});
