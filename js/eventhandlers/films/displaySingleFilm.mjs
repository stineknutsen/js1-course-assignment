import { fetchFilmById } from "../../api/films/fetchFilmById.mjs";
import { createSingleFilmHtml } from "../../ui/films/createSingleFilmHtml.mjs";
import { displayMessage } from "../../ui/shared/displayMessage.mjs";
import { getQueryParam } from "../../utils/getParam.mjs";
import { handleCartCountDisplay } from "../cart/handleCartCountDisplay.mjs";
import { handleCartIconClick } from "../cart/handleCartIconClick.mjs";

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
