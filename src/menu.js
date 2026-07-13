function createMenu() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-section");

  const heading = document.createElement("h2");
  heading.textContent = "Our Menu";
  menuDiv.appendChild(heading);

  const items = [
    { name: "Margherita Pizza", price: "$14" },
    { name: "Fettuccine Alfredo", price: "$16" },
    { name: "Truffle Risotto", price: "$19" },
    { name: "Grilled Branzino", price: "$24" },
    { name: "Tiramisu", price: "$8" },
  ];

  const list = document.createElement("ul");
  list.classList.add("menu-list");

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("menu-item");

    const name = document.createElement("span");
    name.textContent = item.name;

    const price = document.createElement("span");
    price.classList.add("price");
    price.textContent = item.price;

    listItem.appendChild(name);
    listItem.appendChild(price);
    list.appendChild(listItem);
  });

  menuDiv.appendChild(list);

  return menuDiv;
}

export default createMenu;
