import {
  container,
  weatherBox,
  weatherDetails,
  error404,
} from "./selectores.js";

const APIKey = "3c1e3dc8702f8cf9ead56d845c4431c9";

export const getWeather = () => {
  const city = document.querySelector(".search-box input").value;

  if (city == "") {
    return;
  }
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === "404") {
        container.style.height = "400px";
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        error404.style.display = "block";
        error404.classList.add("fadeIn");
        return;
      }

      error404.style.display = "none";
      error404.classList.remove("fadeIn");
      weatherBox.style.visibility = "visible";

      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      console.log();
      const wind = document.querySelector(".weather-details .wind span");
      image.src = `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
      console.log(json.weather[0].main);
      switch (json.weather[0].main) {
        case "Clear":
          weatherBox.style.background ="linear-gradient(60deg, #00bd56 10%, #f9fd50 100%)";
          break;
        case "Rain":
          weatherBox.style.background ="linear-gradient(60deg, #335d6e 10%, #99bdda 100%)";
          break;
        case "Snow":
          weatherBox.style.background ="linear-gradient(60deg, #dbeef0 10%, #577475 100%)";
          break;
        case "Clouds":
          weatherBox.style.background ="linear-gradient(60deg, #5f6080 10%, #81919e 100%)";
          break;
        case "Haze":
          weatherBox.style.background ="linear-gradient(60deg, #bcbccf 10%, #613d68 100%)";
          break;
        case "Mist":
          weatherBox.style.background ="linear-gradient(60deg, #bcbccfce 10%, #1a9a9e80 100%)";
          break;
        case "broken":
            weatherBox.style.background ="linear-gradient(60deg, #bcbccfce 10%, #1a9a9e80 100%)";
        break;
        default:
          weatherBox.style.background = "linear-gradient(60deg, #bcbccfce 10%, #1a9a9e80 100%)";
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)} Km/h`;

      weatherBox.style.display = "";
      weatherDetails.style.display = "";
      weatherBox.classList.add("fadeIn");
      weatherDetails.classList.add("fadeIn");
      container.style.height = "590px";
    })
    .catch((e) => {
      console.log(e);
    });
};
