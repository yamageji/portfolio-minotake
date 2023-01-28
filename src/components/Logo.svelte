<script lang="ts">
  import { logoData } from '@library/circleData';

  const createColorStyle = () => {
    if (Math.random() < 0.3) {
      return 'fill-fv-logo-primary';
    } else if (Math.random() < 0.6) {
      return 'fill-fv-logo-secondary';
    } else {
      return 'fill-none';
    }
  };
  const createCircleObject = (array: string[], callback: () => string) => {
    return array.map((value: string) => [value, callback()]);
  };

  const logoCircles = createCircleObject(logoData, createColorStyle);
</script>

<svg
  role="img"
  width="96"
  height="28"
  viewBox="0 0 96 28"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="w-20 md:w-24"
>
  <title>minotake</title>
  {#each logoCircles as logoCircle, index (index)}
    {#if typeof logoCircle[1] === 'string'}
      <path d={logoCircle[0]} class={logoCircle[1]} />
    {/if}
  {/each}
  <path
    d="M14.5 0H19.1C19.2 0 19.3 0 19.4 0.1C19.5 0.2 19.5 0.3 19.5 0.4V27.4C19.5 27.5 19.5 27.6 19.4 27.7C19.4 28 19.3 28 19.2 28H14.5C14.4 28 14.3 28 14.2 27.9C14 27.8 14 27.7 14 27.5V9.5C14 9.4 14 9.3 13.9 9.3C13.8 9.3 13.8 9.3 13.7 9.4L10.6 15C10.5 15.2 10.4 15.3 10.3 15.3C10.2 15.3 10.1 15.2 10 15L6.9 9.5C6.83333 9.43333 6.76667 9.4 6.7 9.4C6.6 9.4 6.6 9.5 6.6 9.6V27.6C6.6 27.7 6.6 27.8 6.5 27.9C6.4 28 6.3 28 6.2 28H1.5C1.4 28 1.3 28 1.2 27.9C1 27.8 1 27.7 1 27.5V0.5C1 0.4 1 0.3 1.1 0.2C1.2 0 1.3 0 1.5 0H6.1C6.4 0 6.6 0.1 6.7 0.3L10.3 6.7C10.4 6.8 10.5 6.8 10.5 6.7L13.9 0.3C14 0.1 14.2 0 14.5 0Z"
    fill="#334155"
  />
</svg>
