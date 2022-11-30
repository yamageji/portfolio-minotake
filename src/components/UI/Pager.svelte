<script lang="ts">
  export let currentPage: number;
  export let page: number;
  export let href: string;
</script>

{#if currentPage === page + 1}
  <a
    {href}
    class="flex h-8 w-8 items-center justify-center rounded-md bg-teal-500 text-white duration-150 sm:h-10 sm:w-10"
  >
    {page + 1}
  </a>
{:else}
  <a
    {href}
    class="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 duration-150 hover:text-teal-500 sm:h-10 sm:w-10"
  >
    {page + 1}
  </a>
{/if}
