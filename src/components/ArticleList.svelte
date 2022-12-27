<script type="ts">
  import type { Article } from '@library/useCms';
  import IconArrowUpRight from '@components/icons/IconArrowUpRight.svelte';
  import IconZenn from '@components/icons/IconZenn.svelte';
  import IconChabatakeWeb from '@components/icons/IconChabatakeWeb.svelte';

  export let articles: Article[];
</script>

<ul
  class="flex	 flex-col gap-4 text-lg font-bold leading-normal md:gap-6 md:text-xl md:leading-relaxed"
>
  {#each articles as article (article._id)}
    <li>
      <a href={article.url} class="group flex gap-3 md:gap-4">
        <span class="mt-1.5 shrink-0 md:mt-1">
          {#if article.platform === 'chabatake'}
            <IconChabatakeWeb />
          {:else if article.platform === 'zenn'}
            <IconZenn />
          {/if}
        </span>
        <span class="inline">
          <span
            class="mr-1.5 decoration-slate-700 decoration-2 underline-offset-4 group-hover:underline md:mr-2"
          >
            {article.title}
          </span>
          <span class="align-[2px]">
            <IconArrowUpRight />
          </span>
        </span>
      </a>
    </li>
  {/each}
</ul>
