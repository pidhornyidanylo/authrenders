import { home, blog, about, login, secure } from "./pages/index";

export type Route = {
  linkLabel: string;
  content: string | ((id: string) => string);
};

export const publicRoutes: { [key: string]: Route } = {
  "/": {
    linkLabel: "Home",
    content: home,
  },
  "/about": {
    linkLabel: "About",
    content: about,
  },
  "/login": {
    linkLabel: "Login",
    content: login,
  },
  "/blog": {
    linkLabel: "Blog",
    content: blog,
  }
};

export const secureRoutes: { [key: string]: Route } = {
  "/": {
    linkLabel: "Home",
    content: home,
  },
  "/about": {
    linkLabel: "About",
    content: about,
  },
  "/blog": {
    linkLabel: "Blog",
    content: blog,
  },
  "/secure": {
    linkLabel: "Secure",
    content: secure,
  },
};
