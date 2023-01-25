<script lang="ts">
  export let currentPage: number;
  export let page: number;
  export let href: string;
</script>

{#if currentPage === page}
  <a
    {href}
    aria-label={`page ${page}`}
    aria-current="page"
    class="flex h-8 w-8 items-center justify-center rounded-[4px] border border-border-accent-primary text-xl text-text-accent-primary duration-150"
  >
    {page}
  </a>
{:else}
  <a
    {href}
    aria-label={`page ${page}`}
    class="flex h-8 w-8 items-center justify-center rounded-[4px] text-xl text-text-secondary duration-150 hover:text-text-accent-primary"
  >
    {page}
  </a>
{/if}
