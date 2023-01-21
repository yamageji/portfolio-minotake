<script lang="ts">
  import IconChevronRight from '@components/icons/IconChevronRight.svelte';
  import IconChevronLeft from '@components/icons/IconChevronLeft.svelte';

  export let type: 'prev' | 'next';
  export let href: string;
</script>

{#if type === 'prev'}
  <a
    {href}
    class="group mr-2 flex gap-1 text-base tracking-wider text-text-secondary"
  >
    <span class="duration-150 group-hover:text-text-accent-primary">
      <IconChevronLeft />
    </span>
    <span class="duration-150 group-hover:text-text-accent-primary">
      PREV
    </span>
  </a>
{:else if type === 'next'}
  <a
    {href}
    class="group ml-2 flex gap-1 text-base tracking-wider text-text-secondary"
  >
    <span class="duration-150 group-hover:text-text-accent-primary">
      NEXT
    </span>
    <span class="duration-150 group-hover:text-text-accent-primary">
      <IconChevronRight />
    </span>
  </a>
{/if}
