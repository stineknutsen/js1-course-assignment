import { displayMessage } from "../shared/displayMessage.js";
import { getTotalPrice, confirmationButton } from "../../utils/cart.js";

export function createCartHtml(container, cart) {
  if (cart.length === 0) {
    return displayMessage(container, "warning", "Your cart is empty");
  }

  container.innerHTML = "";

  const totalItems = document.createElement("p");
  totalItems.textContent = `Total items: ${cart.length}`;
  container.append(totalItems);

  cart.forEach((cartItem) => {
    const { id, image, title, price, discountedPrice, onSale } = cartItem;

    const cartCard = document.createElement("div");
    cartCard.classList.add("cart-item");

    const filmDiv = document.createElement("div");
    filmDiv.classList.add("film");

    const imageElement = document.createElement("img");
    imageElement.src = image;

    const titleElement = document.createElement("h3");
    titleElement.textContent = title;

    const priceDiv = document.createElement("div");
    priceDiv.classList.add("price");
    const priceElement = document.createElement("p");
    priceElement.textContent = price + " kr";
    const onSaleElement = document.createElement("p");
    onSaleElement.textContent = discountedPrice + " kr";

    if (onSale === true) {
      priceDiv.append(priceElement, onSaleElement);
    } else {
      priceDiv.append(priceElement);
    }

    const removeButton = document.createElement("button");
    removeButton.classList.add("btn", "btn-remove");
    removeButton.textContent = "Remove";
    removeButton.dataset.action = "remove";
    removeButton.dataset.id = id;

    filmDiv.append(imageElement, titleElement);
    cartCard.append(filmDiv, priceDiv, removeButton);
    container.append(cartCard);
  });

  const totalPrice = document.createElement("p");
  totalPrice.classList.add("total-price");
  totalPrice.textContent = `Total price: ${getTotalPrice(cart)} kr`;
  container.append(totalPrice);

  const button = confirmationButton();
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("button-div");
  buttonDiv.append(button);
  container.append(buttonDiv);
}
