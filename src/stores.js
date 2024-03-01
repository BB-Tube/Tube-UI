import { writable } from 'svelte/store';

export const selectedColor = writable("black");
export const selectedMode = writable("paint");
export const isColumnDeleteStore = writable(false);