class StatsSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="px-6 pb-14 pt-10 sm:pb-16 sm:pt-12">
        <div class="ui-shell">
          <div class="grid gap-x-8 gap-y-8 py-2 sm:grid-cols-2 lg:grid-cols-4">
            ${[
              ['7,000+', 'Stores powered by Santhe'],
              ['2021', 'Year we started'],
              ['Millions', 'Messages processed'],
              ['Weeks', 'Typical launch window']
            ]
              .map(
                ([v, l], i) =>
                  `<article class="${i < 3 ? 'lg:border-r lg:border-[#f0f0f0] lg:pr-8' : ''}"><p class="text-5xl font-semibold leading-none tracking-tight text-[#111]">${v}</p><p class="mt-3 text-sm text-[#777]">${l}</p></article>`
              )
              .join('')}
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('stats-section', StatsSection);
