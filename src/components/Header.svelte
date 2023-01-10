<script lang="ts">
  import { onMount } from 'svelte';
  import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
  import { useMediaQuery } from '@library/useMediaquery';
  import ExternalLinks from '@components/ExternalLinks.svelte';
  import NavigationMenu from '@components/UI/NavigationMenu.svelte';
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
    dialog.close();
  };

  let mediaQuery;
  onMount(() => {
    mediaQuery = useMediaQuery('(min-width: 768px)');
  });
  $: if ($mediaQuery) {
    closeDialog();
  }
</script>

<header class="bg-slate-50/30 backdrop-blur-md">
  <div
    class="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 md:h-16"
  >
    <a
      href="/"
      class="font-barlow text-4xl font-semibold tracking-wider text-slate-900"
    >
      <img src="minotake-rogo.png" width="140" alt="ロゴ：minotake" />
    </a>

    <div class="hidden md:block">
      <ExternalLinks />
    </div>

    <div class="md:hidden">
      <div
        class="fixed inset-y-0 right-4 left-auto flex items-center justify-center"
      >
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
