<script lang="ts">
  import IconBars from '@components/icons/IconBars.svelte';
  import IconClose from '@components/icons/IconClose.svelte';
  import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
  } from '@rgossiaux/svelte-headlessui';

  let isOpen = false;

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
</script>

<div class="fixed top-3 right-6 flex items-center justify-center">
  <button
    type="button"
    on:click={() => (isOpen = true)}
    class="rounded-md px-2 py-2 text-sm text-slate-600 hover:text-slate-800"
  >
    <IconBars />
  </button>
</div>

<Dialog open={isOpen} on:close={() => (isOpen = false)} class="relative z-20">
  <DialogOverlay class="fixed inset-0 bg-slate-800/20 backdrop-blur-sm" />

  <div
    class="fixed top-4 right-4 overflow-y-auto rounded-md bg-slate-50 shadow-md"
  >
    <div
      class="flex min-h-full flex-row-reverse place-items-start gap-20 py-6 pr-6 pl-10"
    >
      <button
        type="button"
        on:click={() => (isOpen = false)}
        class=" -mx-2 -my-2 px-2 py-2"
      >
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
  </div>
</Dialog>
