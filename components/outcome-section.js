window.SiteComponents = window.SiteComponents || {};

window.SiteComponents.outcomeSection = function outcomeSection() {
  return `
<section class="max-w-5xl mx-auto px-6 py-24 md:py-32">
  <div class="text-center mb-16 space-y-4">
    <span class="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-black rounded-full mb-4">A typical AI tool works like this</span>
    <h1 class="text-4xl md:text-6xl font-bold tracking-tighter leading-tight max-w-3xl mx-auto">You give it a prompt. <br/>It generates a response.<br/> It stops.</h1>
    <p class="text-muted text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">It might draft something. Suggest something. Outline something. But it doesn’t actually complete the task. And real work isn’t one step.</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="group p-8 border border-input rounded-xl bg-white transition-all hover:shadow-sm hover:border-black">
      <div class="size-10 flex items-center justify-center border border-input rounded-lg mb-6 group-hover:bg-black group-hover:text-white transition-colors"><span class="material-symbols-outlined text-xl">link_off</span></div>
      <h3 class="text-lg font-bold mb-2">Tasks break halfway</h3>
      <p class="text-muted text-sm leading-relaxed">Incomplete workflows leave gaps in production that require expensive manual intervention.</p>
    </div>
    <div class="group p-8 border border-input rounded-xl bg-white transition-all hover:shadow-sm hover:border-black">
      <div class="size-10 flex items-center justify-center border border-input rounded-lg mb-6 group-hover:bg-black group-hover:text-white transition-colors"><span class="material-symbols-outlined text-xl">error_outline</span></div>
      <h3 class="text-lg font-bold mb-2">Errors stop progress</h3>
      <p class="text-muted text-sm leading-relaxed">Technical friction and API timeouts halt the momentum of your team without warning.</p>
    </div>
    <div class="group p-8 border border-input rounded-xl bg-white transition-all hover:shadow-sm hover:border-black">
      <div class="size-10 flex items-center justify-center border border-input rounded-lg mb-6 group-hover:bg-black group-hover:text-white transition-colors"><span class="material-symbols-outlined text-xl">visibility</span></div>
      <h3 class="text-lg font-bold mb-2">Manual Checking</h3>
      <p class="text-muted text-sm leading-relaxed">Constant oversight is required to ensure quality, defeating the purpose of automation.</p>
    </div>
  </div>
</section>
<div class="w-full flex justify-center">
  <div class="h-24 w-px bg-gradient-to-b from-transparent via-slate-200 to-black"></div>
</div>
<section class="max-w-5xl mx-auto px-6 py-24 md:py-32">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
    <div class="lg:sticky lg:top-24">
      <span class="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-black rounded-full mb-6">The Difference</span>
      <h2 class="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-6">Operator takes responsibility for the outcome.</h2>
      <p class="text-muted text-lg font-light max-w-md">A systematic approach to finishing what you started. Our engine deconstructs, executes, and validates every single action.</p>
      <div class="mt-12 p-8 border border-black rounded-xl bg-zinc-50 relative overflow-hidden">
        <div class="relative z-10">
          <p class="text-xs font-bold tracking-widest uppercase mb-2">Real-time status</p>
          <div class="flex items-center gap-2 mb-4">
            <div class="size-2 rounded-full bg-green-500 animate-pulse"></div>
            <span class="text-sm font-mono text-zinc-600">Executing workflow: "Monthly Financial Audit"</span>
          </div>
          <div class="space-y-2">
            <div class="h-1 w-full bg-zinc-200 rounded-full"><div class="h-full w-3/4 bg-black rounded-full"></div></div>
            <p class="text-[10px] text-zinc-400 font-mono">STEP 04: VALIDATING RESULTS against OBJECTIVE_V1.0</p>
          </div>
        </div>
        <div class="absolute -right-8 -bottom-8 opacity-5"><span class="material-symbols-outlined text-9xl">analytics</span></div>
      </div>
    </div>
    <div class="space-y-12 relative">
      <div class="absolute left-6 top-2 bottom-2 w-px bg-slate-200 z-0"></div>
      <div class="relative z-10 pl-16">
        <div class="absolute left-0 top-0 size-12 bg-white border-2 border-black rounded-full flex items-center justify-center font-bold text-lg">1</div>
        <h4 class="text-xl font-bold mb-2">Breaks your goal into steps</h4>
        <p class="text-muted text-base leading-relaxed">Deconstructs complex objectives into actionable, logic-bound micro-tasks for maximum precision.</p>
      </div>
      <div class="relative z-10 pl-16">
        <div class="absolute left-0 top-0 size-12 bg-white border-2 border-black rounded-full flex items-center justify-center font-bold text-lg">2</div>
        <h4 class="text-xl font-bold mb-2">Executes each step</h4>
        <p class="text-muted text-base leading-relaxed">Authenticates with your tools and performs the actual work, not just planning or drafting.</p>
      </div>
      <div class="relative z-10 pl-16">
        <div class="absolute left-0 top-0 size-12 bg-white border-2 border-black rounded-full flex items-center justify-center font-bold text-lg">3</div>
        <h4 class="text-xl font-bold mb-2">Checks the result</h4>
        <p class="text-muted text-base leading-relaxed">Validates the output of every step against the original objective for accuracy and formatting.</p>
      </div>
      <div class="relative z-10 pl-16">
        <div class="absolute left-0 top-0 size-12 bg-white border-2 border-black rounded-full flex items-center justify-center font-bold text-lg">4</div>
        <h4 class="text-xl font-bold mb-2">Fixes problems if something fails</h4>
        <p class="text-muted text-base leading-relaxed">Self-healing workflows that retry and pivot when API limits, errors, or unexpected outputs occur.</p>
      </div>
      <div class="relative z-10 pl-16">
        <div class="absolute left-0 top-0 size-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
        <h4 class="text-xl font-bold mb-2">Continues until the task is complete</h4>
        <p class="text-muted text-base leading-relaxed">Persistent agents that don’t sleep until the outcome is verified, finished, and delivered.</p>
      </div>
    </div>
  </div>
</section>`;
};
