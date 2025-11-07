import { loadHomePage } from "./homepage.js";
import { loadMenuPage } from "./menu.js";
import { loadAboutPage } from "./about.js";

const menu = document.getElementById("menu");
const home = document.getElementById("home");
const about = document.getElementById("about");
const content = document.getElementById("content");

loadHomePage();

home.addEventListener("click", () => {
  content.innerHTML = "";
  loadHomePage();
});

menu.addEventListener("click", () => {
  content.innerHTML = "";
  loadMenuPage();
});

about.addEventListener("click", () => {
  content.innerHTML = "";
  loadAboutPage();
});
