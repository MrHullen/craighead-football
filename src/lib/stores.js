import { writable } from 'svelte/store'

export const user = writable({
  uid: undefined,
  name: undefined,
  email: undefined,
})
