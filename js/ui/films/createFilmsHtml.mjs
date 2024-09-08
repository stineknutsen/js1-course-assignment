import { createCartIcon } from "../cart/createCartIcon.mjs";

export function createFilmsHtml(container, filmsArray) {
  let parent = container;

  if (typeof container === "string") {
    parent = document.querySelector(container);
  }

  if (filmsArray.length === 0) {
    parent.innerHTML = `<p>No films found</p>`;
    return;
  }

  parent.innerHTML = "";

  filmsArray.forEach((film) => {
    const { id, image, title, price, discountedPrice, onSale } = film;

    const filmWrapper = document.createElement("div");
    filmWrapper.classList.add("film-wrapper");

    const filmCard = document.createElement("a");
    filmCard.classList.add("film");
    filmCard.href = `/product/index.html?id=${id}`;

    const imageElement = document.createElement("img");
    imageElement.src = image.url;

    const titleElement = document.createElement("h2");
    titleElement.textContent = title;

    const priceElement = document.createElement("p");
    if (onSale === true) {
      priceElement.textContent = discountedPrice + " kr";
      priceElement.classList.add("on-sale");
    } else {
      priceElement.textContent = price + " kr";
    }

    const cartIcon = createCartIcon(
      id,
      title,
      image,
      price,
      discountedPrice,
      onSale
    );

    parent.append(filmWrapper);
    filmWrapper.append(filmCard, cartIcon);
    filmCard.append(imageElement, titleElement, priceElement);
  });
}
