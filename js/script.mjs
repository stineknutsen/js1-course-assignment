import { displayFilms } from "./eventhandlers/films/displayFilms.mjs";
import { displaySingleFilm } from "./eventhandlers/films/displaySingleFilm.mjs";
import { displayCart } from "./eventhandlers/cart/displayCart.mjs";

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
