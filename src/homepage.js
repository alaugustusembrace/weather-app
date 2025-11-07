import losPollosLogo from "./images/los-pollos-hermanos-logo.png";

const loadHomePage = () => {
  const content = document.getElementById("content");
  const image = document.createElement("img");
  const headline = document.createElement("h1");
  const resMessage = document.createElement("p");
  image.src = losPollosLogo;
  headline.textContent = "Where something delicious is always cooking";
  resMessage.innerHTML =
    "<em>The finest ingredients are brought together with love and care,<br/>then slow cooked to perfection. Yes, the old ways are still best at<br/> Los Pollos Hermanos. But don't take my word for it. One taste, and<br/> you'll know.</em>";

  content.appendChild(image);
  content.appendChild(headline);
  content.appendChild(resMessage);
};

export { loadHomePage };
