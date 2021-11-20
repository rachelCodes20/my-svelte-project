import { writable } from 'svelte/store';
export const name = writable('');
//add array here to maintain app list items
export let todos = writable([]);
export let todo = writable('');
//todos = [todo,...todos];