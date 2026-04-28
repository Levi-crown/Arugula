(function registerSettingsProfileSection(global) {
  const registry = global.settingsSectionRegistry || (global.settingsSectionRegistry = {});

  registry.profile = {
    path: "./settings-profile.html",
    render(template) {
      return replaceTemplateTokens(template, {
        PROFILE_INITIAL: escapeHtml((state.profileName.trim() || "J").charAt(0).toUpperCase()),
        CAMERA_ICON: icon("camera"),
        PHOTO_BUTTON_LABEL: state.profilePhotoDataUrl ? "Change Photo" : "Upload Photo",
        PROFILE_NAME: escapeHtml(state.profileName),
        PROFILE_ROLE: escapeHtml(DEFAULT_PROFILE_ROLE),
        PROFILE_ROLE_BADGE: `<span class="role-badge">${icon("shield", "icon")}${escapeHtml(DEFAULT_PROFILE_ROLE)}</span>`,
        LOCK_ICON: icon("lock"),
        CURRENT_PASSWORD: escapeHtml(state.currentPassword),
        NEW_PASSWORD: escapeHtml(state.newPassword),
        CHANGE_PASSWORD_DISABLED: !state.currentPassword || !state.newPassword ? "disabled" : "",
      });
    },
  };

  global.settingsProfileTemplate = function settingsProfileTemplate() {
    return renderExternalTemplate("profile");
  };
})(window);
