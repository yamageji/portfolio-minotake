<script lang="ts">
  export let type: 'prev' | 'next';
  export let href: string;
</script>

{#if type === 'prev'}
  <a {href} class="mr-2 text-base tracking-wider text-slate-700"> ＜ PREV </a>
{:else if type === 'next'}
  <a {href} class="ml-2 text-base tracking-wider text-slate-700"> NEXT ＞ </a>
{/if}
