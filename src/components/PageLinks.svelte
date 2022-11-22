<script lang="ts">
  const pageLinks = [
    {
      label: "HOME",
      href: '/'
    },
    {
      label: "WORKS",
      href: '/works'
    },
    {
      label: "PROFILE",
      href: '/profile'
    }
  ]
</script>

<template>
  <div>
    <nav>
      <ul class="flex flex-col gap-6 text-2xl font-barlow font-semibold tracking-widest leading-[29px]">
        {#each pageLinks as link (link.label) }
          <li class="flex gap-4 items-center before:block before:w-10 before:h-2 before:rounded-full before:bg-teal-500 before:shrink-0">
            <a href={link.href}>{link.label}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</template>