export const prefersLightMode = (): boolean => typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches;
