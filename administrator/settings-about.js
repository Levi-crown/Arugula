(function registerSettingsAboutSection(global) {
  const registry = global.settingsSectionRegistry || (global.settingsSectionRegistry = {});

  registry.about = {
    path: "./settings-about.html",
    render(template) {
      return replaceTemplateTokens(template, {
        LOGO_PATH,
        SARATE_LOGO_PATH,
      });
    },
  };

  global.settingsAboutTemplate = function settingsAboutTemplate() {
    return renderExternalTemplate("about");
  };
})(window);
