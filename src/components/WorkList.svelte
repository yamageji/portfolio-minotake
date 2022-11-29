<script lang="ts">
  import type { Work } from '../library/useCms';

  export let works: Work[];
</script>

<ul class="grid grid-cols-2 gap-x-6 gap-y-8">
  {#each works as work (work._id)}
    <li>
      {#if work.link}
        <a href={work.link}>
          <div>
            <img
              src={work['main-image'].src}
              alt={work['main-image'].altText}
              width={work['main-image'].width}
              height={work['main-image'].height}
              class="aspect-video w-full rounded-lg border border-slate-200 shadow-md"
            />
            <h3 class="mt-4 text-xl font-bold">{work.title}</h3>
            <ul class="mt-2 flex gap-2">
              {#each work.category as category}
                <li
                  class="rounded-md bg-slate-300 px-2 py-0.5 font-barlow text-sm font-semibold tracking-wider"
                >
                  {category}
                </li>
              {/each}
            </ul>
          </div>
        </a>
      {/if}
    </li>
  {/each}
</ul>
