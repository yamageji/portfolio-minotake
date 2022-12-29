<script lang="ts">
  import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
  // import type { BodyScrollOptions } from 'body-scroll-lock';

  import IconBars from '@components/icons/IconBars.svelte';
  import IconClose from '@components/icons/IconClose.svelte';
  import IconArrowTopRightOnSquare from '@components/icons/IconArrowTopRightOnSquare.svelte';
  const pageLinks = [
    {
      label: 'ABOUT',
      href: '/',
    },
    {
      label: 'WORKS',
      href: '/works',
    },
    {
      label: 'ARTICLES',
      href: '/articles/1',
    },
    {
      label: 'PROFILE',
      href: '/profile',
    },
  ];
  const externalLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/K-shigehito',
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/chabatake5',
    },
  ];

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
    dialog.close();
    clearAllBodyScrollLocks();
  };
</script>

<div class="relative">
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

  <dialog
    bind:this={dialog}
    class="fixed top-4 right-4 overflow-y-auto rounded-md bg-slate-50 shadow-md backdrop:bg-slate-900/20 backdrop:backdrop-blur-sm open:inline-block"
  >
    <div
      class="flex min-h-full flex-row-reverse place-items-start gap-10 py-6 pr-6 pl-10"
    >
      <button
        type="button"
        on:click={closeDialog}
        class="-m-2 rounded-md px-2 py-2 text-sm text-slate-700 hover:text-slate-900"
      >
        <span class="sr-only">閉じる</span>
        <IconClose />
      </button>

      <nav>
        <ul class="font-barlow-semi text-xl font-semibold tracking-wider">
          <div class="flex flex-col gap-3">
            {#each pageLinks as pageLink (pageLink.label)}
              <li>
                <a href={pageLink.href}>
                  {pageLink.label}
                </a>
              </li>
            {/each}
          </div>

          <div class=" mt-5 flex gap-6 border-t border-t-slate-300 pt-5">
            {#each externalLinks as externalLink (externalLink.label)}
              <li>
                <a href={externalLink.href} class="flex items-center gap-1">
                  {externalLink.label}
                  <span>
                    <IconArrowTopRightOnSquare />
                  </span>
                </a>
              </li>
            {/each}
          </div>
        </ul>
      </nav>
    </div>
  </dialog>
</div>
