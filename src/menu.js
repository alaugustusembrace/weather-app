import losPollosLogo from "./images/los-pollos-hermanos-logo.png";

const loadMenuPage = () => {
  const content = document.getElementById("content");
  const image = document.createElement("img");
  image.src = losPollosLogo;
  const rancheros = document.createElement("div");
  const american = document.createElement("div");
  const newMexico = document.createElement("div");
  const menuText = document.createElement("h1");
  const rancheroHeading = document.createElement("h2");
  const americanHeading = document.createElement("h2");
  const newMexicoHeading = document.createElement("h2");
  rancheros.classList.add = "rancheros";
  american.classList.add = "american";
  newMexico.classList.add = "newMexico";
  menuText.textContent = "Menu";
  rancheroHeading.textContent = "Rancheros Platters";
  americanHeading.textContent = "American Platters";
  newMexicoHeading.textContent = "New Mexico Breakfast Burritos";

  content.appendChild(image);
  content.appendChild(menuText);
  content.appendChild(rancheros.appendChild(rancheroHeading));
  content.appendChild(american.appendChild(americanHeading));
  content.appendChild(newMexico.appendChild(newMexicoHeading));
};

export { loadMenuPage };
