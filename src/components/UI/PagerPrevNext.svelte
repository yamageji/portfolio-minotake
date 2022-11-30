<script lang="ts">
  export let type: 'prev' | 'next';
  export let href: string;
</script>

{#if type === 'prev'}
  <a {href} class="mr-2 flex h-8 items-center justify-center rounded-md  ">
    ＜ PREV
  </a>
{:else if type === 'next'}
  <a {href} class="ml-2 flex h-8 items-center justify-center rounded-md ">
    NEXT ＞
  </a>
{/if}
