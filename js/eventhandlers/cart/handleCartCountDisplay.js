import { getCart } from "../../utils/cart.js";

export function handleCartCountDisplay() {
  const cartCount = document.querySelector("#cart-count");
  const cart = getCart();

  if (cart.length === 0) {
    cartCount.style.display = "none";
  } else {
    cartCount.style.display = "flex";
    cartCount.textContent = cart.length;
  }
}
