<script lang="ts">
  import Pager from './Pager.svelte';
  import PagerPrevNext from './PagerPrevNext.svelte';

  export let currentPage: number;
  export let totalPageCount: number;

  const pager = [...Array(totalPageCount).keys()].map((i) => ++i);

  const getPath = (page: number) => {
    return `/${page}`;
  };
</script>

<nav>
  <ul
    class="flex items-center justify-center gap-1 font-barlow-semi text-sm font-semibold"
  >
    {#if currentPage > 1}
      <li>
        <PagerPrevNext href={getPath(currentPage - 1)} type={'prev'} />
      </li>
    {/if}

    {#if 2 < currentPage}
      <li>
        <Pager {currentPage} page={1} href={getPath(1)} />
      </li>
    {/if}

    {#if 3 < currentPage}
      <li>...</li>
    {/if}

    {#each pager as p (p)}
      {#if currentPage - 1 <= p && p <= currentPage + 1}
        <li>
          <Pager {currentPage} page={p} href={getPath(p)} />
        </li>
      {/if}
    {/each}

    {#if currentPage + 1 < pager.length}
      <li>...</li>
    {/if}

    {#if currentPage + 1 < pager.length}
      <li>
        <Pager {currentPage} page={pager.length} href={getPath(pager.length)} />
      </li>
    {/if}

    {#if currentPage < pager.length}
      <li>
        <PagerPrevNext href={getPath(currentPage + 1)} type={'next'} />
      </li>
    {/if}
  </ul>
</nav>
