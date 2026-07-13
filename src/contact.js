function createContact() {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-section");

  const heading = document.createElement("h2");
  heading.textContent = "Visit Us";

  const address = document.createElement("p");
  address.textContent = "123 Trattoria Lane, Downtown";

  const phone = document.createElement("p");
  phone.textContent = "Phone: (555) 123-4567";

  const hours = document.createElement("p");
  hours.textContent = "Open Tuesday - Sunday, 5pm - 11pm";

  const email = document.createElement("p");
  email.textContent = "Email: hello@labellanotte.example";

  contactDiv.appendChild(heading);
  contactDiv.appendChild(address);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(hours);
  contactDiv.appendChild(email);

  return contactDiv;
}

export default createContact;
