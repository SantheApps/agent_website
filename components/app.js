(function renderApp() {
  const mount = document.getElementById("app");
  const c = window.SiteComponents || {};

  if (!mount) {
    return;
  }

  if (!c.header || !c.hero || !c.sections || !c.footer) {
    mount.innerHTML = '<div class="p-6 text-sm text-muted">Component load error.</div>';
    return;
  }

  mount.innerHTML = `
    ${c.header()}
    <main>
      ${c.hero()}
      ${c.sections()}
    </main>
    ${c.footer()}
  `;
})();
