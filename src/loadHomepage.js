import createHome from "./home";

function loadHomepage() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.appendChild(createHome());
}

export default loadHomepage;
