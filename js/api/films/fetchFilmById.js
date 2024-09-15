import { squareEyesUrl } from "../../constants/api.js";

export async function fetchFilmById(filmId) {
  const url = `${squareEyesUrl}/${filmId}`;
  const response = await fetch(url);

  if (response.ok) {
    const json = await response.json();
    return json.data;
  }

  throw new Error("Failed to fetch films");
}
