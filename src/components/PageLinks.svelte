<script lang="ts">
  import { pageLinks } from '@library/linkData';
  export let currentPage: string;
</script>

<nav>
  <ul
    class="flex flex-col gap-6 font-barlow text-2xl font-semibold leading-[29px] tracking-widest"
  >
    {#each pageLinks as link (link.label)}
      {#if link.label === currentPage.toUpperCase()}
        <li
          class="flex items-center gap-4 before:block before:h-2 before:w-10 before:shrink-0 before:rounded-full before:bg-teal-500"
        >
          <a href={link.href}>{link.label}</a>
        </li>
      {:else}
        <li
          class="flex items-center gap-4 text-slate-600 duration-150 before:block before:h-2 before:w-10 before:shrink-0 before:rounded-full before:bg-slate-400 hover:text-slate-900"
        >
          <a href={link.href}>{link.label}</a>
        </li>
      {/if}
    {/each}
  </ul>
</nav>
