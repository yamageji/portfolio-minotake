<script lang="ts">
  type Title = {
    en: string;
    ja: string;
  };
  export let title: Title;
</script>

<h1 class="relative flex gap-10">
  <span class="font-barlow text-5xl font-semibold tracking-widest text-teal-500"
    >{title.en}</span
  >
  <span
    class="relative mt-2 text-2xl font-bold text-slate-600 before:absolute before:top-4 before:-left-10 before:h-0.5 before:w-10 before:rotate-[110deg] before:bg-slate-500"
    >{title.ja}</span
  >
</h1>
