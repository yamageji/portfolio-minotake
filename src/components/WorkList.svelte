<script lang="ts">
  import type { Work } from '../library/useCms';
  export let works: Work[];
  console.log(works);
</script>

<ul class="grid grid-cols-2 gap-x-6 gap-y-8">
  {#each works as work (work._id)}
    <li>
      <div class="aspect-video w-full rounded-lg bg-slate-300" />
      <h3 class="mt-2 text-xl font-bold">{work.title}</h3>
      <p class="mt-1 text-sm text-slate-600">Webデザイン/実装</p>
    </li>
  {/each}
</ul>
