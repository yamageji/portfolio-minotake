<script type="ts">
  import IconArrowUpRight from './icons/IconArrowUpRight.svelte';
  import type { Article } from '../library/useCms';
  import IcomZenn from './icons/IcomZenn.svelte';
  import IconChabatakeWeb from './icons/IconChabatakeWeb.svelte';

  export let articles: Article[];
</script>

<ul class="flex flex-col gap-6 text-xl font-semibold leading-relaxed">
  {#each articles as article (article._id)}
    <li>
      <a href={article.url} class="group flex gap-4">
        <span class="mt-2 shrink-0">
          {#if article.platform === 'chabatake'}
            <IconChabatakeWeb />
          {:else if article.platform === 'zenn'}
            <IcomZenn />
          {/if}
        </span>
        <span class="inline">
          <span
            class="mr-2 decoration-slate-700 decoration-2 underline-offset-4 group-hover:underline"
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
