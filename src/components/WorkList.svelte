<script lang="ts">
  import type { Work } from '@library/useCms';

  export let works: Work[];
</script>

<div class="@container">
  <ul class="grid grid-cols-1 gap-x-6 gap-y-10 @[528px]:grid-cols-2">
    {#each works as work (work._id)}
      <li>
        {#if work.link}
          <a href={`/works/${work.slug}`}>
            <div class="group">
              <div
                class="aspect-video w-full overflow-hidden rounded-lg border border-border-primary shadow-md"
              >
                {#if work['main-image']}
                  <img
                    src={work['main-image'].src}
                    alt={work['main-image'].altText}
                    width={work['main-image'].width}
                    height={work['main-image'].height}
                    class="duration-150 group-hover:scale-[1.03]"
                  />
                {/if}
              </div>
              <h3
                class="mt-4 text-xl font-bold decoration-2 underline-offset-2 group-hover:underline"
              >
                {work.title}
              </h3>
              <ul class="mt-2 flex gap-2">
                {#each work.category as category}
                  <li
                    class="rounded-md bg-bg-primary px-2 py-0.5 font-barlow-semi text-sm font-semibold tracking-wider"
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
</div>
