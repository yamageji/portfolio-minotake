<script lang="ts">
  import type { Profile } from '@library/useCms';
  import IconChabatakeWeb from './icons/IconChabatakeWeb.svelte';
  import IconGitHub from './icons/IconGitHub.svelte';
  import IconTwitter from './icons/IconTwitter.svelte';
  import IconZenn from './icons/IconZenn.svelte';

  export let profile: Profile;
  export let isDetail: boolean;
</script>

<div class="flex flex-col items-center justify-center">
  <img
    src={profile.avatar.src}
    alt={profile.avatar.altText ? profile.avatar.altText : ''}
    width={profile.avatar.width}
    height={profile.avatar.height}
    loading="lazy"
    decoding="async"
    class="aspect-square w-[50%] min-w-[16rem] sm:w-72"
  />
  <hgroup>
    <h2
      class="mt-8 text-center font-barlow-semi text-4xl font-semibold tracking-wider text-text-quaternary"
    >
      {profile.englishName}
    </h2>
    <p class="mt-2 text-center text-xl font-bold text-text-quaternary">
      {profile.japaneseName}
    </p>
  </hgroup>
</div>

<div class="mt-12 flex flex-col gap-3 text-base leading-7">
  {@html profile.description}
</div>

{#if isDetail}
  <h2
    class="mt-12 flex items-center gap-3 text-2xl font-bold text-text-accent-primary md:mt-14"
  >
    スキルや資格など
  </h2>
  <div class="skills mt-1 ml-1">
    {@html profile.skills}
  </div>

  <h2
    class="mt-12 flex items-center gap-3 font-barlow-semi text-2xl text-text-accent-primary md:mt-14"
  >
    Links
  </h2>
  <ul class="mt-2 ml-1 flex w-full gap-4">
    {#each profile.snsLinks as snsLink (snsLink.name)}
      <li>
        <a
          href={snsLink.url}
          class="group flex items-center gap-1.5 font-bold text-text-tertiary duration-150 hover:text-text-secondary"
        >
          <span
            class="font-barlow-semi text-lg underline-offset-2 group-hover:underline"
            >{snsLink.name}</span
          >
          <span class="">
            {#if snsLink.name === 'GitHub'}
              <IconGitHub additionalClass="h-5 w-5" />
            {:else if snsLink.name === 'Twitter'}
              <IconTwitter additionalClass="h-5 w-5" />
            {:else if snsLink.name === 'Zenn'}
              <IconZenn additionalClass="h-5 w-5" />
            {:else if snsLink.name === 'Blog'}
              <IconChabatakeWeb
                additionalClass="h-[25px] w-[25px] mt-0.5"
                fillClass="currentColor"
              />
            {/if}
          </span>
        </a>
      </li>
    {/each}
  </ul>
{/if}

<style>
  .skills :global(h3) {
    @apply mt-5 flex items-center gap-1.5 text-lg
    font-bold;
  }
  /* バグ？：@apply内で:beforeが使えない対応 */
  .skills :global(h3::before) {
    margin-top: 0.1rem;
    content: '';
    display: block;
    height: 0.375rem;
    width: 0.375rem;
    flex-shrink: 0;
    border-radius: 9999px;
    background-color: rgb(100 116 139);
  }
  .skills :global(h3:nth-of-type(1)) {
    @apply mt-4;
  }
  .skills :global(ul) {
    @apply mt-2 flex flex-wrap gap-2 font-barlow-semi;
  }
  .skills :global(li) {
    @apply rounded-md bg-bg-primary px-2 py-0.5;
  }
  .skills :global(p) {
    @apply mt-2 leading-relaxed;
  }
</style>
