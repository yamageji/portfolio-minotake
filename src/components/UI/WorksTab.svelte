<script lang="ts">
  import WorkList from '@components/WorkList.svelte';
  import type { Work } from '@library/useCms';

  type TabList = {
    id: string;
    title: string;
    content: Work[] | undefined;
  };

  export let data: TabList[];

  const tabs: HTMLButtonElement[] = [];
  let activeIndex = 0;
  let focusedIndex: number;
  const tabsLastIndex = data.length - 1;

  const onFocusTab = (index: number) => {
    focusedIndex = index;
  };
  const onKeydownTab = (event: KeyboardEvent) => {
    const key = event.key;
    switch (key) {
      case 'ArrowRight':
      case 'Right': // for IE, Edge 16-, Firefox 36-
        focusNextTab();
        break;
      case 'ArrowLeft':
      case 'Left': // for IE, Edge 16-, Firefox 36-
        focusPreviousTab();
        break;
      case 'Home':
        focusTab(0);
        break;
      case 'End':
        focusTab(tabsLastIndex);
        break;
    }
  };

  const focusTab = (index: number) => {
    tabs[index].focus();
  };
  const focusNextTab = () => {
    let nextIndex = focusedIndex + 1;
    if (nextIndex > tabsLastIndex) {
      nextIndex = 0;
    }
    focusTab(nextIndex);
  };
  const focusPreviousTab = () => {
    let nextIndex = focusedIndex - 1;
    if (nextIndex < 0) {
      nextIndex = tabsLastIndex;
    }
    focusTab(nextIndex);
  };

  const onClickTab = (index: number) => {
    if (activeIndex === index) return;
    activeIndex = index;
  };
</script>

<div class="w-full">
  <ul
    role="tablist"
    aria-label="works category"
    class="flex gap-4 border-b-2 border-slate-300 font-barlow-semi text-2xl font-semibold text-slate-600"
  >
    {#each data as { id, title }, index}
      {@const currentActive = activeIndex === index}
      {@const onClick = () => onClickTab(index)}
      {@const onFocus = () => onFocusTab(index)}
      <li role="presentation" class="-mb-0.5">
        <button
          type="button"
          id="tab-{id}"
          bind:this={tabs[index]}
          on:focus={onFocus}
          on:keydown={onKeydownTab}
          role="tab"
          aria-controls="panel-{id}"
          aria-selected={currentActive ? 'true' : 'false'}
          tabindex={currentActive ? 0 : -1}
          on:click={onClick}
          class="relative block px-2 py-2 tracking-wider duration-150 hover:text-slate-900 focus:text-slate-900 aria-selected:border-b-2 aria-selected:border-teal-500 aria-selected:text-slate-900"
        >
          {title}
        </button>
      </li>
    {/each}
  </ul>
  <div class="mt-10 w-full">
    {#each data as { id, content }, index}
      {@const currentActive = activeIndex === index}
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div
        id="panel-{id}"
        role="tabpanel"
        tabindex="0"
        aria-hidden={currentActive ? 'false' : 'true'}
        aria-labelledby="tab-{id}"
        class="aria-hidden:hidden"
      >
        {#if content && content.length !== 0}
          <WorkList works={content} />
        {:else}
          <div>コンテンツがありません</div>
        {/if}
      </div>
    {/each}
  </div>
</div>
