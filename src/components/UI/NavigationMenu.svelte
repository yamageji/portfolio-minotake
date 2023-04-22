<script lang="ts">
  import IconArrowTopRightOnSquare from '@components/icons/IconArrowTopRightOnSquare.svelte';
  import IconClose from '@components/icons/IconClose.svelte';
  import { externalLinks, pageLinks } from '@library/linkData';
  import { createEventDispatcher } from 'svelte';

  export let dialog: HTMLDialogElement;
  export let currentPage: string;

  const dispatch = createEventDispatcher();
  const clickClose = () => {
    dispatch('closeDialog');
  };

  export let isClosing = true;
  const closingClass = 'scale-90 opacity-0 backdrop:opacity-0';
</script>

<div class="opacity-0 " />
<dialog
  bind:this={dialog}
  class={`${
    isClosing && closingClass
  } backdrop:bg-surface-secondary/20 absolute top-4 bottom-auto right-4 left-auto origin-top-right overflow-y-auto rounded-md bg-bg-surface-primary shadow-md duration-200 backdrop:backdrop-blur-sm backdrop:duration-200`}
>
  <div
    class="grid grid-cols-1 grid-rows-1 items-start justify-items-end px-4 pt-6 pb-3"
  >
    <button
      type="button"
      on:click={clickClose}
      class="z-10 col-start-1 row-start-1 -mr-5 -mt-8 rounded-md px-2 py-2 text-sm text-text-secondary hover:text-text-primary"
    >
      <span class="sr-only">閉じる</span>
      <IconClose />
    </button>

    <nav class="col-start-1 row-start-1 mt-2">
      <ul
        class="flex flex-col gap-4 font-barlow text-2xl font-semibold leading-8 tracking-widest"
      >
        {#each pageLinks as link (link.label)}
          {#if link.label === currentPage.toUpperCase()}
            <li>
              <a
                class="flex items-center gap-4 before:block before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-bg-accent-primary"
                href={link.href}>{link.label}</a
              >
            </li>
          {:else}
            <li>
              <a
                class="flex items-center gap-4 text-text-tertiary duration-150 before:block before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-bg-accent-secondary hover:text-text-primary"
                href={link.href}>{link.label}</a
              >
            </li>
          {/if}
        {/each}
      </ul>

      <ul
        class="mt-6 flex gap-6 border-t border-t-border-quaternary px-1 pt-4 font-barlow-semi text-lg font-semibold tracking-wide text-text-tertiary duration-150 hover:text-text-primary"
      >
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
      </ul>
    </nav>
  </div>
</dialog>
