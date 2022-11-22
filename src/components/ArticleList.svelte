<script type="ts">
  import type { Article } from '../library/useCms';
  import IcomZenn from './icons/IcomZenn.svelte';
  import IconChabatakeWeb from './icons/IconChabatakeWeb.svelte';

  export let articles: Article[];
</script>

<ul class="flex flex-col gap-6 text-2xl font-normal">
  {#each articles as article (article._id)}
    <li class="flex gap-4">
      <span class="mt-0.5 shrink-0">
        {#if article.platform === 'chabatake'}
          <IconChabatakeWeb />
        {:else if article.platform === 'zenn'}
          <IcomZenn />
        {/if}
      </span>
      {article.title}
    </li>
  {/each}
</ul>
