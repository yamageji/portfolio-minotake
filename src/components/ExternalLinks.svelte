<script lant="ts">
  const externalLinks = [
    {
      label: "GitHub",
      href: 'https://github.com/K-shigehito'
    },
    {
      label: "Twitter",
      href: 'https://github.com/K-shigehito'
    }
  ]
</script>

<div>
  <nav>
    <ul class="flex gap-6 text-lg tracking-wider font-barlow font-semibold">
      {#each externalLinks as link (link.label) }
        <li>
          <a href={link.href}>{link.label}</a>
        </li>
      {/each}
    </ul>
  </nav>
</div>