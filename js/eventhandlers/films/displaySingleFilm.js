import { fetchFilmById } from "../../api/films/fetchFilmById.js";
import { createSingleFilmHtml } from "../../ui/films/createSingleFilmHtml.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { getQueryParam } from "../../utils/getParam.js";
import { handleCartCountDisplay } from "../cart/handleCartCountDisplay.js";
import { handleCartIconClick } from "../cart/handleCartIconClick.js";

export async function displaySingleFilm() {
  const id = getQueryParam("id");

  if (!id) {
    window.location.href = "/";
  }

  const container = document.querySelector("#film-detail");

  try {
    const film = await fetchFilmById(id);
    createSingleFilmHtml(container, film);
    handleCartIconClick();
    handleCartCountDisplay();
  } catch (error) {
    displayMessage(container, "error", error.message);
  }
}
