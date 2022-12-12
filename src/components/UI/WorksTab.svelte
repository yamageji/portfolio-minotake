<script lang="ts">
  type TabList = {
    id: string;
    title: string;
    content: [
      {
        url: string;
        title: string;
      }
    ];
  };

  export let data: TabList[];

  let activeIndex = 0;

  const onClickTab = (index: number) => {
    if (activeIndex === index) return;
    activeIndex = index;
  };
</script>

<div>
  <ul
    class="flex gap-6 font-barlow-semi text-3xl font-semibold"
    role="tablist"
    aria-label="works"
  >
    {#each data as { id, title }, index}
      {@const currentActive = activeIndex === index}
      {@const onClick = () => onClickTab(index)}
      <li class="" role="presentation">
        <button
          type="button"
          class="px-4 py-2 tracking-wider"
          id="tab-{id}"
          role="tab"
          aria-controls="panel-{id}"
          aria-selected={currentActive ? 'true' : 'false'}
          tabindex={currentActive ? 0 : -1}
          on:click={onClick}
        >
          {title}
        </button>
      </li>
    {/each}
  </ul>
  <div class="">
    {#each data as { id, title, content }, index}
      {@const currentActive = activeIndex === index}
      <div
        aria-hidden={currentActive ? 'false' : 'true'}
        class=""
        id="panel-{id}"
        role="tabpanel"
        aria-labelledby="tab-{id}"
        tabindex="0"
      >
        <ol class="">
          {#each content as { url, title }}
            <li class="-item">
              <a href={url} class="">{title}</a>
            </li>
          {/each}
        </ol>
      </div>
    {/each}
  </div>
</div>
