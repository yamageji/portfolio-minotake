<script lang="ts">
  import ExternalLinks from './ExternalLinks.svelte';
  export let mainTitle: string;
</script>

<header
  class="flex items-center justify-between bg-slate-50/30 backdrop-blur-md"
>
  <h1
    class="font-barlow text-[44px] font-semibold tracking-widest text-slate-900"
  >
    {mainTitle}
  </h1>
  <ExternalLinks />
</header>
