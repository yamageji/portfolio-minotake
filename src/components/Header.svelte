<script lang="ts">
  import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
  import ExternalLinks from '@components/ExternalLinks.svelte';
  import NavigationMenu from './UI/NavigationMenu.svelte';
  import IconBars from '@components/icons/IconBars.svelte';

  export let mainTitle: string;
  export let currentPage: string;

  let dialog: HTMLDialogElement;

  const showDialog = () => {
    dialog.showModal();
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) {
        dialog.close();
        clearAllBodyScrollLocks();
      }
    });
    disableBodyScroll(document.body);
  };

  const closeDialog = () => {
    clearAllBodyScrollLocks();
  };

  // $: if (window.matchMedia('(min-width: 400px)').matches) dialog.close();
</script>

<header class="bg-slate-50/30 backdrop-blur-md">
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
      <div class="fixed top-3 right-6 flex items-center justify-center">
        <button
          type="button"
          on:click={showDialog}
          class="rounded-md px-2 py-2 text-sm text-slate-700 hover:text-slate-900"
        >
          <span class="sr-only">メニュー</span>
          <IconBars />
        </button>
      </div>
      <NavigationMenu bind:dialog on:closeDialog={closeDialog} {currentPage} />
    </div>
  </div>
</header>
