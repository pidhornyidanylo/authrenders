export const checkAuth = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/auth/check", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (!response.ok) {
      return false;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return false;
  }
};
