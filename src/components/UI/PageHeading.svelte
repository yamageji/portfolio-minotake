<script lang="ts">
  type Title = {
    en: string;
    ja: string;
  };

  export let title: Title;
</script>

<h1 class="relative flex gap-8 md:gap-10">
  <span
    class="font-barlow text-4xl font-semibold tracking-widest text-text-accent-primary md:text-5xl"
    >{title.en}</span
  >
  <span
    class="relative mt-2 text-xl font-bold text-text-tertiary before:absolute before:top-3 before:-left-8 before:h-0.5 before:w-8 before:rotate-[110deg] before:bg-border-secondary md:text-2xl md:before:-left-10 md:before:top-4 md:before:w-10"
    >{title.ja}</span
  >
</h1>
