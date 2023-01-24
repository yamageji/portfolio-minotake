<script lang="ts">
  import { textColorsData, backgroundCirclesData } from './circleData';

  const circleSize = 3;

  const createTextColor = () => {
    if (Math.random() < 0.7) {
      return 'fill-fv-tx-primary';
    } else {
      return 'fill-none';
    }
  };
  const createBackgroundColor = () => {
    if (Math.random() < 0.08) {
      return 'fill-fv-bg-primary';
    } else {
      return 'fill-none';
    }
  };
  const createCircleObject = (array: number[][], callback: () => string) => {
    return array.map((ary: number[]) => [...ary, callback()]);
  };

  const textCircles = createCircleObject(textColorsData, createTextColor);
  const backgroundCircles = createCircleObject(
    backgroundCirclesData,
    createBackgroundColor
  );
</script>

<svg
  class="h-auto w-full"
  viewBox="0 0 578 218"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  {#each textCircles as textCircle}
    {#if typeof textCircle[2] === 'string'}
      <circle
        cx={textCircle[0]}
        cy={textCircle[1]}
        r={circleSize}
        class={textCircle[2]}
      />
    {/if}
  {/each}
  {#each backgroundCircles as backgroundCircle}
    {#if typeof backgroundCircle[2] === 'string'}
      <circle
        cx={backgroundCircle[0]}
        cy={backgroundCircle[1]}
        r={circleSize}
        class={backgroundCircle[2]}
      />
    {/if}
  {/each}
</svg>
