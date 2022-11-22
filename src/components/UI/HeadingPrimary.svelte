<script lang="ts">
  type Title = {
    en: string;
    ja: string;
  };
  export let title: Title;
</script>

<h2
  class="relative flex flex-col before:absolute before:-top-3 before:-left-12 before:h-28 before:w-0.5 before:rotate-[34deg] before:bg-teal-500"
>
  <span class="font-barlow text-5xl font-semibold tracking-widest"
    >{title.en}</span
  >
  <span class="mt-2 text-2xl font-bold text-slate-600">{title.ja}</span>
</h2>
