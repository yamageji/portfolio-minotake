<script lang="ts">
  import ExternalLinks from "./ExternalLinks.svelte";
export let mainTitle: string;
</script>

<header class="flex justify-between items-center backdrop-blur-md bg-slate-50/30">
  <h1
    class="font-barlow text-slate-900 font-semibold tracking-widest text-[44px]"
  >
    {mainTitle}
  </h1>
  <ExternalLinks />
</header>
