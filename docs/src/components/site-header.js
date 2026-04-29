class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="sticky top-0 z-50 border-b border-[#f0f0f0] bg-white/90 backdrop-blur">
        <div class="ui-shell flex items-center justify-between px-6 py-4">
          <div class="flex items-center gap-2 text-[17px] font-semibold tracking-tight text-[#111]">
            <i data-lucide="message-square" class="h-4 w-4 text-[#8a8a8a]"></i>
            Mercuri
          </div>
          <div class="hidden gap-8 text-sm md:flex">
            <a href="#why-mercuri" class="ui-link">Why Mercuri</a>
            <a href="#what-we-build" class="ui-link">What We Build</a>
            <a href="#projects" class="ui-link">Projects</a>
            <a href="#speed-execution" class="ui-link">Speed</a>
            <a href="#customer-reviews" class="ui-link">Reviews</a>
          </div>
          <div class="hidden md:block">
            <a href="https://calendly.com/karthikmanjunath/30min" target="_blank" rel="noopener noreferrer" class="ui-button ui-button-primary h-9 px-4 text-sm">Book a call</a>
          </div>
          <button id="menu-toggle" aria-label="Toggle menu" class="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#ececec] text-[#111] md:hidden">
            <i data-lucide="menu" class="h-4 w-4"></i>
          </button>
        </div>
        <div id="mobile-menu" class="ui-shell hidden px-6 pb-4 md:hidden">
          <div class="ui-card p-3">
            <div class="flex flex-col gap-2 text-sm">
              <a href="#why-mercuri" class="ui-link rounded-md px-2 py-2">Why Mercuri</a>
              <a href="#what-we-build" class="ui-link rounded-md px-2 py-2">What We Build</a>
              <a href="#projects" class="ui-link rounded-md px-2 py-2">Projects</a>
              <a href="#speed-execution" class="ui-link rounded-md px-2 py-2">Speed</a>
              <a href="#customer-reviews" class="ui-link rounded-md px-2 py-2">Reviews</a>
              <a href="https://calendly.com/karthikmanjunath/30min" target="_blank" rel="noopener noreferrer" class="ui-button ui-button-primary mt-1 h-9 px-4 text-sm">Book a call</a>
            </div>
          </div>
        </div>
      </nav>
    `;

    const toggle = this.querySelector('#menu-toggle');
    const mobileMenu = this.querySelector('#mobile-menu');
    toggle?.addEventListener('click', () => mobileMenu?.classList.toggle('hidden'));
    this.querySelectorAll('#mobile-menu a[href^="#"]').forEach((link) => {
      link.addEventListener('click', () => mobileMenu?.classList.add('hidden'));
    });
  }
}
customElements.define('site-header', SiteHeader);
