import { readable } from 'svelte/store';

export const useMediaQuery = (mediaQueryString: string) => {
  const matches = readable(false, (set) => {
    const m = window.matchMedia(mediaQueryString);
    set(m.matches);
    const el = (e: { matches: boolean }) => set(e.matches);
    m.addEventListener('change', el);
    return () => {
      m.removeEventListener('change', el);
    };
  });
  return matches;
};
