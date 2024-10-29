<script lang="ts">
  import IconArrowUpRight from '@components/icons/IconArrowUpRight.svelte';
  import IconChabatakeWeb from '@components/icons/IconChabatakeWeb.svelte';
  import IconZenn from '@components/icons/IconZenn.svelte';
  import IconChomen from '@components/icons/IconChomen.svelte';
  import type { Article } from '@library/useCms';

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
              <IconChabatakeWeb
                additionalClass="h-5 w-5 md:h-[26px] md:w-[26px]"
              />
            {:else if article.platform === 'zenn'}
              <IconZenn
                additionalClass="h-5 w-5 text-[#3EA8FF] md:h-[26px] md:w-[26px]"
              />
            {:else if article.platform === 'chomen'}
              <IconChomen />
            {/if}
          </div>

          <time
            datetime={article.date}
            class="font-barlow-semi text-base tracking-wide text-text-secondary md:text-lg"
          >
            {new Date(article.date).toLocaleDateString('ja-JP')}
          </time>
        </div>

        <div class="ml-0.5">
          <span
            class="mr-1.5 decoration-border-tertiary decoration-1 underline-offset-4 group-hover:underline md:mr-2"
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
