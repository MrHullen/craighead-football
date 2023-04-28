<script>
  import { user } from '$lib/stores'
  import Header from '$lib/Header.svelte'
</script>

<Header title="Attendance" />

<div>
  <table class="table is-striped">
    <thead>
      <tr>
        <th>Practice Attendance</th>
        <th>Games Played</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{$user.practices ? $user.practices : 'Pending'}</td>
        <td>{$user.games ? $user.games : 'Pending'}</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
  }
</style>
