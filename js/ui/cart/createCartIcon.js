import { isIdInCart } from "../../utils/cart.js";

export function createCartIcon(
  id,
  title,
  image,
  price,
  discountedPrice,
  onSale
) {
  const cartIcon = document.createElement("i");
  cartIcon.classList.add("fa-solid");
  cartIcon.dataset.action = "cart";
  cartIcon.id = "cart-icon";
  cartIcon.dataset.id = id;
  cartIcon.dataset.title = title;
  cartIcon.dataset.image = image.url;
  if (onSale === true) {
    cartIcon.dataset.price = discountedPrice;
  } else {
    cartIcon.dataset.price = price;
  }

  if (isIdInCart(id)) {
    cartIcon.classList.add("fa-trash");
  } else {
    cartIcon.classList.add("fa-cart-plus");
  }

  return cartIcon;
}
