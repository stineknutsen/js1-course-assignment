import { getCart } from "../../utils/cart.js";
import { createCartHtml } from "../../ui/cart/createCartHtml.js";
import { handleRemoveButtons } from "./handleRemoveButtons.js";
import { handleCartCountDisplay } from "./handleCartCountDisplay.js";

export function displayCart() {
  const cart = getCart();
  const container = document.querySelector("#cart-container");
  createCartHtml(container, cart);
  handleRemoveButtons();
  handleCartCountDisplay();
}
