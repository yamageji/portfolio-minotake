<script lang="ts">
  import type { Profile } from '@library/useCms';
  import IconGitHub from './icons/IconGitHub.svelte';
  import IconTwitter from './icons/IconTwitter.svelte';
  import IconZenn from './icons/IconZenn.svelte';

  export let profile: Profile;
  export let isDetail: boolean;
</script>

<div class="flex flex-col items-center justify-center">
  <img
    src={profile.avatar.src}
    width={profile.avatar.width}
    height={profile.avatar.height}
    alt={profile.avatar.altText ? profile.avatar.altText : ''}
    class="h-60 w-60"
  />
  <p
    class="mt-8 text-center font-barlow-semi text-4xl font-semibold tracking-wider text-slate-800"
  >
    {profile.englishName}
  </p>
  <p class="mt-2 text-xl font-bold text-slate-800">
    {profile.japaneseName}
  </p>
</div>

<div class="mt-10 flex flex-col gap-3 text-base leading-7">
  {@html profile.description}
</div>

{#if isDetail}
  <h2
    class="mt-10 flex items-center gap-3 font-barlow-semi text-2xl before:block before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-slate-400"
  >
    Skills
  </h2>
  <div class="ml-2 mt-1">
    {@html profile.skills}
  </div>

  <h2
    class="mt-10 flex items-center gap-3 font-barlow-semi text-2xl before:block before:h-2 before:w-2 before:shrink-0 before:rounded-full before:bg-slate-400"
  >
    Social Links
  </h2>
  <ul class="mt-3 ml-2 flex w-full gap-4">
    {#each profile.snsLinks as snsLink (snsLink.name)}
      <li>
        <a href={snsLink.url} class="flex gap-2 font-bold">
          <span class="sr-only">{snsLink.name}</span>
          <span class="text-slate-500 duration-150 hover:text-slate-700">
            {#if snsLink.name === 'GitHub'}
              <IconGitHub class="h-6 w-6" />
            {:else if snsLink.name === 'Twitter'}
              <IconTwitter class="h-6 w-6" />
            {:else if snsLink.name === 'Zenn'}
              <IconZenn class="h-6 w-6" />
            {/if}
          </span>
        </a>
      </li>
    {/each}
  </ul>
{/if}
