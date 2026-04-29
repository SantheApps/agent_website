class FounderSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="border-y border-[#f0f0f0] px-6 py-16">
        <div class="ui-shell ui-card p-8">
          <h2 class="text-3xl font-semibold tracking-tight text-[#111]">Built by SaaS founders</h2>
          <p class="mt-4 max-w-3xl text-[16px] leading-7 text-[#6f6f6f]">Mercuri is built by operators who have launched and scaled messaging-first SaaS products. You get architecture decisions shaped by production experience, not theory.</p>
        </div>
      </section>
    `;
  }
}
customElements.define('founder-section', FounderSection);
