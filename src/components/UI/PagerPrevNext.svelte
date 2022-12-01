<script lang="ts">
  import IconChevronRighe from '@components/icons/IconChevronRighe.svelte';
  import IconChevronLeft from '@components/icons/IconChevronLeft.svelte';

  export let type: 'prev' | 'next';
  export let href: string;
</script>

{#if type === 'prev'}
  <a
    {href}
    class="group mr-2 flex gap-1 text-base tracking-wider text-slate-700"
  >
    <span class="duration-150 group-hover:text-teal-500">
      <IconChevronLeft />
    </span>
    <span class="underline decoration-slate-700 underline-offset-4">
      PREV
    </span>
  </a>
{:else if type === 'next'}
  <a
    {href}
    class="group mr-2 flex gap-1 text-base tracking-wider text-slate-700"
  >
    <span class="underline decoration-slate-700 underline-offset-4">
      NEXT
    </span>
    <span class="duration-150 group-hover:text-teal-500">
      <IconChevronRighe />
    </span>
  </a>
{/if}
