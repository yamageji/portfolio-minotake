<script lang="ts">
  import { onMount } from 'svelte';
  import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
  import { useMediaQuery } from '@library/useMediaquery';
  import ExternalLinks from '@components/ExternalLinks.svelte';
  import NavigationMenu from '@components/UI/NavigationMenu.svelte';
  import MoveIconBars from '@components/icons/MoveIconBars.svelte';
  import IconBars from '@components/icons/IconBars.svelte';

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

<header class="bg-bg-surface-primary/30 backdrop-blur-md">
  <div
    class="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 md:h-16"
  >
    <a href="/">
      <img
        class="h-8 text-left md:h-10"
        src="/minotake-rogo.svg"
        height="40"
        alt="ロゴ：minotake"
      />
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
          class="group w-10 rounded-md px-2 py-2 text-sm text-text-secondary hover:text-text-primary"
        >
          <span class="sr-only">メニュー</span>
          <MoveIconBars />
        </button>
      </div>
      <NavigationMenu bind:dialog on:closeDialog={closeDialog} {currentPage} />
    </div>
  </div>
</header>
