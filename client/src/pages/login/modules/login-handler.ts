import { loginUserWithCredentials } from "./login-request";

export const loginHandler = (container: HTMLDivElement) => {
  container.innerHTML = `
    <h3>Login</h3>
    <form id="login-form">
        <div>
            <label>Email</label>
            <input 
                id="login-email" 
                type="email" 
                required 
            />
        </div>
        <div>
            <label>Password</label>
            <input 
                id="login-password" type="password" 
                required 
            />
        </div>
        <button id="submit-btn" type='submit'>Login</button>
    </form>
    `;

  const form = container.querySelector<HTMLFormElement>("#login-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const emailInputElement =
        container.querySelector<HTMLInputElement>("#login-email");
      const passwordInputElement =
        container.querySelector<HTMLInputElement>("#login-password");
      if (emailInputElement && passwordInputElement) {
        loginUserWithCredentials(
          emailInputElement.value,
          passwordInputElement.value
        );
        emailInputElement.value = '';
        passwordInputElement.value = '';
      }
    });
  } else {
    console.error("Login form element not found");
  }
};
function udateFooter() {
  throw new Error("Function not implemented.");
}

