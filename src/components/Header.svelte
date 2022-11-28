<script lang="ts">
  import ExternalLinks from './ExternalLinks.svelte';
  export let mainTitle: string;
</script>

<header
  class="flex items-center justify-between bg-slate-50/30 px-10 backdrop-blur-md"
>
  <a
    href="/"
    class="font-barlow text-[44px] font-semibold tracking-widest text-slate-900"
  >
    {mainTitle}
  </a>
  <ExternalLinks />
</header>
