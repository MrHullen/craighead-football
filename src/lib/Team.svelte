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

<Header title="Team" />

<div>
  <table class="table is-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Practices Attended</th>
        <th>Games Played</th>
      </tr>
    </thead>
    <tbody>
      {#each playerInfo as player}
        {#if player}
          <tr>
            <td>
              {player.name ? player.name : 'Pending'}
            </td>
            <td>
              {player.email}
            </td>
            <td>
              {player.practices}
            </td>
            <td>
              {player.games}
            </td>
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
  }
</style>
