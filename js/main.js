function addToCart(product, price) {
  localStorage.setItem(product, price);
}

function removeFromCart(index) {
  let removableProduct = localStorage.key(index);
  localStorage.removeItem(removableProduct);
  listItems();
}

function listItems() {
  const ulElement = document.getElementById("cart");

  ulElement.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const liElement = document.createElement("li");
    liElement.innerHTML = `
      <span class="product-name">${localStorage.key(i)}</span>
      <button class="remove-button" id="${i}">Remove</button>
    `;
    ulElement.appendChild(liElement);
  }

  showTotalPrice();
}

function showTotalPrice() {
  const priceElement = document.getElementById("total-price");
  let totalPrice = 0;

  for (let i = 0; i < localStorage.length; i++) {
    totalPrice += Number(localStorage.getItem(localStorage.key(i)));
  }

  priceElement.innerText = "Total price: " + totalPrice + " SEK";
}

document.getElementById("cart").addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-button")) {
    const index = e.target.getAttribute("id");
    removeFromCart(index);
  }
});
