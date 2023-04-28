<script>
  import Login from '$lib/Login.svelte'
  import Attendance from '$lib/Attendance.svelte'
  import Stats from '$lib/Stats.svelte'
  import Team from '$lib/Team.svelte'
  import { user } from '$lib/stores'
  import Header from '../lib/Header.svelte'
</script>

{#if $user.uid}
  <Header title={$user.name} src={$user.photo} />
  <Attendance />
  <!-- <Stats /> -->
  <Team />
{:else}
  <Login />
{/if}
