class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer id="contact" class="border-t border-[#f0f0f0] px-6 py-12">
        <div class="ui-shell grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p class="text-sm font-semibold text-[#111]">Mercuri</p>
            <p class="mt-3 text-sm leading-6 text-[#777]">© 2026 Mercuri. High-availability messaging implementation partners.</p>
          </div>
          <div><p class="text-sm font-medium text-[#111]">Resources</p><p class="mt-3 text-sm text-[#777]">Documentation</p></div>
          <div><p class="text-sm font-medium text-[#111]">Legal</p><p class="mt-3 text-sm text-[#777]">Terms and Privacy</p></div>
          <div><p class="text-sm font-medium text-[#111]">Contact</p><p class="mt-3 text-sm text-[#777]">karthik@getmercuri.com</p></div>
        </div>
      </footer>
    `;
  }
}
customElements.define('site-footer', SiteFooter);
