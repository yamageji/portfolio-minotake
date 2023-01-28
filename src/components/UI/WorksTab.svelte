<script lang="ts">
  import { fade, slide, fly } from 'svelte/transition';
  import { cubicIn } from 'svelte/easing';

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
    class="flex gap-3 border-b-2  border-border-primary font-barlow-semi text-xl font-semibold text-text-tertiary md:gap-4 md:text-2xl"
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
          class="relative block border-b-2 border-border-primary px-1.5 py-1.5 tracking-wider duration-150 hover:text-text-primary focus:text-text-primary aria-selected:border-border-accent-primary aria-selected:text-text-primary md:px-2 md:py-2"
        >
          {title}
        </button>
      </li>
    {/each}
  </ul>

  <div class="mt-8 w-full md:mt-10">
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
          {#if currentActive}
            <div
              in:fly={{
                duration: 150,
                y: 50,
                opacity: 0.2,
                easing: cubicIn,
              }}
            >
              <WorkList works={content} />
            </div>
          {/if}
        {:else}
          <div>コンテンツがありません</div>
        {/if}
      </div>
    {/each}
  </div>
</div>
