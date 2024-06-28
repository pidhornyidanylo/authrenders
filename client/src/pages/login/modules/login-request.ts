import { updateFooter, updateMainContent, updateNavBar } from "../../../updaters";

export const loginUserWithCredentials = async (
  email: string,
  password: string
) => {
  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    await updateNavBar();
    await updateFooter();
    history.pushState({}, "", '/');
    await updateMainContent();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
