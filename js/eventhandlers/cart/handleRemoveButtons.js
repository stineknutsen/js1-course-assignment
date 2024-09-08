import { removeFromCart } from "../../utils/cart.js";
import { displayCart } from "./displayCart.js";

export function handleRemoveButtons() {
  const removeButtons = document.querySelectorAll(
    "button[data-action = 'remove']"
  );

  removeButtons.forEach((removeButton) => {
    const { id } = removeButton.dataset;
    removeButton.addEventListener("click", () => {
      removeFromCart(id);
      displayCart();
    });
  });
}
