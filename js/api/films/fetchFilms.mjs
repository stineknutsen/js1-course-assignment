import { squareEyesUrl } from "../../constants/api.mjs";

export async function fetchFilms() {
  const response = await fetch(squareEyesUrl);

  if (response.ok) {
    const films = await response.json();
    const filmsArray = films.data;
    return filmsArray;
  }

  throw new Error("Failed to fetch films");
}
