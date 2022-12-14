<script lang="ts">
  type Title = {
    en: string;
    ja: string;
  };

  export let title: Title;
</script>

<h2
  class="flex items-center gap-7 md:relative md:flex-col md:items-start md:gap-0 md:before:absolute md:before:-top-3 md:before:-left-12 md:before:h-28 md:before:w-0.5 md:before:rotate-[34deg] md:before:bg-teal-500"
>
  <span
    class="relative font-barlow text-4xl font-semibold tracking-widest text-teal-500 after:absolute after:top-1.5 after:ml-3 after:h-8 after:w-0.5 after:rotate-[200deg] after:bg-slate-500 md:text-5xl md:after:hidden"
    >{title.en}</span
  >
  <span class="mt-0.5 text-xl font-bold text-slate-600 md:mt-2 md:text-2xl"
    >{title.ja}</span
  >
</h2>
