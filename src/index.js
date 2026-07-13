import "./styles.css";
import loadHomepage from "./loadHomepage";
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";

console.log("index.js is running!");

const content = document.getElementById("content");

const homeTab = document.getElementById("home-tab");
const menuTab = document.getElementById("menu-tab");
const contactTab = document.getElementById("contact-tab");

const tabs = [homeTab, menuTab, contactTab];

function setActiveTab(activeTab) {
  tabs.forEach((tab) => tab.classList.remove("active"));
  activeTab.classList.add("active");
}

function renderTab(createTabContent, activeTab) {
  content.innerHTML = "";
  content.appendChild(createTabContent());
  setActiveTab(activeTab);
}

homeTab.addEventListener("click", () => renderTab(createHome, homeTab));
menuTab.addEventListener("click", () => renderTab(createMenu, menuTab));
contactTab.addEventListener("click", () => renderTab(createContact, contactTab));

// Load the homepage when the page first loads
loadHomepage();
setActiveTab(homeTab);
