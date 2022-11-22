<script lang="ts">
  type Title = {
    en: string,
    ja: string
  }
  export let title: Title;
</script>

<h2 class="relative flex flex-col before:absolute before:bg-teal-500 before:w-0.5 before:h-28 before:rotate-[34deg] before:-top-3 before:-left-10">
  <span class="font-semibold leading-[53px] font-barlow text-[44px]">{title.en}</span>
  <span class="leading-7 text-2xl text-slate-500 font-bold">{title.ja}</span>
</h2>