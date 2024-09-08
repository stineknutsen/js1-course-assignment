import { createFilmsHtml } from "../../ui/films/createFilmsHtml.js";

export function handleGenreChange(filmsArray) {
  const genreSelect = document.querySelector("#genre");

  if (genreSelect) {
    genreSelect.addEventListener("change", respondToGenreChange);
  }

  function respondToGenreChange(event) {
    const selectedGenre = event.target.value;

    const filteredFilms = filmsArray.filter((film) => {
      if (film.genre === selectedGenre) {
        return true;
      }
    });

    createFilmsHtml("#films-container", filteredFilms);
  }
}
