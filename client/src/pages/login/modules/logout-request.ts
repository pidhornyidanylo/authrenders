import { updateFooter, updateMainContent, updateNavBar } from "../../../updaters";

export const logoutUser = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    await updateNavBar();
    await updateFooter();
    await updateMainContent();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
