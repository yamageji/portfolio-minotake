<script type="ts">
  import type { Article } from '@library/useCms';
  import { convertDate } from '@library/convertDate';
  import IconArrowUpRight from '@components/icons/IconArrowUpRight.svelte';
  import IconZenn from '@components/icons/IconZenn.svelte';
  import IconChabatakeWeb from '@components/icons/IconChabatakeWeb.svelte';

  export let articles: Article[];
</script>

<ul
  class="flex flex-col gap-5 text-lg font-bold leading-normal md:gap-7 md:text-xl md:leading-relaxed"
>
  {#each articles as article (article._id)}
    <li>
      <a href={article.url} class="group flex flex-col gap-0 md:gap-0.5">
        <div class="flex items-center gap-2 md:gap-3">
          <div>
            {#if article.platform === 'chabatake'}
              <IconChabatakeWeb />
            {:else if article.platform === 'zenn'}
              <IconZenn />
            {/if}
          </div>
          <div
            class="font-barlow-semi text-base tracking-wide text-slate-700 md:text-lg"
          >
            {convertDate(article.date).YYMMDD}
          </div>
        </div>

        <div class="ml-0.5">
          <span
            class="mr-1.5 decoration-slate-700 decoration-2 underline-offset-4 group-hover:underline md:mr-2"
          >
            {article.title}
          </span>
          <span class="align-[2px]">
            <IconArrowUpRight />
          </span>
        </div>
      </a>
    </li>
  {/each}
</ul>
