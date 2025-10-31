const flowers = [
  {
    name: "Rose",
    price: 50,
    image: "./images/download.jpg"
  },
  {
    name: "Tulip",
    price: 40,
    image: "./images/download (2).jpg"
  },
  {
    name: "Lily",
    price: 60,
    image: "./images/download (1).jpg"
  },
  {
    name: "Sunflower",
    price: 30,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg"
  }
];

const flowersDiv = document.getElementById("flowers");
const cart = document.getElementById("cart");
const totalSpan = document.getElementById("total");
let total = 0;

flowers.forEach(flower => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${flower.image}" alt="${flower.name}">
    <h4>${flower.name}</h4>
    <p>₹${flower.price}</p>
    <button onclick="addToCart('${flower.name}', ${flower.price})">Add</button>
  `;
  flowersDiv.appendChild(card);
});

function addToCart(name, price) {
  const li = document.createElement("li");
  li.textContent = `${name} - ₹${price}`;
  cart.appendChild(li);
  total += price;
  totalSpan.textContent = total;
}

function checkout() {
  alert("Thank you for your order! Total: ₹" + total);
}


