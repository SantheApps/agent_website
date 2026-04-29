class WhyMercuriSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="why-mercuri" class="border-t border-[#f0f0f0] px-6 pb-6 pt-16">
        <div class="ui-shell">
          <h2 class="text-3xl font-semibold tracking-tight text-[#111]">Why teams choose Mercuri</h2>
          <p class="ui-muted mt-3 max-w-2xl">Operator-led messaging expertise since 2021.</p>
        </div>
      </section>
    `;
  }
}
customElements.define('why-mercuri-section', WhyMercuriSection);
