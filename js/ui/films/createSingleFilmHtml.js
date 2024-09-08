import { createCartIcon } from "../cart/createCartIcon.js";

export function createSingleFilmHtml(container, film) {
  container.innerHTML = "";

  const {
    id,
    image,
    title,
    price,
    discountedPrice,
    onSale,
    rating,
    released,
    genre,
    description,
  } = film;

  const filmCard = document.createElement("div");
  filmCard.classList.add("film");

  const imageElement = document.createElement("img");
  imageElement.src = image.url;

  const titleElement = document.createElement("h2");
  titleElement.textContent = title;

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info");

  const ratingElement = document.createElement("p");
  ratingElement.textContent = rating;

  const releasedElement = document.createElement("p");
  releasedElement.textContent = released;

  const genreElement = document.createElement("p");
  genreElement.textContent = genre;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = description;

  const priceDiv = document.createElement("div");
  priceDiv.classList.add("price");
  const priceElement = document.createElement("p");
  const onSaleElement = document.createElement("p");
  if (onSale === true) {
    onSaleElement.textContent = discountedPrice + " kr";
    priceElement.textContent = price + " kr";
    priceElement.classList.add("discounted-price");
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

  container.append(imageElement, filmCard);
  filmCard.append(
    titleElement,
    infoDiv,
    descriptionElement,
    priceDiv,
    cartIcon
  );
  priceDiv.append(priceElement, onSaleElement);
  infoDiv.append(ratingElement, releasedElement, genreElement);
}
