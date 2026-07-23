//required for url 6d1cf4740ef3b60f5acb10b4578892e0
//const myKeyF = "6d1cf4740ef3b60f5acb10b4578892e0";
//onst lat = "34.54";
//const lon = "-117.29";
//const myKey2 = "6d1cf474Oef3b6Of5acb1Ob4578892eO";
const todayForcast = document.querySelector('#today');
const tommorrowForcast = document.querySelector('#tommorrow');
const nextForcast = document.querySelector('#next');

const urlF = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${myKey}&units=imperial`;





async function apiFetchF() {
  try {
    const responseF = await fetch(urlF);
    if (responseF.ok) {
      const dataF = await responseF.json();
      console.log(dataF); // testing only
      displayResultsF(dataF); // uncomment when ready
    } else {
      throw Error(await responseF.text());
    }
  } catch (error) {
    console.log(error);
  }
}

  function displayResultsF(dataF) {
  console.log("hello");
  //theTown.innerHTML = dataF.name;
  //captionDesc.textContent = data.weather[0].description;
      todayForcast.innerHTML = `Today: ${dataF.list[0].main.temp}&deg;F`;
      tommorrowForcast.innerHTML = `Tommorrow: ${dataF.list[1].main.temp}&deg;F`;
      nextForcast.innerHTML = `Next Day: ${dataF.list[2].main.temp}&deg;F`;
  //theHum.innerHTML = `${ data.main.humidity }% Humidity`;
  //const myWeatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; //`https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}@2x.png`;
  //weatherIcon.setAttribute('src', myWeatherIcon);
  //weatherIcon.setAttribute('alt', data.weather[0].description);
}
apiFetchF();