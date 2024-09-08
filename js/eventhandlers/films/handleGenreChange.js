import { createFilmsHtml } from "../../ui/films/createFilmsHtml.js";
import { handleCartIconClick } from "../cart/handleCartIconClick.js";

export function handleGenreChange(filmsArray) {
  const genreSelect = document.querySelector("#genre");

  if (genreSelect) {
    genreSelect.addEventListener("change", respondToGenreChange);
  }

  function respondToGenreChange(event) {
    const selectedGenre = event.target.value;
    let filteredFilms;

    if (selectedGenre) {
      filteredFilms = filmsArray.filter((film) => film.genre === selectedGenre);
    } else {
      filteredFilms = filmsArray;
    }

    createFilmsHtml("#films-container", filteredFilms);
    handleCartIconClick();
  }
}
