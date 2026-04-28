function addUserModalTemplate() {
  return `
    <div class="overlay overlay--center">
      <div class="modal modal--sm">
        <div class="modal__body page-stack">
          <div class="card-head">
            <div class="inline-copy">
              <div class="spot-icon">${icon("user-plus")}</div>
              <h3 class="section-title">Add New User</h3>
            </div>
          </div>

          <div class="field-grid">
            <div class="field">
              <label class="field__label" for="new-user-name">Name</label>
              <input class="input" id="new-user-name" type="text" value="${escapeHtml(state.newUser.name)}" />
            </div>
            <div class="field">
              <label class="field__label" for="new-user-email">Email</label>
              <input class="input" id="new-user-email" type="email" value="${escapeHtml(state.newUser.email)}" />
            </div>
            <div class="field">
              <label class="field__label" for="new-user-role">Role</label>
              <select class="select" id="new-user-role">
                <option value="user" ${state.newUser.role === "user" ? "selected" : ""}>User</option>
                <option value="admin" ${state.newUser.role === "admin" ? "selected" : ""}>Administrator</option>
              </select>
            </div>
            <div class="field">
              <label class="field__label" for="new-user-password">Password</label>
              <input class="input" id="new-user-password" type="password" value="${escapeHtml(state.newUser.password)}" />
            </div>
            <div class="field">
              <label class="field__label" for="new-user-confirm-password">Confirm Password</label>
              <input
                class="input"
                id="new-user-confirm-password"
                type="password"
                value="${escapeHtml(state.newUser.confirmPassword)}"
              />
            </div>
          </div>

          <div class="add-user-otp-card">
            <div>
              <h4 class="section-title">OTP Verification</h4>
              <p class="section-copy">Enter the 6-digit code sent to the new user.</p>
            </div>
            <div class="otp-row otp-row--compact">
              ${state.newUser.otpCode
                .map((digit, index) => `
                  <input
                    class="otp-input otp-input--compact"
                    id="new-user-otp-${index}"
                    type="text"
                    inputmode="numeric"
                    maxlength="1"
                    value="${escapeHtml(digit)}"
                  />
                `)
                .join("")}
            </div>
          </div>

          <div class="modal__actions">
            <button class="button button--secondary button--full" type="button" data-action="close-add-user">
              Cancel
            </button>
            <button
              class="button button--primary button--full"
              type="button"
              data-action="submit-add-user"
              ${isNewUserFormIncomplete() ? "disabled" : ""}
            >
              Add User
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function addUser() {
  const name = state.newUser.name.trim();
  const email = state.newUser.email.trim();

  if (isNewUserFormIncomplete()) {
    return;
  }

  state.users = [
    ...state.users,
    {
      id: `user-${Date.now()}`,
      name,
      email,
      role: state.newUser.role,
    },
  ];

  state.newUser = initialNewUser();
  state.showAddUserModal = false;
  pushNotification("success", `${name} was added successfully`);
  renderPage();
  renderOverlays();
}

function deleteUser(id) {
  const user = state.users.find((item) => item.id === id);
  if (!user || user.role === "admin") {
    return;
  }

  if (!window.confirm("Are you sure you want to delete this user?")) {
    return;
  }

  state.users = state.users.filter((item) => item.id !== id);
  pushNotification("warning", `${user.name} was removed from user accounts`);
  renderPage();
}

function updateAddUserButtonState() {
  const addButton = document.querySelector('[data-action="submit-add-user"]');
  if (addButton) {
    addButton.disabled = isNewUserFormIncomplete();
  }
}

function isNewUserFormIncomplete() {
  return (
    !state.newUser.name.trim() ||
    !state.newUser.email.trim() ||
    !state.newUser.password ||
    !state.newUser.confirmPassword ||
    state.newUser.otpCode.some((digit) => !digit)
  );
}

function handleAddUserOtpInput(target) {
  const index = Number(target.id.split("-")[3]);
  const sanitized = target.value.replace(/\D/g, "").slice(0, 1);
  target.value = sanitized;
  state.newUser.otpCode[index] = sanitized;
  updateAddUserButtonState();

  if (sanitized && index < state.newUser.otpCode.length - 1) {
    const next = document.getElementById(`new-user-otp-${index + 1}`);
    next?.focus();
  }
}
