import { logoutUser } from "../pages/login/modules/logout-request";
import { updateMainContent } from "../updaters";

export const handleNavBar = (header: HTMLElement, isAuth: boolean) => {
  if (isAuth) {
    header.innerHTML = `
            <nav class="navbar-nav">
                <ul class="navbar-list">
                    <li><a class="nav-link" href="/">Home</a></li>
                    <li><a class="nav-link" href="/about">About</a></li>
                    <li><a class="nav-link" href="/blog">Blog</a></li>
                    <li><a class="nav-link" href="/secure">Secure</a></li>
                    <li><a id="logout-link" href="#">Logout</a></li>
                </ul>
            </nav>
        `;
  } else {
    header.innerHTML = `
        <nav class="navbar-nav">
            <ul class="navbar-list">
                <li><a class="nav-link" href="/">Home</a></li>
                <li><a class="nav-link" href="/about">About</a></li>
                <li><a class="nav-link" href="/blog">Blog</a></li>
                <li><a class="nav-link" href="/login">Login</a></li>
            </ul>
        </nav>
    `;
  }

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const href = (event.target as HTMLAnchorElement).getAttribute("href");
      if (href) {
        history.pushState({}, "", href);
        updateMainContent();
      }        
    });
  });

  const logoutLink = document.querySelector<HTMLLinkElement>("#logout-link");
  if (logoutLink) {
    logoutLink.addEventListener("click", async (e) => {
      e.preventDefault();
      logoutUser();
    });
  }
};
