window.SiteComponents = window.SiteComponents || {};

window.SiteComponents.footer = function footer(options = {}) {
  const basePath = options.basePath || "";

  return `
<footer class="py-12 px-6 border-t border-slate-200">
  <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
    <div class="flex items-center gap-2">
      <div class="size-5 bg-foreground rounded flex items-center justify-center">
        <span class="material-symbols-outlined text-white text-[12px]">task_alt</span>
      </div>
      <span class="font-bold text-md tracking-tight">Operator</span>
    </div>
    <div class="flex gap-8">
      <a class="text-xs font-medium text-slate-500 hover:text-black" href="${basePath}index.html">Privacy Policy</a>
      <a class="text-xs font-medium text-slate-500 hover:text-black" href="${basePath}index.html">Terms of Service</a>
      <a class="text-xs font-medium text-slate-500 hover:text-black" href="${basePath}index.html">Status</a>
      <a class="text-xs font-medium text-slate-500 hover:text-black" href="${basePath}index.html">Contact</a>
    </div>
    <p class="text-xs text-slate-500">© 2024 Operator Inc. All rights reserved.</p>
  </div>
</footer>`;
};
