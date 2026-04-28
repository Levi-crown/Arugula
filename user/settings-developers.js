(function registerSettingsDevelopersSection(global) {
  const registry = global.settingsSectionRegistry || (global.settingsSectionRegistry = {});

  registry.developers = {
    path: "./settings-developers.html",
    render(template) {
      const getAvatarStyle = (developer) => {
        if (!developer.imagePath) {
          return "";
        }

        const cssVars = [];

        if (developer.imageScale) {
          cssVars.push(`--developer-photo-scale: ${developer.imageScale};`);
        }

        if (developer.imagePosition) {
          cssVars.push(`--developer-photo-position: ${developer.imagePosition};`);
        }

        return cssVars.length ? ` style="${escapeHtml(cssVars.join(" "))}"` : "";
      };

      const developerCards = DEVELOPERS.map((developer) => `
        <article class="developer-card">
          <div class="developer-card__meta">
            <div class="developer-card__avatar ${developer.imagePath ? "developer-card__avatar--photo" : ""}"${getAvatarStyle(developer)}>
              ${
                developer.imagePath
                  ? `<img src="${escapeHtml(developer.imagePath)}" alt="${escapeHtml(developer.name)}" />`
                  : escapeHtml(developer.avatar)
              }
            </div>
            <div>
              <h4 class="section-title" style="margin: 0;">${escapeHtml(developer.name)}</h4>
              <p class="section-copy" style="color: var(--green-600); font-weight: 700;">${escapeHtml(developer.role)}</p>
              <p class="section-copy">${escapeHtml(developer.description)}</p>
            </div>
          </div>
        </article>
      `).join("");

      return replaceTemplateTokens(template, {
        DEVELOPER_CARDS: developerCards,
      });
    },
  };

  global.settingsDevelopersTemplate = function settingsDevelopersTemplate() {
    return renderExternalTemplate("developers");
  };
})(window);
