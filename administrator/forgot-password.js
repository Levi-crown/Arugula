(function registerForgotPasswordFlow(global) {
  const templatePaths = {
    "forgot-email": "./forgot-password-email.html",
    "forgot-otp": "./forgot-password-otp.html",
    verified: "./forgot-password-verified.html",
    "reset-password": "./forgot-password-reset.html",
  };

  const viewContent = {
    "forgot-email": {
      title: "Forgot Password",
      copy: "Enter your email address to receive your 6-digit verification code.",
    },
    "forgot-otp": {
      title: "OTP Verification",
      copy: "Type the 6-digit OTP sent to your email to continue resetting your password.",
    },
    verified: {
      title: "Verified",
      copy: "Your email has been verified successfully. You can now create a new password.",
    },
    "reset-password": {
      title: "Create New Password",
      copy: "Set your new password below. After saving, you will return to the login form.",
    },
  };

  const templateCache = new Map();

  global.forgotPasswordFlow = {
    preload,
    isForgotPasswordView,
    getViewContent,
    render,
    handleAction,
    handleSubmit,
    handleInput,
    handleKeyDown,
  };

  function isForgotPasswordView(view) {
    return Object.prototype.hasOwnProperty.call(templatePaths, view);
  }

  function getViewContent(view) {
    return viewContent[view] || viewContent["forgot-email"];
  }

  async function preload() {
    await Promise.all(
      Object.entries(templatePaths).map(async ([view, path]) => {
        const template = await readTemplate(path);
        if (template) {
          templateCache.set(view, template);
        }
      }),
    );
  }

  function render(state, helpers) {
    const template = getTemplate(state.view);
    if (!template) {
      return `
        <div class="login-feedback" role="status">
          Unable to load the forgot password form right now.
        </div>
      `;
    }

    switch (state.view) {
      case "forgot-email":
        return replaceTokens(template, {
          NOTICE: helpers.getNoticeMarkup(state.notice),
          RECOVERY_EMAIL: helpers.escapeHtml(state.recoveryEmail),
        });
      case "forgot-otp":
        return replaceTokens(template, {
          NOTICE: helpers.getNoticeMarkup(state.notice),
          RECOVERY_EMAIL: helpers.escapeHtml(state.recoveryEmail),
          OTP_INPUTS: state.otp
            .map(
              (digit, index) => `
                <input
                  class="otp-input"
                  id="forgot-otp-${index}"
                  type="text"
                  inputmode="numeric"
                  maxlength="1"
                  value="${helpers.escapeHtml(digit)}"
                />
              `,
            )
            .join(""),
        });
      case "verified":
        return replaceTokens(template, {
          NOTICE: helpers.getNoticeMarkup(state.notice),
          RECOVERY_EMAIL: helpers.escapeHtml(state.recoveryEmail),
        });
      case "reset-password":
        return replaceTokens(template, {
          NOTICE: helpers.getNoticeMarkup(state.notice),
          NEW_PASSWORD: helpers.escapeHtml(state.newPassword),
          CONFIRM_PASSWORD: helpers.escapeHtml(state.confirmPassword),
        });
      default:
        return "";
    }
  }

  function handleAction(action, state, helpers) {
    switch (action) {
      case "open-forgot-password":
        if (state.view !== "login") {
          return false;
        }
        state.recoveryEmail = state.loginEmail.trim();
        state.notice = "";
        state.view = "forgot-email";
        helpers.render();
        return true;
      case "back-to-login":
        restoreLoginView(state, helpers);
        return true;
      case "back-to-email":
        state.notice = "";
        state.view = "forgot-email";
        helpers.render();
        return true;
      case "back-to-otp":
        state.notice = "";
        state.view = "forgot-otp";
        helpers.render();
        return true;
      case "back-to-verified":
        state.notice = "";
        state.view = "verified";
        helpers.render();
        return true;
      case "go-to-reset-password":
        state.notice = "";
        state.view = "reset-password";
        helpers.render();
        return true;
      default:
        return false;
    }
  }

  function handleSubmit(formId, state, helpers) {
    switch (formId) {
      case "forgot-email-form":
        submitRecoveryEmail(state, helpers);
        return true;
      case "forgot-otp-form":
        submitOtp(state, helpers);
        return true;
      case "reset-password-form":
        submitResetPassword(state, helpers);
        return true;
      default:
        return false;
    }
  }

  function handleInput(target, state, helpers) {
    switch (target.id) {
      case "recovery-email":
        state.recoveryEmail = target.value;
        return true;
      case "reset-password":
        state.newPassword = target.value;
        return true;
      case "confirm-password":
        state.confirmPassword = target.value;
        return true;
      default:
        break;
    }

    if (/^forgot-otp-\d$/.test(target.id)) {
      const index = Number(target.id.split("-")[2]);
      const value = target.value.replace(/\D/g, "").slice(0, 1);
      target.value = value;
      state.otp[index] = value;

      if (value && index < state.otp.length - 1) {
        const next = document.getElementById(`forgot-otp-${index + 1}`);
        next?.focus();
      }
      return true;
    }

    return false;
  }

  function handleKeyDown(event, state) {
    const target = event.target;
    if (!(target instanceof HTMLInputElement) || !/^forgot-otp-\d$/.test(target.id)) {
      return false;
    }

    const index = Number(target.id.split("-")[2]);
    if (event.key === "Backspace" && !target.value && index > 0) {
      const previous = document.getElementById(`forgot-otp-${index - 1}`);
      previous?.focus();
    }

    return true;
  }

  function submitRecoveryEmail(state, helpers) {
    if (!state.recoveryEmail.trim()) {
      state.notice = "Please enter your email first.";
      helpers.render();
      return;
    }

    state.notice = "";
    state.otp = ["", "", "", "", "", ""];
    state.view = "forgot-otp";
    helpers.render();
  }

  function submitOtp(state, helpers) {
    if (state.otp.some((digit) => !digit)) {
      state.notice = "Please complete the 6-digit OTP.";
      helpers.render();
      return;
    }

    state.notice = "";
    state.view = "verified";
    helpers.render();
  }

  function submitResetPassword(state, helpers) {
    if (!state.newPassword || !state.confirmPassword) {
      state.notice = "Please enter and confirm your new password.";
      helpers.render();
      return;
    }

    if (state.newPassword !== state.confirmPassword) {
      state.notice = "Passwords do not match.";
      helpers.render();
      return;
    }

    state.loginEmail = state.recoveryEmail;
    state.loginPassword = "";
    state.notice = "Password updated successfully. You can log in now.";
    restoreLoginView(state, helpers, true);
  }

  function restoreLoginView(state, helpers, keepNotice = false) {
    state.view = "login";
    state.recoveryEmail = "";
    state.otp = ["", "", "", "", "", ""];
    state.newPassword = "";
    state.confirmPassword = "";
    if (!keepNotice) {
      state.notice = "";
    }
    helpers.render();
  }

  async function readTemplate(path) {
    try {
      const response = await fetch(path, { cache: "no-store" });
      if (response.ok) {
        return await response.text();
      }
    } catch (error) {
      const fallback = readTemplateSync(path);
      if (fallback) {
        return fallback;
      }
      console.warn(`Unable to fetch forgot password template: ${path}`, error);
    }

    return "";
  }

  function getTemplate(view) {
    const cached = templateCache.get(view);
    if (cached) {
      return cached;
    }

    const template = readTemplateSync(templatePaths[view]);
    if (template) {
      templateCache.set(view, template);
    }
    return template;
  }

  function readTemplateSync(path) {
    try {
      const request = new XMLHttpRequest();
      request.open("GET", path, false);
      request.send(null);

      if ((request.status >= 200 && request.status < 300) || request.status === 0) {
        return request.responseText;
      }
    } catch (error) {
      console.warn(`Unable to synchronously load forgot password template: ${path}`, error);
    }

    return "";
  }

  function replaceTokens(template, tokens) {
    return Object.entries(tokens).reduce(
      (markup, [token, value]) => markup.replaceAll(`{{${token}}}`, value ?? ""),
      template,
    );
  }
})(window);
