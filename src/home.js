function createHome() {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("hero");

  const image = document.createElement("img");
  image.classList.add("hero-image");
  image.src =
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80";
  image.alt = "Cozy restaurant dining room";

  const heading = document.createElement("h2");
  heading.textContent = "Welcome to La Bella Notte";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Nestled in the heart of the city, La Bella Notte has been serving " +
    "handmade pasta, wood-fired pizza, and warm hospitality since 2005. " +
    "Every dish is made with fresh, locally-sourced ingredients and a " +
    "whole lot of love. Come sit with us for a night to remember.";

  homeDiv.appendChild(image);
  homeDiv.appendChild(heading);
  homeDiv.appendChild(paragraph);

  return homeDiv;
}

export default createHome;
