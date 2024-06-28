const apikey = "fa1caf7c4cbc4ffe9a88010599d16653";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchcity = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".Wheather-icon");
async function getWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "kh/s";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "rain.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "clear.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "snow.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "drizzle.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchbtn.addEventListener("click", () => {
  getWeather(searchcity.value);
});
