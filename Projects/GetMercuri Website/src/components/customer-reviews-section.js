class CustomerReviewsSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="customer-reviews" class="border-b border-[#f0f0f0] px-6 py-16">
        <div class="ui-shell">
          <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.12em] text-[#8a8a8a]">Customer reviews</p>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-[#111]">What teams say after launching with Mercuri</h2>
          </div>

          <div class="mt-8">
            <article class="ui-card w-full p-8 sm:p-10">
              <div class="grid items-center gap-8 md:grid-cols-[1fr_220px] lg:grid-cols-[1fr_240px]">
                <div>
                  <div class="mb-4 flex text-[#f5a524]">
                    <i data-lucide="star" class="h-5 w-5 fill-current"></i>
                    <i data-lucide="star" class="h-5 w-5 fill-current"></i>
                    <i data-lucide="star" class="h-5 w-5 fill-current"></i>
                    <i data-lucide="star" class="h-5 w-5 fill-current"></i>
                    <i data-lucide="star" class="h-5 w-5 fill-current"></i>
                  </div>
                  <p class="text-lg leading-8 text-[#3f3f3f]">“We moved from patchwork tools to one reliable messaging workflow. Setup was fast, our team adopted it immediately, and our campaign execution became measurable week over week.”</p>
                  <p class="mt-6 text-sm font-semibold text-[#111]">Growth Lead</p>
                  <p class="text-xs text-[#8a8a8a]">D2C brand, Shopify</p>
                </div>
                <div class="mx-auto md:justify-self-end">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=360&q=80"
                    alt="Customer portrait"
                    class="h-44 w-44 rounded-2xl object-cover border border-[#ececec] lg:h-48 lg:w-48"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('customer-reviews-section', CustomerReviewsSection);
