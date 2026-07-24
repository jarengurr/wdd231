
//required for url 6d1cf4740ef3b60f5acb10b4578892e0
const myKey = "6d1cf4740ef3b60f5acb10b4578892e0";
const lat = "34.536217";
const lon = "-117.292763";
const myKey2 = "6d1cf474Oef3b6Of5acb1Ob4578892eO";
const currentTemp = document.querySelector('#current-temp');
const theTown = document.querySelector('#town');
const weatherIcon = document.querySelector('#symbol');
const captionDesc = document.querySelector('figcaption');
const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=imperial`;


const theHum = document.querySelector('#hum');

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}
function displayResults(data) {
  console.log("hello");
  theTown.innerHTML = data.name;
  captionDesc.textContent = data.weather[0].description;
  currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;F`;
  theHum.innerHTML = `${ data.main.humidity }% Humidity`;
  const myWeatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; //`https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}@2x.png`;
  weatherIcon.setAttribute('src', myWeatherIcon);
  weatherIcon.setAttribute('alt', data.weather[0].description);
}
apiFetch();

