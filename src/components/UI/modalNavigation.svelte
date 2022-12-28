<script lang="ts">
  import IconBars from '@components/icons/IconBars.svelte';
  import IconClose from '@components/icons/IconClose.svelte';

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

  let dialog: HTMLDialogElement;

  const showDialog = () => {
    dialog.showModal();
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  };

  const closeDialog = () => {
    dialog.close();
  };
</script>

<div class="relative">
  <div class="fixed top-3 right-6 flex items-center justify-center">
    <button
      type="button"
      on:click={showDialog}
      class="rounded-md px-2 py-2 text-sm text-slate-600 hover:text-slate-800"
    >
      <IconBars />
    </button>
  </div>

  <dialog
    bind:this={dialog}
    class="fixed top-4 right-4 overflow-y-auto rounded-md bg-slate-50 shadow-md backdrop:bg-slate-900/20 backdrop:backdrop-blur-sm open:inline-block"
  >
    <div
      class="flex min-h-full flex-row-reverse place-items-start gap-20 py-6 pr-6 pl-10"
    >
      <button on:click={closeDialog}>
        <IconClose />
      </button>

      <ul
        class="flex flex-col gap-3 font-barlow-semi text-xl font-semibold tracking-wider"
      >
        {#each pageLinks as pageLink (pageLink.label)}
          <li>
            <a href={pageLink.href}>
              {pageLink.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </dialog>
</div>
