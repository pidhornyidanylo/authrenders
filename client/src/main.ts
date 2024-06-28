import { updateLogin, updateMainContent, updateNavBar, updateFooter } from "./updaters";
import "./style.css";

export const renderApp = () => {
  document.querySelector("#app")!.innerHTML = `
      <header id="header"></header>
      <main id="main"></main>
      <footer id="footer"></footer>
  `;
};

renderApp();

document.addEventListener("DOMContentLoaded", () => {
  updateNavBar();
  updateMainContent();
  updateLogin();
  updateFooter();
});
