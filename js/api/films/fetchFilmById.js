import { squareEyesUrl } from "../../constants/api.js";

export async function fetchFilmById(filmId) {
  const response = await fetch(squareEyesUrl);

  if (response.ok) {
    const films = await response.json();
    const filmsArray = films.data;

    // Find the film by its id
    const singleFilm = filmsArray.find((film) => film.id === filmId);

    if (singleFilm) {
      return singleFilm;
    } else {
      throw new Error(`Film with id ${filmId} not found`);
    }
  }

  throw new Error("Failed to fetch films");
}
