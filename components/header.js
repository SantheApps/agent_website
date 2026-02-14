window.SiteComponents = window.SiteComponents || {};

window.SiteComponents.header = function header(options = {}) {
  const basePath = options.basePath || "";

  return `
<header class="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
  <div class="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
    <a class="flex items-center gap-2" href="${basePath}index.html">
      <div class="size-6 bg-foreground rounded flex items-center justify-center">
        <span class="material-symbols-outlined text-white text-[16px]">task_alt</span>
      </div>
      <span class="font-bold text-base sm:text-lg tracking-tight">Operator</span>
    </a>
    <nav class="hidden md:flex items-center gap-8">
      <a class="text-sm font-medium text-slate-500 hover:text-black transition-colors" href="#">Platform</a>
      <div class="relative group">
        <button class="text-sm font-medium text-slate-500 group-hover:text-black transition-colors flex items-center gap-1" type="button">
          Use Cases
          <span class="material-symbols-outlined text-[16px]">expand_more</span>
        </button>
        <div class="absolute left-0 top-full pt-2 hidden group-hover:block">
          <div class="w-56 bg-white border border-slate-200 rounded-md shadow-lg p-2">
            <a class="block px-3 py-2 text-sm rounded hover:bg-slate-50" href="${basePath}use-cases/outbound-campaigns.html">Outbound Campaigns</a>
            <a class="block px-3 py-2 text-sm rounded hover:bg-slate-50" href="${basePath}use-cases/support-ticket-triage.html">Support Triage</a>
            <a class="block px-3 py-2 text-sm rounded hover:bg-slate-50" href="${basePath}use-cases/weekly-reporting.html">Weekly Reporting</a>
            <a class="block px-3 py-2 text-sm rounded hover:bg-slate-50" href="${basePath}use-cases/qa-release-testing.html">QA Release Testing</a>
          </div>
        </div>
      </div>
      <a class="text-sm font-medium text-slate-500 hover:text-black transition-colors" href="#">Pricing</a>
      <a class="text-sm font-medium text-slate-500 hover:text-black transition-colors" href="#">Docs</a>
    </nav>
    <div class="hidden sm:flex items-center gap-3">
      <button class="text-sm font-medium px-4 py-2 hover:bg-slate-100 rounded-md transition-colors">Login</button>
      <button class="bg-black text-white text-sm font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-zinc-800 transition-all">
        Request a Demo
      </button>
    </div>
    <details class="sm:hidden relative">
      <summary class="list-none inline-flex items-center justify-center size-9 rounded-md border border-slate-200 cursor-pointer">
        <span class="material-symbols-outlined text-[18px]">menu</span>
      </summary>
      <div class="absolute right-0 mt-2 w-64 rounded-md border border-slate-200 bg-white shadow-lg p-2">
        <a class="block px-3 py-2 text-sm rounded hover:bg-slate-50" href="#">Platform</a>
        <a class="block px-3 py-2 text-sm rounded hover:bg-slate-50" href="${basePath}use-cases/outbound-campaigns.html">Outbound Campaigns</a>
        <a class="block px-3 py-2 text-sm rounded hover:bg-slate-50" href="${basePath}use-cases/support-ticket-triage.html">Support Triage</a>
        <a class="block px-3 py-2 text-sm rounded hover:bg-slate-50" href="${basePath}use-cases/weekly-reporting.html">Weekly Reporting</a>
        <a class="block px-3 py-2 text-sm rounded hover:bg-slate-50" href="${basePath}use-cases/qa-release-testing.html">QA Release Testing</a>
        <a class="block px-3 py-2 text-sm rounded hover:bg-slate-50" href="#">Pricing</a>
        <a class="block px-3 py-2 text-sm rounded hover:bg-slate-50" href="#">Docs</a>
      </div>
    </details>
  </div>
</header>`;
};
