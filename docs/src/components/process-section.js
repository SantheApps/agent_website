class ProcessSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="speed-execution" class="border-y border-[#f0f0f0] px-6 py-16">
        <div class="ui-shell">
          <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.12em] text-[#8a8a8a]">Speed of execution</p>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-[#111]">Launch faster using Mercuri as your base platform</h2>
            <p class="mt-3 text-[16px] leading-7 text-[#6f6f6f]">
              Instead of building everything from scratch, we implement on top of the Mercuri SaaS app so your team ships production messaging systems in weeks with battle-tested modules already in place.
            </p>
          </div>

          <div class="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article class="ui-card p-6">
              <i data-lucide="plug-zap" class="mb-3 h-5 w-5 text-[#8b8b8b]"></i>
              <h3 class="text-lg font-semibold text-[#111]">Out-of-box integrations</h3>
              <p class="mt-2 text-sm leading-6 text-[#6f6f6f]">Shopify, Wix, and HubSpot are ready to connect from day one.</p>
            </article>
            <article class="ui-card p-6">
              <i data-lucide="message-square-share" class="mb-3 h-5 w-5 text-[#8b8b8b]"></i>
              <h3 class="text-lg font-semibold text-[#111]">Messaging channels pre-wired</h3>
              <p class="mt-2 text-sm leading-6 text-[#6f6f6f]">Twilio, Telnyx, and WhatsApp Business API are already integrated.</p>
            </article>
            <article class="ui-card p-6">
              <i data-lucide="brain-circuit" class="mb-3 h-5 w-5 text-[#8b8b8b]"></i>
              <h3 class="text-lg font-semibold text-[#111]">AI Agent Builder (RAG)</h3>
              <p class="mt-2 text-sm leading-6 text-[#6f6f6f]">Deploy retrieval-backed AI agents for support, qualification, and workflows.</p>
            </article>
            <article class="ui-card p-6">
              <i data-lucide="users" class="mb-3 h-5 w-5 text-[#8b8b8b]"></i>
              <h3 class="text-lg font-semibold text-[#111]">Shared Inbox collaboration</h3>
              <p class="mt-2 text-sm leading-6 text-[#6f6f6f]">Route, assign, and manage conversations across your team in one workspace.</p>
            </article>
            <article class="ui-card p-6 md:col-span-2 lg:col-span-2">
              <i data-lucide="megaphone" class="mb-3 h-5 w-5 text-[#8b8b8b]"></i>
              <h3 class="text-lg font-semibold text-[#111]">Built-in marketing stack</h3>
              <p class="mt-2 text-sm leading-6 text-[#6f6f6f]">Run broadcasts, automations, re-engagement, and campaign journeys without stitching extra tools.</p>
            </article>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('process-section', ProcessSection);
