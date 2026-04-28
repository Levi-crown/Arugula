document.addEventListener("DOMContentLoaded", () => {
  const authKey = "arugula.isAuthenticated";
  const postLoginHashKey = "arugula.postLoginHash";
  const forgotPasswordFlow = window.forgotPasswordFlow;

  const elements = {
    title: document.getElementById("auth-title"),
    copy: document.getElementById("auth-copy"),
    body: document.getElementById("auth-panel-body"),
  };

  const state = {
    view: "login",
    loginEmail: "",
    loginPassword: "",
    recoveryEmail: "",
    otp: ["", "", "", "", "", ""],
    newPassword: "",
    confirmPassword: "",
    notice: "",
  };

  const loginViewContent = {
    title: "Login to ArCuGreen",
    copy: "Access your farm dashboard and monitoring controls.",
  };

  const helpers = {
    render,
    escapeHtml,
    getNoticeMarkup,
  };

  elements.body?.addEventListener("click", handleClick);
  elements.body?.addEventListener("submit", handleSubmit);
  elements.body?.addEventListener("input", handleInput);
  elements.body?.addEventListener("keydown", handleKeyDown);

  forgotPasswordFlow?.preload?.();
  render();

  function render() {
    const content = getCurrentViewContent();
    if (elements.title) {
      elements.title.textContent = content.title;
    }
    if (elements.copy) {
      elements.copy.textContent = content.copy;
    }
    if (elements.body) {
      elements.body.innerHTML = renderView();
      syncPasswordToggleButtons(elements.body);
    }
  }

  function getCurrentViewContent() {
    if (forgotPasswordFlow?.isForgotPasswordView?.(state.view)) {
      return forgotPasswordFlow.getViewContent(state.view);
    }

    return loginViewContent;
  }

  function renderView() {
    if (forgotPasswordFlow?.isForgotPasswordView?.(state.view)) {
      return forgotPasswordFlow.render(state, helpers);
    }

    return `
      ${getNoticeMarkup(state.notice)}
      <form class="login-form" id="login-form" novalidate>
        <label class="login-field" for="login-email">
          <span>Email</span>
          <input
            id="login-email"
            type="email"
            placeholder="Enter your email"
            value="${escapeHtml(state.loginEmail)}"
          />
        </label>

        <label class="login-field" for="login-password">
          <span>Password</span>
          <div class="login-field__control">
            <input
              id="login-password"
              type="password"
              placeholder="Enter your password"
              value="${escapeHtml(state.loginPassword)}"
            />
            ${passwordToggleButtonMarkup("login-password")}
          </div>
        </label>

        <div class="login-actions">
          <button class="login-link" type="button" data-action="open-forgot-password">
            Forgot Password?
          </button>
        </div>

        <button class="login-button" type="submit" data-action="submit-login">Login</button>
      </form>
    `;
  }

  function handleClick(event) {
    const button = event.target.closest("[data-action]");
    if (!button) {
      return;
    }

    if (button.dataset.action === "toggle-password-visibility") {
      event.preventDefault();
      togglePasswordVisibility(button.dataset.target);
      return;
    }

    if (button.dataset.action === "submit-login" && button.closest("#login-form")) {
      event.preventDefault();
      submitLogin();
      return;
    }

    if (forgotPasswordFlow?.handleAction?.(button.dataset.action, state, helpers)) {
      return;
    }
  }

  function handleSubmit(event) {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) {
      return;
    }

    event.preventDefault();

    if (forgotPasswordFlow?.handleSubmit?.(form.id, state, helpers)) {
      return;
    }

    if (form.id === "login-form") {
      submitLogin();
    }
  }

  function handleInput(event) {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) {
      return;
    }

    if (forgotPasswordFlow?.handleInput?.(target, state, helpers)) {
      return;
    }

    switch (target.id) {
      case "login-email":
        state.loginEmail = target.value;
        return;
      case "login-password":
        state.loginPassword = target.value;
        return;
      default:
        return;
    }
  }

  function handleKeyDown(event) {
    if (forgotPasswordFlow?.handleKeyDown?.(event, state, helpers)) {
      return;
    }
  }

  function submitLogin() {
    if (!state.loginEmail.trim() || !state.loginPassword) {
      state.notice = "Please enter your email and password.";
      render();
      return;
    }

    const nextHash = window.sessionStorage.getItem(postLoginHashKey) || "#/";
    window.sessionStorage.setItem(authKey, "true");
    window.sessionStorage.removeItem(postLoginHashKey);
    window.location.href = `./index.html${nextHash}`;
  }

  function getNoticeMarkup(notice) {
    return notice
      ? `<div class="login-feedback" role="status">${escapeHtml(notice)}</div>`
      : "";
  }

  function passwordToggleButtonMarkup(targetId) {
    return `
      <button
        class="login-password-toggle"
        type="button"
        data-action="toggle-password-visibility"
        data-target="${targetId}"
        aria-label="Show password"
      >
        <span class="login-password-toggle__icon" data-password-icon aria-hidden="true"></span>
      </button>
    `;
  }

  function togglePasswordVisibility(targetId) {
    if (!targetId) {
      return;
    }

    const input = document.getElementById(targetId);
    if (!(input instanceof HTMLInputElement)) {
      return;
    }

    input.type = input.type === "password" ? "text" : "password";
    syncPasswordToggleButtons(elements.body);
    input.focus({ preventScroll: true });
    const valueLength = input.value.length;
    if (typeof input.setSelectionRange === "function") {
      input.setSelectionRange(valueLength, valueLength);
    }
  }

  function syncPasswordToggleButtons(root = elements.body) {
    if (!(root instanceof HTMLElement)) {
      return;
    }

    root.querySelectorAll("[data-action='toggle-password-visibility']").forEach((button) => {
      if (!(button instanceof HTMLButtonElement)) {
        return;
      }

      const targetId = button.dataset.target;
      const input = targetId ? document.getElementById(targetId) : null;
      if (!(input instanceof HTMLInputElement)) {
        return;
      }

      const visible = input.type === "text";
      button.setAttribute("aria-label", visible ? "Hide password" : "Show password");
      const iconSlot = button.querySelector("[data-password-icon]");
      if (iconSlot) {
        iconSlot.innerHTML = authIconMarkup(visible ? "eye" : "eye-off");
      }
    });
  }

  function authIconMarkup(name) {
    const paths = {
      eye: `
        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `,
      "eye-off": `
        <path d="m3 3 18 18"></path>
        <path d="M10.58 10.58a2 2 0 0 0 2.83 2.83"></path>
        <path d="M9.88 5.08A10.94 10.94 0 0 1 12 5c6 0 10 7 10 7a18.74 18.74 0 0 1-3.04 3.81"></path>
        <path d="M6.61 6.61A18.7 18.7 0 0 0 2 12s4 7 10 7a9.76 9.76 0 0 0 5.39-1.61"></path>
      `,
    };

    return `
      <svg
        class="auth-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        ${paths[name] || paths.eye}
      </svg>
    `;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }
});
