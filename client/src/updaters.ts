import { checkAuth } from "./helpers/check-auth";
import { handleFooter } from "./main-ui-fragments-handlers/footer-handler";
import { handleMain } from "./main-ui-fragments-handlers/main-handler";
import { handleNavBar } from "./main-ui-fragments-handlers/navbar-handler";
import { loginHandler } from "./pages/login/modules/login-handler";

export const updateNavBar = async () => {
  const auth = await checkAuth();
  handleNavBar(
    document.querySelector<HTMLElement>("#header")!,
    auth.authenticated
  );
};

export const updateMainContent = async () => {
  const auth = await checkAuth();
  handleMain(document.querySelector<HTMLElement>("#main")!, auth.authenticated);
  updateLogin();
};

export const updateLogin = () => {
  const loginContainer =
    document.querySelector<HTMLDivElement>("#login-container");
  if (loginContainer) {
    loginHandler(loginContainer);
  }
};

export const updateFooter = async () => {
  const auth = await checkAuth();
  handleFooter(
    document.querySelector<HTMLElement>("#footer")!,
    auth.authenticated
  );
};
