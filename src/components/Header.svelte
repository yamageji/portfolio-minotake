<script lang="ts">
  import ExternalLinks from '@components/ExternalLinks.svelte';

  export let mainTitle: string;
</script>

<header class=" bg-slate-50/30 backdrop-blur-md">
  <div class="mx-auto flex max-w-6xl items-center justify-between px-6">
    <a
      href="/"
      class="font-barlow text-[44px] font-semibold tracking-widest text-slate-900"
    >
      {mainTitle}
    </a>
    <ExternalLinks />
  </div>
</header>
