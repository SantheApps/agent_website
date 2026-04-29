class AdvantageSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="projects" class="border-y border-[#f0f0f0] bg-[#fcfcfc] px-6 py-16">
        <div class="ui-shell">
          <h2 class="text-3xl font-semibold tracking-tight text-[#111]">Projects we’ve implemented</h2>
          <p class="mt-3 max-w-3xl text-[16px] leading-7 text-[#6f6f6f]">Real products built and scaled by our team across messaging, automation, and conversion workflows.</p>
          <div class="mt-8 grid gap-4 md:grid-cols-3">
            <article class="ui-card p-6">
              <p class="text-xs font-semibold uppercase tracking-[0.12em] text-[#8a8a8a]">Project</p>
              <h3 class="mt-2 text-2xl font-semibold text-[#111]">Quizilio</h3>
              <p class="mt-2 text-sm leading-6 text-[#6f6f6f]">Interactive quiz and lead capture experiences designed to improve conversion and engagement.</p>
              <a href="https://www.quizilio.com/" target="_blank" rel="noopener noreferrer" class="mt-4 inline-block text-sm font-medium text-[#111] underline underline-offset-4">Visit quizilio.com</a>
            </article>
            <article class="ui-card p-6">
              <p class="text-xs font-semibold uppercase tracking-[0.12em] text-[#8a8a8a]">Project</p>
              <h3 class="mt-2 text-2xl font-semibold text-[#111]">Prentiz</h3>
              <p class="mt-2 text-sm leading-6 text-[#6f6f6f]">Automation-led product workflows focused on customer communication and scalable execution.</p>
              <a href="https://www.prentiz.com/" target="_blank" rel="noopener noreferrer" class="mt-4 inline-block text-sm font-medium text-[#111] underline underline-offset-4">Visit prentiz.com</a>
            </article>
            <article class="ui-card p-6">
              <p class="text-xs font-semibold uppercase tracking-[0.12em] text-[#8a8a8a]">Milestone</p>
              <h3 class="mt-2 text-2xl font-semibold text-[#111]">Santhe</h3>
              <p class="mt-2 text-sm leading-6 text-[#6f6f6f]">Built and scaled Santhe, later acquired by Distrobird — validating product, infrastructure, and execution quality.</p>
              <a href="https://www.distrobird.com/" target="_blank" rel="noopener noreferrer" class="mt-4 inline-block text-sm font-medium text-[#111] underline underline-offset-4">Acquired by Distrobird</a>
            </article>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('advantage-section', AdvantageSection);
