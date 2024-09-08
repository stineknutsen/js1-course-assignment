import { removeFromCart } from "../../utils/cart.mjs";
import { displayCart } from "./displayCart.mjs";

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
