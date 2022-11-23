<script lang="ts">
  import IconChevronRighe from '../icons/IconChevronRighe.svelte';
</script>

<button
  type="button"
  class="flex gap-2 rounded-full border border-slate-500 pt-1.5 pr-12 pb-2.5 pl-6 font-barlow text-2xl font-semibold"
>
  <slot />
  <IconChevronRighe />
</button>
