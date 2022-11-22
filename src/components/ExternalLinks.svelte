<script lant="ts">
  import ArrowTopRightOnSquare from './icons/ArrowTopRightOnSquare.svelte';
  const externalLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/K-shigehito',
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/chabatake5',
    },
  ];
</script>

<div>
  <nav>
    <ul class="flex gap-6 font-barlow text-lg font-bold  tracking-wider">
      {#each externalLinks as link (link.label)}
        <li>
          <a class="flex items-center gap-1.5" href={link.href}
            >{link.label}<ArrowTopRightOnSquare />
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>
