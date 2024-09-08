import { fetchFilms } from "../../api/films/fetchFilms.mjs";
import { displayMessage } from "../../ui/shared/displayMessage.mjs";
import { createFilmsHtml } from "../../ui/films/createFilmsHtml.mjs";
import { searchFilms } from "./filterFilms.mjs";
import { handleGenreChange } from "./handleGenreChange.mjs";
import { handleCartIconClick } from "../cart/handleCartIconClick.mjs";
import { handleCartCountDisplay } from "../cart/handleCartCountDisplay.mjs";

export async function displayFilms() {
  const container = document.querySelector("#films-container");

  try {
    const filmsArray = await fetchFilms();
    createFilmsHtml(container, filmsArray);
    searchFilms(filmsArray);
    handleGenreChange(filmsArray);
    handleCartIconClick();
    handleCartCountDisplay();
  } catch (error) {
    displayMessage(container, "error", error.message);
  }
}
