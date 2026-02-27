let totalPrice = 0;

function addToCart(product, price) {
  localStorage.setItem(product, price);
  totalPrice += price;
  listItems();
}

function removeFromCart(index) {
  let removableProduct = localStorage.key(index);
  localStorage.removeItem(removableProduct);
  listItems();
}

function listItems() {
  for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i));
  }
}
