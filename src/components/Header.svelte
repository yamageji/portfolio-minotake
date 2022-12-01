<script lang="ts">
  import ExternalLinks from '@components/ExternalLinks.svelte';

  export let mainTitle: string;
</script>

<header
  class="flex items-center justify-between bg-slate-50/30 backdrop-blur-md"
>
  <a
    href="/"
    class="font-barlow text-[44px] font-semibold tracking-widest text-slate-900"
  >
    {mainTitle}
  </a>
  <ExternalLinks />
</header>
