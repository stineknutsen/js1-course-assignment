import { fetchFilms } from "../../api/films/fetchFilms.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { createFilmsHtml } from "../../ui/films/createFilmsHtml.js";
import { searchFilms } from "./filterFilms.js";
import { handleGenreChange } from "./handleGenreChange.js";
import { handleCartIconClick } from "../cart/handleCartIconClick.js";
import { handleCartCountDisplay } from "../cart/handleCartCountDisplay.js";

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
