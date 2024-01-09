// script.js
document.addEventListener("DOMContentLoaded", function () {
  const weatherData = [
    {
      cityName: "London",
      uvIndex: 5,
      morning: "Partly Cloudy",
      dayAfternoon: "Sunny",
      temperature: "21°C",
      sunLogo: "path_to_sun_logo.png", // Replace with the path to your sun logo
    },
    // Add more objects for different cities or weather information
  ];

  const weatherGrid = document.getElementById("weather-grid");

  // Function to display weather boxes
  function displayWeather(data) {
    weatherGrid.innerHTML = "";
    data.forEach((item) => {
      const box = document.createElement("div");
      box.classList.add("box");

      const content = `
          <div class="box-content">
            <h2>${item.cityName}</h2>
            <p>UV Index: ${item.uvIndex}</p>
            <p>Morning: ${item.morning}</p>
            <p>Day/Afternoon: ${item.dayAfternoon}</p>
            <img class="sun-logo" src="${item.sunLogo}" alt="Sun Logo">
            <p>Temperature: ${item.temperature}</p>
          </div>
        `;

      box.innerHTML = content;
      weatherGrid.appendChild(box);
    });
  }

  // Display initial weather boxes
  displayWeather(weatherData);
});
