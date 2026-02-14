window.SiteComponents = window.SiteComponents || {};

window.SiteComponents.sections = function sections() {
  return `
<section class="py-24 px-6 bg-slate-50/30 border-y border-input">
  <div class="max-w-[800px] mx-auto">
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[10px] font-bold uppercase tracking-wider mb-4 border border-input shadow-sm">Live Execution Trace</div>
      <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">Goal: Increase revenue by $1,000</h2>
      <p class="text-muted text-lg">Watch how the agent autonomously navigates from objective to outcome.</p>
    </div>
    <div class="relative space-y-0">
      <div class="absolute left-[19px] top-2 bottom-2 w-[2px] bg-slate-200"></div>
      <div class="relative flex gap-6 pb-10">
        <div class="relative z-10 size-10 rounded-full bg-foreground text-white flex items-center justify-center border-4 border-slate-50"><span class="material-symbols-outlined text-sm">analytics</span></div>
        <div class="flex-1 pt-1"><h4 class="font-bold text-foreground mb-1">1. Analyze revenue sources</h4><p class="text-sm text-muted">Analyzing current sources and recent performance data.</p></div>
      </div>
      <div class="relative flex gap-6 pb-10">
        <div class="relative z-10 size-10 rounded-full bg-foreground text-white flex items-center justify-center border-4 border-slate-50"><span class="material-symbols-outlined text-sm">explore</span></div>
        <div class="flex-1 pt-1"><h4 class="font-bold text-foreground mb-1">2. Identify fastest path</h4><p class="text-sm text-muted">Determined which levers (pricing, upsells, cart recovery) will yield the quickest results.</p></div>
      </div>
      <div class="relative flex gap-6 pb-10">
        <div class="relative z-10 size-10 rounded-full bg-foreground text-white flex items-center justify-center border-4 border-slate-50"><span class="material-symbols-outlined text-sm">edit_note</span></div>
        <div class="flex-1 pt-1"><h4 class="font-bold text-foreground mb-1">3. Create step-by-step plan</h4><p class="text-sm text-muted">Drafts a precise roadmap of assets and campaigns needed to hit the $1k target.</p></div>
      </div>
      <div class="relative flex gap-6 pb-10">
        <div class="relative z-10 size-10 rounded-full bg-foreground text-white flex items-center justify-center border-4 border-slate-50"><span class="material-symbols-outlined text-sm">rocket_launch</span></div>
        <div class="flex-1 pt-1"><h4 class="font-bold text-foreground mb-1">4. Execute Campaigns</h4><p class="text-sm text-muted">Builds landing pages, launches email sequences, and optimizes ad creative without overhead.</p></div>
      </div>
      <div class="relative flex gap-6 pb-10">
        <div class="relative z-10 size-10 rounded-full bg-foreground text-white flex items-center justify-center border-4 border-slate-50"><span class="material-symbols-outlined text-sm">monitoring</span></div>
        <div class="flex-1 pt-1"><h4 class="font-bold text-foreground mb-1">5. Monitor &amp; Adjust</h4><p class="text-sm text-muted">Tracks real-time performance and shifts budget or messaging to maximize ROI.</p></div>
      </div>
      <div class="relative flex gap-6">
        <div class="relative z-10 size-10 rounded-full bg-foreground text-white flex items-center justify-center border-4 border-slate-50"><span class="material-symbols-outlined text-sm">repeat</span></div>
        <div class="flex-1 pt-1"><h4 class="font-bold text-foreground mb-1">6. Iterate</h4><p class="text-sm text-muted">Scales what works and discards what doesn't until the goal is met.</p></div>
      </div>
    </div>
  </div>
</section>
<section class="py-24 border-y border-input bg-slate-50/30">
  <div class="max-w-[1000px] mx-auto px-6">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-4xl font-bold tracking-tight mb-6">Work starts. <br/>But it doesn’t always finish.</h2>
        <p class="text-lg text-muted mb-8">Most AI today functions as a consultant. You get advice, snippets, and ideas, but you're still the one clicking the buttons, navigating the UI, and verifying the results.</p>
        <div class="space-y-4">
          <div class="flex gap-3 items-start"><span class="material-symbols-outlined">error</span><p class="text-sm font-medium">Traditional AI gets stuck when the plan changes.</p></div>
          <div class="flex gap-3 items-start"><span class="material-symbols-outlined">error</span><p class="text-sm font-medium">Humans are required to bridge the gap between "output" and "outcome".</p></div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <div class="bg-white p-6 rounded-lg notion-border shadow-sm">
          <h3 class="font-bold mb-2">The Execution Gap</h3>
          <div class="w-full h-2 bg-slate-100 rounded-full mb-4 overflow-hidden"><div class="w-1/3 h-full bg-foreground"></div></div>
          <p class="text-xs text-muted uppercase tracking-widest font-semibold">Standard AI: 30% Completion</p>
        </div>
        <div class="bg-white p-6 rounded-lg notion-border shadow-sm border-l-4">
          <h3 class="font-bold mb-2">TaskAgentAI</h3>
          <div class="w-full h-2 bg-slate-100 rounded-full mb-4 overflow-hidden"><div class="w-full h-full bg-foreground"></div></div>
          <p class="text-xs uppercase tracking-widest font-bold">Autonomous: 100% Completion</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="py-24 px-6">
  <div class="max-w-[1200px] mx-auto">
    <div class="mb-16 text-center max-w-[700px] mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">This system doesn’t stop at advice.</h2>
      <p class="text-muted">Built for execution, not just conversation. We've automated the entire lifecycle of a task.</p>
    </div>
    <div class="grid md:grid-cols-4 gap-6">
      <div class="p-8 rounded-xl notion-border notion-card-hover transition-all group"><div class="size-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6 transition-colors"><span class="material-symbols-outlined text-foreground">account_tree</span></div><h3 class="text-lg font-bold mb-3">Goal Decomposition</h3><p class="text-sm text-muted leading-relaxed">Breaks down high-level objectives into granular, actionable sub-tasks automatically.</p></div>
      <div class="p-8 rounded-xl notion-border notion-card-hover transition-all group"><div class="size-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6 transition-colors"><span class="material-symbols-outlined text-foreground">terminal</span></div><h3 class="text-lg font-bold mb-3">Autonomous Execution</h3><p class="text-sm text-muted leading-relaxed">Uses your existing tools, APIs, and browsers to perform real work without supervision.</p></div>
      <div class="p-8 rounded-xl notion-border notion-card-hover transition-all group"><div class="size-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6 transition-colors"><span class="material-symbols-outlined text-foreground">verified</span></div><h3 class="text-lg font-bold mb-3">Result Verification</h3><p class="text-sm text-muted leading-relaxed">Cross-references every output against the original goal to ensure perfect accuracy.</p></div>
      <div class="p-8 rounded-xl notion-border notion-card-hover transition-all group"><div class="size-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6 transition-colors"><span class="material-symbols-outlined text-foreground">autorenew</span></div><h3 class="text-lg font-bold mb-3">Self-Correction</h3><p class="text-sm text-muted leading-relaxed">If a tool fails or a path is blocked, the agent reroutes and tries a new approach.</p></div>
    </div>
  </div>
</section>
<section class="py-24 px-6 bg-slate-50/50 border-t border-input">
  <div class="max-w-[1200px] mx-auto">
    <h2 class="text-3xl font-bold mb-12 text-center">Ready for any mission</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white p-6 rounded-lg notion-border shadow-sm flex flex-col items-center text-center"><div class="mb-4"><img class="grayscale" data-alt="Simple hand-drawn style icon of building blocks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsn94pLfxamiHOmIylA7Id_O4Kj4SvvZgRu19D6ytot9WIsGKkGwM5Al0tZGW50HENWHL9Akpq-3cnLRuwRf2XqVxLqpDmpWI3bSFlQnzauh8kNLeOoAp8yyOULIl1JFfb68QTjrPJ2eIFJ773QjDSdPzQ7PpQzFYvqPTXmk7iw2FxiF2_6H0QBy_GxXR7DOLqSnwra4TtUobByKSSMO9OCYnUZZSrU8bkwFHsxOLZ86q2pf-Gxr5j9cRXd8TYTsznU86jh1lWSeOl"/></div><h4 class="font-bold mb-2">Build something</h4><p class="text-xs text-muted">Spin up new environments, deploy code, or generate comprehensive technical documentation.</p></div>
      <div class="bg-white p-6 rounded-lg notion-border shadow-sm flex flex-col items-center text-center"><div class="mb-4"><img class="grayscale" data-alt="Simple hand-drawn style icon of a wrench" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjzSQgmtXFT3j4Cf3VeCD2yV-YCVTUO2JUE5qZfISvueKKtOgAR2LfrqX6-QevEyD7Caz-zJfC4YtBIchy-HGBjpC_SFoTSGkloe12G6nl_my8htVemd_giAiE0Q6lf2id-LX4HTpu4pujJCjJ70QGEV_xbp2xPBZuD0_BRmtmB0XHF320X4hOfzOfbUyVEM4Yo88a37G6ODPmaXMeL5PO20HFBDUOFl9gVrkXjoeEzPCc9sITdSXMuqFIg73Fajdhq_HrVMxPuTwL"/></div><h4 class="font-bold mb-2">Fix something</h4><p class="text-xs text-muted">Debug logs, resolve customer support tickets, or patch security vulnerabilities on the fly.</p></div>
      <div class="bg-white p-6 rounded-lg notion-border shadow-sm flex flex-col items-center text-center"><div class="mb-4"><img class="grayscale" data-alt="Simple hand-drawn style icon of a rocket" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSS5RdfPMKQJGukGKuPon3aERlUiy4kTlRC82TECjbqSqyaUzWdT6bzwaDYdJtnJ_PeHE6N74_lzcGzIDNg4c9_rWs9Xi7P7ejp5RMj4T38FTprJ_HsbEyV6wiIPqLPMsAx2tsiEiWAbNI8xXducKdcI4gqX1DQ3TxFywudF-qgZ_LJg-Ee7D1lKFdLgPc83gMYk4eU9Sj5WN0j7s8v3L13rhmG9EBFXxnqTjKH8RAQfXBgdMqfNzhJdAqAc3YfhOzWSVpvo9fzSdG"/></div><h4 class="font-bold mb-2">Run something</h4><p class="text-xs text-muted">Execute daily reports, manage social campaigns, or handle end-to-end payroll processing.</p></div>
      <div class="bg-white p-6 rounded-lg notion-border shadow-sm flex flex-col items-center text-center"><div class="mb-4"><img class="grayscale" data-alt="Simple hand-drawn style icon of a shield" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr0XXMQIPl2aaorCN3xkot1Cds7cCyeU5asIf1WpKyGm9goI_wOsTvs3RFzGsdmTkIkkP19CnLGoWKk1MyBEDix5Wd48ZMvO1RbZy7xhI01B-8o9VLU3-U_IS8RCL9Gpvuieu9Yyg0jPZEBMHxXbAuh9noUjwH71XKGcpBX92VIYFKLCsIHm970q8jUltWwhEQHHNVav3g9dRPRqnRh1dlQ03m-Ri9wj85tYr9SLs8yuISluND9zPDnAAFc11gugp8xe0ENpHbs-z9"/></div><h4 class="font-bold mb-2">Maintain something</h4><p class="text-xs text-muted">Monitor system health, update dependencies, and keep databases optimized 24/7.</p></div>
    </div>
  </div>
</section>
<section class="py-24 px-6">
  <div class="max-w-[1000px] mx-auto">
    <h2 class="text-3xl font-bold mb-16 text-center">The Path to Completion</h2>
    <div class="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4">
      <div class="flex-1 flex flex-col items-center text-center relative z-10 w-full"><div class="size-10 rounded-full bg-foreground text-white flex items-center justify-center font-bold mb-4 shadow-md">1</div><h4 class="font-bold text-sm mb-1">Goal</h4><p class="text-xs text-muted px-4">Define high-level objective</p><div class="hidden md:block absolute top-5 left-1/2 w-full h-[1px] bg-slate-200 -z-10"></div></div>
      <div class="flex-1 flex flex-col items-center text-center relative z-10 w-full"><div class="size-10 rounded-full bg-foreground text-white flex items-center justify-center font-bold mb-4 shadow-md">2</div><h4 class="font-bold text-sm mb-1">Plan</h4><p class="text-xs text-muted px-4">Logical pathing &amp; logic</p><div class="hidden md:block absolute top-5 left-1/2 w-full h-[1px] bg-slate-200 -z-10"></div></div>
      <div class="flex-1 flex flex-col items-center text-center relative z-10 w-full"><div class="size-10 rounded-full bg-foreground text-white flex items-center justify-center font-bold mb-4 shadow-md">3</div><h4 class="font-bold text-sm mb-1">Execute</h4><p class="text-xs text-muted px-4">Direct action in toolset</p><div class="hidden md:block absolute top-5 left-1/2 w-full h-[1px] bg-slate-200 -z-10"></div></div>
      <div class="flex-1 flex flex-col items-center text-center relative z-10 w-full"><div class="size-10 rounded-full bg-foreground text-white flex items-center justify-center font-bold mb-4 shadow-md">4</div><h4 class="font-bold text-sm mb-1">Correct</h4><p class="text-xs text-muted px-4">Real-time troubleshooting</p><div class="hidden md:block absolute top-5 left-1/2 w-full h-[1px] bg-slate-200 -z-10"></div></div>
      <div class="flex-1 flex flex-col items-center text-center relative z-10 w-full"><div class="size-10 rounded-full bg-foreground text-white flex items-center justify-center font-bold mb-4 shadow-md">5</div><h4 class="font-bold text-sm mb-1">Finish</h4><p class="text-xs text-muted px-4">Verified final output</p></div>
    </div>
  </div>
</section>
<section class="py-24 px-6">
  <div class="max-w-[1000px] mx-auto">
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-wider mb-4 border border-input">Case Study 02</div>
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">Goal: Reduce the customer support backlog by 50% within 14 days.</h2>
      <p class="text-muted max-w-[600px] mx-auto">Automating high-volume support tasks to free up human agents for complex issues.</p>
    </div>
    <div class="grid md:grid-cols-5 gap-4">
      <div class="p-6 rounded-xl notion-border bg-white text-center"><div class="size-10 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4"><span class="material-symbols-outlined text-sm">search</span></div><h4 class="font-bold mb-2 text-[13px]">Analyze tickets</h4><p class="text-[11px] text-muted">Scans 1,000+ open tickets for common patterns.</p></div>
      <div class="p-6 rounded-xl notion-border bg-white text-center"><div class="size-10 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4"><span class="material-symbols-outlined text-sm">category</span></div><h4 class="font-bold mb-2 text-[13px]">Group &amp; Prioritize</h4><p class="text-[11px] text-muted">Categorizes by urgency and technical complexity.</p></div>
      <div class="p-6 rounded-xl notion-border bg-white text-center"><div class="size-10 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4"><span class="material-symbols-outlined text-sm">precision_manufacturing</span></div><h4 class="font-bold mb-2 text-[13px]">Identify Fixes</h4><p class="text-[11px] text-muted">Spots candidates for automated standard responses.</p></div>
      <div class="p-6 rounded-xl notion-border bg-white text-center"><div class="size-10 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4"><span class="material-symbols-outlined text-sm">bolt</span></div><h4 class="font-bold mb-2 text-[13px]">Execute Action</h4><p class="text-[11px] text-muted">Deploys auto-resolutions and backend patches.</p></div>
      <div class="p-6 rounded-xl notion-border bg-white text-center"><div class="size-10 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4"><span class="material-symbols-outlined text-sm">query_stats</span></div><h4 class="font-bold mb-2 text-[13px]">Track &amp; Adjust</h4><p class="text-[11px] text-muted">Monitors CSAT to ensure quality remains high.</p></div>
    </div>
  </div>
</section>
<section class="py-24 px-6 border-y border-input">
  <div class="max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
    <div><span class="material-symbols-outlined mb-4">bolt</span><h4 class="font-bold mb-2">Reduce work</h4><p class="text-sm text-muted">Slash operational overhead by automating repetitive manual workflows entirely.</p></div>
    <div><span class="material-symbols-outlined mb-4">speed</span><h4 class="font-bold mb-2">Faster resolution</h4><p class="text-sm text-muted">Complete tasks in minutes that used to take hours of manual effort and coordination.</p></div>
    <div><span class="material-symbols-outlined mb-4">verified_user</span><h4 class="font-bold mb-2">Reliability</h4><p class="text-sm text-muted">Eliminate human error with a system that verifies its own work against your requirements.</p></div>
    <div><span class="material-symbols-outlined mb-4">psychology</span><h4 class="font-bold mb-2">High-value focus</h4><p class="text-sm text-muted">Free your team to focus on strategy while the agents handle the tactical execution.</p></div>
  </div>
</section>
<section class="py-32 px-6">
  <div class="max-w-[800px] mx-auto notion-border rounded-2xl p-12 text-center shadow-xl shadow-slate-200/50 bg-white">
    <h2 class="text-4xl font-extrabold tracking-tight mb-6">AI shouldn’t just respond. <br/><span>It should complete the work.</span></h2>
    <p class="text-lg text-muted mb-10">Join 500+ forward-thinking teams using TaskAgentAI to automate their most complex workflows.</p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <button class="w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary/90 transition-all">Request a Demo</button>
      <button class="w-full sm:w-auto px-10 py-4 bg-white border border-input text-foreground font-bold rounded-lg hover:bg-slate-50 transition-all">View Documentation</button>
    </div>
  </div>
</section>`;
};
