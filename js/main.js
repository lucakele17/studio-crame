let totalPrice = 0;

function addToCart(product, price) {
  localStorage.setItem(product, price);
  totalPrice += price;
}

function removeFromCart(index) {
  let removableProduct = localStorage.key(index);
  localStorage.removeItem(removableProduct);
  listItems();
}

function listItems() {
  const ulElement = document.getElementById("cart");
  for (let i = 0; i < localStorage.length; i++) {
    const liElement = document.createElement("li");
    liElement.innerText = localStorage.key(i);
    ulElement.appendChild(liElement);
  }
}
