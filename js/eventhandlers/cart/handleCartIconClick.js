import { addToCart, isIdInCart, removeFromCart } from "../../utils/cart.js";
import { handleCartCountDisplay } from "./handleCartCountDisplay.js";

export function handleCartIconClick() {
  const cartIcons = document.querySelectorAll("i[data-action='cart']");

  cartIcons.forEach((cartIcon) => {
    cartIcon.addEventListener("click", respondToCartIconClick);

    function respondToCartIconClick(event) {
      const cartIcon = event.target;

      const { id, title, image, price } = cartIcon.dataset;

      if (isIdInCart(id)) {
        removeFromCart(id);
        cartIcon.classList.add("fa-cart-plus");
        cartIcon.classList.remove("fa-trash");
      } else {
        addToCart(id, title, image, price);
        cartIcon.classList.remove("fa-cart-plus");
        cartIcon.classList.add("fa-trash");
      }

      handleCartCountDisplay();
    }
  });
}
