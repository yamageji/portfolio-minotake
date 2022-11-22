<script lang="ts">
  const pageLinks = [
    {
      label: 'HOME',
      href: '/',
    },
    {
      label: 'WORKS',
      href: '/works',
    },
    {
      label: 'PROFILE',
      href: '/profile',
    },
  ];
</script>

<template>
  <div>
    <nav>
      <ul
        class="flex flex-col gap-6 font-barlow text-2xl font-semibold leading-[29px] tracking-widest"
      >
        {#each pageLinks as link (link.label)}
          <li
            class="flex items-center gap-4 before:block before:h-2 before:w-10 before:shrink-0 before:rounded-full before:bg-teal-500"
          >
            <a href={link.href}>{link.label}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</template>
