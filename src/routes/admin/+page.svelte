<script>
  import { getAll } from '$lib/db'
  import { onMount } from 'svelte/internal'
  import Header from '$lib/Header.svelte'

  let playerInfo = []

  onMount(async () => {
    playerInfo = await getAll()
    console.table(playerInfo)
  })
</script>

<Header title="Admin" />
