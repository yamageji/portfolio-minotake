<script lang="ts">
  import ExternalLinks from '@components/ExternalLinks.svelte';
  import NavigationMenu from './UI/NavigationMenu.svelte';

  export let mainTitle: string;
</script>

<header class=" bg-slate-50/30 backdrop-blur-md">
  <div class="mx-auto flex max-w-6xl items-center justify-between px-6">
    <a
      href="/"
      class="font-barlow text-[44px] font-semibold tracking-wider text-slate-900"
    >
      {mainTitle}
    </a>
    <div class="hidden md:block">
      <ExternalLinks />
    </div>
    <div class="md:hidden">
      <NavigationMenu />
    </div>
  </div>
</header>
