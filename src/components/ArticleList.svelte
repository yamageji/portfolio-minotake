<script type="ts">
  import type { Article } from '../library/useCms';
  import IcomZenn from './icons/IcomZenn.svelte';
  import IconChabatakeWeb from './icons/IconChabatakeWeb.svelte';

  export let articles: Article[];
</script>

<ul class="flex flex-col gap-6 text-2xl font-semibold">
  {#each articles as article (article._id)}
    <li>
      <a href={article.url} class="flex gap-4">
        <span class="mt-0.5 shrink-0">
          {#if article.platform === 'chabatake'}
            <IconChabatakeWeb />
          {:else if article.platform === 'zenn'}
            <IcomZenn />
          {/if}
        </span>
        <span
          class="decoration-slate-700 decoration-2 hover:underline underline-offset-4"
        >
          {article.title}
        </span>
      </a>
    </li>
  {/each}
</ul>
