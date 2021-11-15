function displayTemperature(response) {
  console.log(response.data);
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#windSpeed").innerHTML = Math.round(
    response.data.wind.speed
  );
}

let apiKey = "16a7878dc2b4a449ac0b491099d29fe3";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=${units}`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
