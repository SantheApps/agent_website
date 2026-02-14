window.SiteComponents = window.SiteComponents || {};

window.SiteComponents.hero = function hero() {
  return `
<section class="relative pt-24 pb-20 px-6 overflow-hidden">
  <div class="max-w-[1200px] mx-auto">
    <div class="max-w-[800px] mx-auto text-center">
      <h1 class="text-5xl md:text-7xl font-extrabold tracking-tighter text-foreground mb-6 leading-[1.1]">
        Give it a goal. <br/>
        <span class="text-primary/90 text-black">It finishes the job.</span>
      </h1>
      <p class="text-xl text-muted leading-relaxed mb-10 max-w-[640px] mx-auto">
        Tell it what you want done. It makes a plan, does the steps, fixes mistakes, and keeps going until it’s complete.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <button class="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:translate-y-[-2px] transition-all">
          Request a Demo
        </button>
        <button class="w-full sm:w-auto px-8 py-4 bg-white border border-input text-foreground font-bold rounded-lg hover:bg-slate-50 transition-all">
          See How It Works
        </button>
      </div>
    </div>

    <div class="relative w-full rounded-xl border border-input bg-slate-50 p-4 shadow-sm">
      <main class="flex-1 px-4 md:px-8 py-6 max-w-7xl mx-auto w-full">
        <div class="mb-8 border border-input rounded-xl p-6 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="space-y-1 text-left">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-[10px] font-bold uppercase tracking-widest text-muted bg-slate-100 px-2 py-0.5 rounded">Active Mission</span>
                <span class="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <h2 class="text-2xl font-semibold tracking-tight">Recover abandoned carts this week</h2>
              <p class="text-sm text-muted">Target: <span class="text-black font-medium">+$1,000 in 7 days</span></p>
            </div>
            <div class="flex gap-3">
              <button class="flex items-center gap-2 px-4 py-2 border border-input rounded-lg text-xs font-medium hover:bg-gray-50 transition-colors">
                <span class="material-symbols-outlined text-[18px]">pause</span>
                Pause Agent
              </button>
              <button class="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-xs font-medium hover:bg-zinc-800 transition-colors shadow-sm">
                <span class="material-symbols-outlined text-[18px]">edit</span>
                Adjust Strategy
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div class="lg:col-span-8 space-y-6">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-sm font-semibold uppercase tracking-wider text-muted">Execution Trace</h3>
              <span class="text-[10px] text-muted">Live Update: 2s ago</span>
            </div>
            <div class="border border-input rounded-xl bg-white overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
              <div class="p-8 space-y-8">
                <div class="relative flex gap-4">
                  <div class="z-10 size-[24px] rounded-full bg-black text-white flex items-center justify-center"><span class="material-symbols-outlined text-[16px]">check</span></div>
                  <div class="flex-1 -mt-0.5 text-left">
                    <div class="flex items-center justify-between">
                      <h4 class="text-sm font-semibold">Analyze</h4>
                      <span class="text-[11px] text-muted font-mono">14:02:11</span>
                    </div>
                    <p class="text-sm text-muted mt-1 leading-relaxed">Segmented 1,284 abandoned checkouts based on high intent signals.</p>
                    <div class="mt-3 flex gap-2">
                      <span class="text-[10px] border border-input px-2 py-0.5 rounded text-muted">segmentation_v2.json</span>
                      <span class="text-[10px] border border-input px-2 py-0.5 rounded text-muted">high_intent_flag</span>
                    </div>
                  </div>
                </div>
                <div class="relative flex gap-4">
                  <div class="z-10 size-[24px] rounded-full bg-black text-white flex items-center justify-center"><span class="material-symbols-outlined text-[16px]">check</span></div>
                  <div class="flex-1 -mt-0.5 text-left">
                    <div class="flex items-center justify-between">
                      <h4 class="text-sm font-semibold">Plan</h4>
                      <span class="text-[11px] text-muted font-mono">14:15:45</span>
                    </div>
                    <p class="text-sm text-muted mt-1 leading-relaxed">Wrote and scheduled 3-email win-back flow. Content tailored for mobile users.</p>
                    <div class="mt-3 bg-gray-50 border border-input rounded-lg p-3">
                      <div class="flex items-center gap-2 mb-2">
                        <span class="material-symbols-outlined text-[14px] text-muted">mail</span>
                        <span class="text-[11px] font-medium uppercase text-muted">Email Subject Drafted</span>
                      </div>
                      <p class="text-[13px] italic text-zinc-600">"We saved your items for you! Take another look before they're gone."</p>
                    </div>
                  </div>
                </div>
                <div class="relative flex gap-4">
                  <div class="z-10 size-[24px] rounded-full bg-black text-white flex items-center justify-center"><span class="material-symbols-outlined text-[16px]">check</span></div>
                  <div class="flex-1 -mt-0.5 text-left">
                    <div class="flex items-center justify-between">
                      <h4 class="text-sm font-semibold">Execute</h4>
                      <span class="text-[11px] text-muted font-mono">14:28:30</span>
                    </div>
                    <p class="text-sm text-muted mt-1 leading-relaxed">Generated dynamic discount logic and QA-tested all checkout links.</p>
                    <div class="mt-3 flex items-center gap-4">
                      <div class="flex items-center gap-1.5"><span class="size-2 rounded-full bg-emerald-500"></span><span class="text-[11px] font-medium">Links Validated</span></div>
                      <div class="flex items-center gap-1.5"><span class="size-2 rounded-full bg-emerald-500"></span><span class="text-[11px] font-medium">API 200 OK</span></div>
                    </div>
                  </div>
                </div>
                <div class="relative flex gap-4">
                  <div class="z-10 size-[24px] rounded-full border-2 border-black flex items-center justify-center bg-white"><span class="material-symbols-outlined text-[16px] animate-spin">refresh</span></div>
                  <div class="flex-1 -mt-0.5 text-left">
                    <div class="flex items-center justify-between">
                      <h4 class="text-sm font-semibold">Monitor &amp; Fix</h4>
                      <span class="text-[11px] font-medium text-black bg-zinc-100 px-2 py-0.5 rounded uppercase">In Progress</span>
                    </div>
                    <p class="text-sm text-black mt-1 leading-relaxed">Analyzing open rates and adjusting subject lines based on real-time feedback loop.</p>
                    <div class="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden"><div class="bg-black h-full w-[45%] rounded-full"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-4 space-y-6 text-left">
            <h3 class="text-sm font-semibold uppercase tracking-wider text-muted">Performance</h3>
            <div class="space-y-4">
              <div class="border border-input rounded-xl p-5 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <p class="text-xs text-muted font-medium mb-3 uppercase tracking-tight">Status</p>
                <div class="flex items-center gap-3"><span class="size-2.5 rounded-full bg-emerald-500 animate-pulse"></span><span class="text-lg font-semibold">Running</span></div>
              </div>
              <div class="border border-input rounded-xl p-5 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <div class="flex justify-between items-start mb-1"><p class="text-xs text-muted font-medium uppercase tracking-tight">Recovered Revenue</p><span class="material-symbols-outlined text-[20px] text-muted">payments</span></div>
                <div class="flex items-baseline gap-2"><span class="text-3xl font-bold font-display tracking-tight">$1,164</span><span class="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+16.4%</span></div>
              </div>
              <div class="border border-input rounded-xl p-5 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <div class="flex justify-between items-start mb-1"><p class="text-xs text-muted font-medium uppercase tracking-tight">New Orders</p><span class="material-symbols-outlined text-[20px] text-muted">shopping_bag</span></div>
                <span class="text-3xl font-bold font-display tracking-tight">42</span>
                <p class="text-[11px] text-muted mt-1">From 1,284 sessions</p>
              </div>
              <div class="border border-input rounded-xl p-5 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <div class="flex justify-between items-start mb-1"><p class="text-xs text-muted font-medium uppercase tracking-tight">Time to Launch</p><span class="material-symbols-outlined text-[20px] text-muted">timer</span></div>
                <span class="text-3xl font-bold font-display tracking-tight">38 <span class="text-lg font-medium text-muted">min</span></span>
                <p class="text-[11px] text-muted mt-1">Optimized by 14% vs avg.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</section>`;
};
