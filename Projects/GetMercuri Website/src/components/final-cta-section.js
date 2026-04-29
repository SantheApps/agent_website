class FinalCtaSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="px-6 py-16 reveal">
        <div class="ui-shell ui-card p-8 text-center sm:p-10">
          <h2 class="text-3xl font-semibold tracking-tight text-[#111]">Need a custom messaging platform?</h2>
          <p class="mx-auto mt-3 max-w-2xl text-[16px] leading-7 text-[#6f6f6f]">If your product relies on WhatsApp or SMS workflows, we can design and implement the infrastructure end-to-end.</p>
          <a href="https://calendly.com/karthikmanjunath/30min" target="_blank" rel="noopener noreferrer" class="ui-button ui-button-primary mt-7 h-10 px-6 text-sm">Book A Call</a>
        </div>
      </section>
    `;
  }
}
customElements.define('final-cta-section', FinalCtaSection);
