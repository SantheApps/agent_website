class HeroSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="px-6 pb-14 pt-14 sm:pt-20">
        <div class="ui-shell grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <span class="mb-5 inline-flex rounded-full border border-[#eaeaea] px-3 py-1 text-xs text-[#777]">Messaging infrastructure for high-growth teams</span>
            <h1 class="text-4xl font-semibold leading-tight tracking-tight text-[#101010] sm:text-5xl">
              We help you Build WhatsApp, SMS, and AI messaging systems that scale.
            </h1>
            <p class="ui-muted mt-5 max-w-xl text-[17px] leading-7">
              Launch production-ready messaging infrastructure with CRM integrations, automation flows, and AI assistants.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a href="https://calendly.com/karthikmanjunath/30min" target="_blank" rel="noopener noreferrer" class="ui-button ui-button-primary h-10 px-5 text-sm">Book A Call</a>
              <button class="ui-button ui-button-ghost h-10 px-5 text-sm">View solutions</button>
            </div>
          </div>

          <div class="flex items-center justify-center py-4 sm:py-8 lg:justify-end">
            <div class="relative h-[560px] w-[300px] sm:h-[620px] sm:w-[330px] rounded-[3rem] bg-[#111] p-[8px] shadow-[0_26px_70px_rgba(0,0,0,0.22)]">
              <div class="absolute left-[-2px] top-[72px] h-8 w-[3px] rounded-full bg-[#2a2a2a]"></div>
              <div class="absolute left-[-2px] top-[116px] h-10 w-[3px] rounded-full bg-[#2a2a2a]"></div>
              <div class="absolute right-[-2px] top-[98px] h-14 w-[3px] rounded-full bg-[#2a2a2a]"></div>

              <div class="relative flex h-full flex-col overflow-hidden rounded-[2.6rem] border border-[#2a2a2a] bg-white">
                <div class="absolute left-1/2 top-2.5 z-20 h-6 w-32 -translate-x-1/2 rounded-full bg-black"></div>

                <div class="border-b border-[#f1f1f1] bg-[#fcfcfc] px-5 pb-3 pt-3">
                  <div class="flex items-center justify-between text-[10px] text-[#8b8b8b]">
                    <span>9:41</span>
                    <span>5G</span>
                  </div>
                  <div class="mt-4 flex items-center gap-2.5">
                    <div class="h-8 w-8 rounded-full bg-[#111] text-center text-[11px] leading-8 text-white">M</div>
                    <div>
                      <p class="text-[12px] font-semibold text-[#222]">Mercuri Support</p>
                      <p class="text-[10px] text-[#8b8b8b]">Typically replies in minutes</p>
                    </div>
                  </div>
                </div>

                <div class="flex flex-1 flex-col justify-end bg-[#fafafa] px-4 py-5">
                  <div class="space-y-4 text-[12px]">
                    <div>
                      <div class="max-w-[86%] rounded-2xl rounded-bl-md bg-[#eceef0] px-3 py-2 text-[#3f3f46]">
                        Hi, can I get pricing for WhatsApp automation?
                      </div>
                    </div>
                    <div>
                      <div class="ml-auto max-w-[86%] rounded-2xl rounded-br-md bg-[#111] px-3 py-2 text-white">
                        Absolutely. We can go live in 2-3 weeks with CRM sync.
                      </div>
                      <p class="mt-1 text-right px-1 text-[10px] text-[#9a9a9a]">9:43 AM</p>
                    </div>
                    <div>
                      <div class="max-w-[86%] rounded-2xl rounded-bl-md bg-[#eceef0] px-3 py-2 text-[#3f3f46]">
                        Great. Can your team handle onboarding too?
                      </div>
                    </div>
                    <div>
                      <div class="ml-auto max-w-[86%] rounded-2xl rounded-br-md bg-[#111] px-3 py-2 text-white">
                        Yes, full setup, templates, and support included.
                      </div>
                    </div>
                  </div>
                </div>

                <div class="border-t border-[#f1f1f1] bg-white px-4 py-3">
                  <div class="flex items-center gap-2 rounded-full border border-[#e6e6e6] bg-[#fafafa] px-3 py-2.5 text-[11px] text-[#9a9a9a]">
                    <i data-lucide="smile" class="h-4 w-4"></i>
                    Type a message...
                    <i data-lucide="send" class="ml-auto h-4 w-4"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    `;
  }
}
customElements.define('hero-section', HeroSection);
