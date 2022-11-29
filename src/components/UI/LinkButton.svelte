<script lang="ts">
  import MoveIconMore from '@components/icons/MoveIconMore.svelte';

  export let href: string;
</script>

<a
  {href}
  class="group inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-500 pt-1 pr-6
pb-1 pl-6 font-barlow text-2xl font-semibold duration-200 hover:bg-slate-100"
>
  <span class="mb-0.5 tracking-wide">
    <slot />
  </span>
  <MoveIconMore />
</a>
