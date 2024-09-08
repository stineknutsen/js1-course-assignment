import { getCart } from "../../utils/cart.mjs";
import { createCartHtml } from "../../ui/cart/createCartHtml.mjs";
import { handleRemoveButtons } from "./handleRemoveButtons.mjs";
import { handleCartCountDisplay } from "./handleCartCountDisplay.mjs";

export function displayCart() {
  const cart = getCart();
  const container = document.querySelector("#cart-container");
  createCartHtml(container, cart);
  handleRemoveButtons();
  handleCartCountDisplay();
}
