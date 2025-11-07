import losPollosLogo from "./images/los-pollos-hermanos-logo.png";

const loadAboutPage = () => {
  const content = document.getElementById("content");
  const image = document.createElement("img");
  image.src = losPollosLogo;
  const aboutText = document.createElement("h1");
  const aboutDescCont = document.createElement("div");
  const aboutDesc = document.createElement("p");
  aboutDesc.classList.add = "aboutDescCont";
  aboutText.textContent = "About";
  aboutDesc.innerHTML =
    "Los Pollos Hermanos is a beloved fast-food restaurant chain known for its delicious fried chicken and warm<br/> family atmosphere. Founded by Gustavo Fring and his business partner Max Arciniega, the restaurant grew<br/> to fourteen locations across the southwestern United States. The name, which means <em>“The Chicken Brothers”</em><br/> in Spanish, reflects the spirit of family and togetherness that defines the brand.";

  content.appendChild(image);
  content.appendChild(aboutText);
  aboutDescCont.appendChild(aboutDesc);
  content.appendChild(aboutDescCont);
};

export { loadAboutPage };
