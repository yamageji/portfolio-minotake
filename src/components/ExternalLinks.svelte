<script lang="ts">
  import IconArrowTopRightOnSquare from '@components/icons/IconArrowTopRightOnSquare.svelte';
  import { externalLinks } from '@library/linkData';
</script>

<div>
  <nav>
    <ul
      class="flex gap-6 font-barlow-semi text-lg font-semibold tracking-wider"
    >
      {#each externalLinks as link (link.label)}
        <li>
          <a class="flex items-center gap-1.5" href={link.href}
            >{link.label}<IconArrowTopRightOnSquare />
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>
