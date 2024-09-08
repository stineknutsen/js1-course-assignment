import { displayFilms } from "./eventhandlers/films/displayFilms.js";
import { displaySingleFilm } from "./eventhandlers/films/displaySingleFilm.js";
import { displayCart } from "./eventhandlers/cart/displayCart.js";

function router() {
  const { pathname } = window.location;

  switch (pathname) {
    case "/":
    case "/index.html":
      displayFilms();
      break;
    case "/product/index.html":
      displaySingleFilm();
      break;
    case "/checkout/index.html":
      displayCart();
      break;
  }
}

router();
