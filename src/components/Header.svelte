<script lang="ts">
export let mainTitle: string;

const links = [
  { href: "/", label: "トップ" },
  { href: "/about", label: "アバウト" },
  { href: "/contact", label: "お問合せ" },
];
</script>

<div class="flex justify-between items-center">
  <h1
  class="font-barlow text-slate-900 font-semibold tracking-widest text-[44px]"
>
{mainTitle}
</h1>
<nav >
  <ul class="gap-4 hidden md:flex">
    {#each links as item (item.label)}
    <li>
      <a href={item.href}>{item.label}</a>
    </li>
    {/each}
  </ul>
</nav>
</div>
