<script lang="ts">
  export let currentPage: number;
  export let totalPageCount: number;

  const pager = [...Array(totalPageCount).keys()];

  const getPath = (page: number) => {
    return `./${page}`;
  };
</script>

<ul
  class="flex items-center justify-center gap-2 font-barlow text-sm font-semibold tracking-wider sm:text-base"
>
  {#if currentPage > 1}
    <li>
      <a
        href={getPath(currentPage - 1)}
        class="flex h-8 items-center justify-center rounded-md hover:text-teal-500 sm:h-10"
      >
        ＜ PREV
      </a>
    </li>
  {/if}

  {#if 3 < currentPage}
    <li
      class="flex h-8 w-8 items-center justify-center rounded-md border border-teal-500 text-slate-500 sm:h-10 sm:w-10"
    >
      <a href={getPath(1)}> 1 </a>
    </li>
  {/if}

  {#if 4 < currentPage}
    <li class="">...</li>
  {/if}

  {#each pager as p (p)}
    {#if currentPage - 3 <= p && p <= currentPage + 1}
      <li>
        {#if currentPage === p + 1}
          <a
            href={getPath(p + 1)}
            class="flex h-8 w-8 items-center justify-center rounded-md bg-teal-500 text-white duration-150 sm:h-10 sm:w-10"
          >
            {p + 1}
          </a>
        {:else}
          <a
            href={getPath(p + 1)}
            class="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 duration-150 hover:text-teal-500 sm:h-10 sm:w-10"
          >
            {p + 1}
          </a>
        {/if}
      </li>
    {/if}
  {/each}

  {#if currentPage + 3 < pager.length}
    <li class="">...</li>
  {/if}

  {#if currentPage + 2 < pager.length}
    <li
      class="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 sm:h-10 sm:w-10"
    >
      <a href={getPath(pager.length)}>
        {pager.length}
      </a>
    </li>
  {/if}

  {#if currentPage < pager.length}
    <li>
      <a
        href={getPath(currentPage + 1)}
        class="flex h-8 items-center justify-center rounded-md hover:text-teal-500 sm:h-10"
      >
        NEXT ＞
      </a>
    </li>
  {/if}
</ul>
