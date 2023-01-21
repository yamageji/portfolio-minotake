<script lang="ts">
  import MoveIconMore from '@components/icons/MoveIconMore.svelte';
  import IconArrowTopRightOnSquare from '@components/icons/IconArrowTopRightOnSquare.svelte';

  export let href: string;
  export let type: 'link' | 'externalLink' = 'link';
</script>

<a
  {href}
  class="group inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border-secondary pt-1 pr-5 pb-1
pl-5 font-barlow-semi text-xl font-semibold text-text-secondary duration-200 hover:bg-bg-primary"
>
  <span class="mb-0.5 tracking-wide">
    <slot />
  </span>
  {#if type === 'link'}
    <MoveIconMore />
  {:else}
    <IconArrowTopRightOnSquare />
  {/if}
</a>
