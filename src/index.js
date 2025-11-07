import "./styles.css";

const apiKey = "8GBLZCPDW7SXFA9TVWY6FTMNU";
const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
// let location = "cebu city";

const form = document.getElementById("form");
const locationInput = document.getElementById("location");
const locationName = document.querySelector(".location-name");
const longitude = document.querySelector(".longitude");
const latitude = document.querySelector(".latitude");
const description = document.querySelector(".description");
const timezone = document.querySelector(".timezone");
const days = document.querySelector(".days");

let location = "switzerland";

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
    });
  } catch (error) {
    console.error(error);
  }
});

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
  console.log(daysData);
});

function getDays(daysData) {
  for (let i = 1; i < daysData.length; i++) {
    const day = document.createElement("div");
    const dateTime = document.createElement("p");
    const temp = document.createElement("p");
    const humidity = document.createElement("p");
  }
}
