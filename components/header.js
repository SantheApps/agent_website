window.SiteComponents = window.SiteComponents || {};

window.SiteComponents.header = function header() {
  return `
<header class="sticky top-0 z-50 w-full border-b border-input bg-background-light/80 backdrop-blur-md">
  <div class="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <div class="size-6 bg-foreground rounded flex items-center justify-center">
        <span class="material-symbols-outlined text-white text-[16px]">task_alt</span>
      </div>
      <span class="font-bold text-lg tracking-tight">Operator</span>
    </div>
    <nav class="hidden md:flex items-center gap-8">
      <a class="text-sm font-medium text-muted hover:text-foreground transition-colors" href="#">Platform</a>
      <div class="relative group">
        <button class="text-sm font-medium text-muted group-hover:text-foreground transition-colors flex items-center gap-1" type="button">
          Use Cases
          <span class="material-symbols-outlined text-[16px]">expand_more</span>
        </button>
        <div class="absolute left-0 top-full pt-2 hidden group-hover:block">
          <div class="w-56 bg-white border border-input rounded-md shadow-lg p-2">
            <a class="block px-3 py-2 text-sm rounded hover:bg-slate-50" href="./use-cases/outbound-campaigns.html">Outbound Campaigns</a>
            <a class="block px-3 py-2 text-sm rounded hover:bg-slate-50" href="./use-cases/support-ticket-triage.html">Support Triage</a>
            <a class="block px-3 py-2 text-sm rounded hover:bg-slate-50" href="./use-cases/weekly-reporting.html">Weekly Reporting</a>
            <a class="block px-3 py-2 text-sm rounded hover:bg-slate-50" href="./use-cases/qa-release-testing.html">QA Release Testing</a>
          </div>
        </div>
      </div>
      <a class="text-sm font-medium text-muted hover:text-foreground transition-colors" href="#">Pricing</a>
      <a class="text-sm font-medium text-muted hover:text-foreground transition-colors" href="#">Docs</a>
    </nav>
    <div class="flex items-center gap-3">
      <button class="text-sm font-medium px-4 py-2 hover:bg-slate-100 rounded-md transition-colors">Login</button>
      <button class="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-primary/90 transition-all">
        Request a Demo
      </button>
    </div>
  </div>
</header>`;
};
