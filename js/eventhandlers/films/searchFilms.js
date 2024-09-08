import { createFilmsHtml } from "../../ui/films/createFilmsHtml.js";

export function searchFilms(filmsArray) {
  const searchInput = document.querySelector("#search");

  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
  }

  function handleSearch(event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const searchFilms = filmsArray.filter((film) => {
      if (film.title.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });

    createFilmsHtml("#films-container", searchFilms);
  }
}
