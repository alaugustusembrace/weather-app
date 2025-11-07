import "./styles.css";

// visual crossing api key
const apiKey = "8GBLZCPDW7SXFA9TVWY6FTMNU";

// visual crossing url
const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

// giphy api key
const gifApiKey = "d4n8oIq5M8fhRT0RoIztE1maJxRiuuBm";

// giphy url
const gifUrl = "https://api.giphy.com/v1/gifs/translate";

const form = document.getElementById("form");
const locationInput = document.getElementById("location");
const locationName = document.querySelector(".location-name");
const longitude = document.querySelector(".longitude");
const latitude = document.querySelector(".latitude");
const description = document.querySelector(".description");
const timezone = document.querySelector(".timezone");
const days = document.querySelector(".days");
const today = document.querySelector(".today");
const img = document.querySelector("img");

let location = "switzerland";

// today wrapper
const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  try {
    location = locationInput.value;

    if (location === "") {
      locationInput.setCustomValidity("Please input a location");
      locationInput.reportValidity(0);
      return;
    } else {
      locationInput.setCustomValidity("");
    }

    // get weather data
    async function getWeather(location) {
      let fullURL = `${url}${location}?key=${apiKey}`;

      const response = await fetch(fullURL);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    }

    // log the data
    getWeather(location).then(function (response) {
      locationName.textContent = response.address.toUpperCase();
      latitude.textContent = response.latitude;
      longitude.textContent = response.longitude;
      description.textContent = response.description;
      timezone.textContent = response.timezone;

      const daysData = response.days;

      days.innerHTML = "";
      wrapper.innerHTML = "";
      img.src = "none";
      getDays(daysData);
      getToday(daysData[0]);
      getGif(daysData[0].conditions);
    });
  } catch (error) {
    console.error(error);
  }
});

try {
  async function getWeather(location) {
    let fullURL = `${url}${location}?key=${apiKey}`;

    const response = await fetch(fullURL);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }

  // log the data
  getWeather(location).then(function (response) {
    locationName.textContent = response.address.toUpperCase();
    latitude.textContent = response.latitude;
    longitude.textContent = response.longitude;
    description.textContent = response.description;
    timezone.textContent = response.timezone;

    const daysData = response.days;

    getDays(daysData);
    getToday(daysData[0]);
    getGif(daysData[0].conditions);
  });
} catch (err) {
  console.error(err);
}

// get days arrary
function getDays(daysData) {
  for (let i = 1; i < daysData.length; i++) {
    const day = document.createElement("div");
    day.classList.add("day");

    const dateTime = document.createElement("p");
    dateTime.classList.add("dateTime");
    dateTime.textContent = daysData[i].datetime;

    const conditions = document.createElement("p");
    conditions.classList.add("conditions");
    conditions.textContent = daysData[i].conditions;

    const temp = document.createElement("p");
    temp.classList.add("temp");
    temp.textContent = "Temp: " + daysData[i].temp;

    const humidity = document.createElement("p");
    humidity.classList.add("humidity");
    humidity.textContent = "Humidity: " + daysData[i].humidity;

    day.append(dateTime, conditions, temp, humidity);

    days.appendChild(day);
  }
}

// get today's data
function getToday(dataToday) {
  const conditions = document.createElement("p");
  conditions.classList.add("conditionsToday");
  conditions.textContent = dataToday.conditions;

  const temp = document.createElement("p");
  temp.classList.add("tempToday");
  temp.textContent = "Temp: " + dataToday.temp;

  const humidity = document.createElement("p");
  humidity.classList.add("humidityToday");
  humidity.textContent = "Humidity: " + dataToday.humidity;

  wrapper.append(conditions, temp, humidity);
  today.appendChild(wrapper);
}

// get gif
async function getGif(condition) {
  const encodedCondition = encodeURIComponent(condition);

  const fullURL = `${gifUrl}?api_key=${gifApiKey}&s=${encodedCondition}`;

  const response = await fetch(fullURL);
  const json = await response.json();

  console.log(fullURL);

  img.src = json.data.images.original.url;
}
