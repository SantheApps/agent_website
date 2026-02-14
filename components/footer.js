window.SiteComponents = window.SiteComponents || {};

window.SiteComponents.footer = function footer() {
  return `
<footer class="py-12 px-6 border-t border-input">
  <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
    <div class="flex items-center gap-2">
      <div class="size-5 bg-foreground rounded flex items-center justify-center">
        <span class="material-symbols-outlined text-white text-[12px]">task_alt</span>
      </div>
      <span class="font-bold text-md tracking-tight">TaskAgentAI</span>
    </div>
    <div class="flex gap-8">
      <a class="text-xs font-medium text-muted hover:text-foreground" href="#">Privacy Policy</a>
      <a class="text-xs font-medium text-muted hover:text-foreground" href="#">Terms of Service</a>
      <a class="text-xs font-medium text-muted hover:text-foreground" href="#">Status</a>
      <a class="text-xs font-medium text-muted hover:text-foreground" href="#">Contact</a>
    </div>
    <p class="text-xs text-muted">© 2024 TaskAgentAI Inc. All rights reserved.</p>
  </div>
</footer>`;
};
