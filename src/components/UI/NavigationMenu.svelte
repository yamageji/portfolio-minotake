<script lang="ts">
  import {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  } from '@rgossiaux/svelte-headlessui';

  const pageLinks = [
    {
      label: 'ABOUT',
      href: '/',
    },
    {
      label: 'WORKS',
      href: '/works',
    },
    {
      label: 'ARTICLES',
      href: '/articles/1',
    },
    {
      label: 'PROFILE',
      href: '/profile',
    },
  ];
</script>

<div class="absolute -top-3 right-0">
  <Menu let:open class="relative inline-block text-left">
    <MenuButton
      class="inline-flex w-full justify-center rounded-md bg-slate-700 bg-opacity-70 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >{open ? 'CLOSE' : 'MENU'}</MenuButton
    >
    <MenuItems
      class="divide-gray-100 ring-black absolute right-0 mt-2 flex w-56 origin-top-right flex-col gap-2 divide-y rounded-md bg-white shadow-lg ring-1 ring-opacity-5 focus:outline-none"
    >
      {#each pageLinks as pageLink (pageLink.label)}
        <MenuItem let:active>
          <a href={pageLink.href} class={`${active ? 'active' : 'inactive'}`}
            >{pageLink.label}</a
          >
        </MenuItem>
      {/each}
    </MenuItems>
  </Menu>
</div>
