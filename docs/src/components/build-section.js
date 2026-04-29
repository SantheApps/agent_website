class BuildSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="what-we-build" class="border-y border-[#f0f0f0] bg-[#fcfcfc] px-6 py-16">
        <div class="ui-shell">
          <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.12em] text-[#8a8a8a]">What we build for you</p>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-[#111]">Messaging systems that move revenue, support, and operations</h2>
            <p class="mt-3 text-[16px] leading-7 text-[#6f6f6f]">We design and ship production-ready WhatsApp, SMS, and AI workflows tailored to your sales cycle, support volume, and CRM setup.</p>
          </div>

          <div class="mt-9 grid gap-4 md:grid-cols-3">
            <article class="ui-card p-6 md:col-span-2 md:p-7">
              <i data-lucide="messages-square" class="mb-3 h-5 w-5 text-[#8b8b8b]"></i>
              <h3 class="text-xl font-semibold text-[#111]">WhatsApp Sales Engine</h3>
              <p class="mt-2 text-sm leading-6 text-[#717171]">Capture, qualify, and convert leads with automated reply flows, campaign broadcasts, and follow-up sequences.</p>
            </article>
            <article class="ui-card p-6 md:p-7"><i data-lucide="bot" class="mb-3 h-5 w-5 text-[#8b8b8b]"></i><h3 class="text-xl font-semibold text-[#111]">AI Support Assistant</h3><p class="mt-2 text-sm leading-6 text-[#717171]">Resolve common questions instantly, route edge cases to agents, and keep response times consistently fast.</p></article>
            <article class="ui-card p-6 md:p-7"><i data-lucide="workflow" class="mb-3 h-5 w-5 text-[#8b8b8b]"></i><h3 class="text-xl font-semibold text-[#111]">CRM-Triggered Messaging</h3><p class="mt-2 text-sm leading-6 text-[#717171]">Send the right message at the right stage using live HubSpot, Pipedrive, or Salesforce events.</p></article>
            <article class="ui-card p-6 md:col-span-2 md:p-7"><i data-lucide="layers-3" class="mb-3 h-5 w-5 text-[#8b8b8b]"></i><h3 class="text-xl font-semibold text-[#111]">End-to-End Messaging Ops</h3><p class="mt-2 text-sm leading-6 text-[#717171]">Shared inboxes, assignment rules, templates, analytics, and governance—everything needed to run messaging at scale.</p></article>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('build-section', BuildSection);
