(function renderApp() {
  const mount = document.getElementById("app");
  const c = window.SiteComponents || {};

  if (!mount) {
    return;
  }

  if (!c.header || !c.hero || !c.outcomeSection || !c.sections || !c.footer) {
    mount.innerHTML = '<div class="p-6 text-sm text-muted">Component load error.</div>';
    return;
  }

  mount.innerHTML = `
    ${c.header()}
    <main>
      ${c.hero()}
      ${c.outcomeSection()}
      <div class="max-w-5xl mx-auto px-6">
        <div class="border-t border-input"></div>
      </div>
      ${c.sections()}
    </main>
    ${c.footer()}
  `;
})();
