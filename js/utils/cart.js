const CART_KEY = "cart";

function saveToCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}

export function isIdInCart(id) {
  const cart = getCart();
  return cart.some((item) => item.id === id);
}

export function addToCart(id, title, image, price) {
  const newItem = { id, title, image, price };
  const cart = getCart();
  cart.push(newItem);
  saveToCart(cart);
}

export function removeFromCart(id) {
  const cart = getCart();
  const newCart = cart.filter((item) => item.id !== id);
  saveToCart(newCart);
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
}

export function getTotalPrice(cart) {
  let total = 0;

  cart.forEach((item) => {
    total += Number(item.price);
  });

  return total;
}

export function confirmationButton() {
  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  button.textContent = "Confirm";

  button.addEventListener("click", () => {
    clearCart();
    window.location.href = "confirmation/index.html";
  });

  return button;
}
