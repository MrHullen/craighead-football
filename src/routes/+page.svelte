<script>
  import Login from '$lib/Login.svelte'
  import Attendance from '$lib/Attendance.svelte'
  import Stats from '$lib/Stats.svelte'
  import { user } from '$lib/stores'

  let authed = false
</script>

{#if $user.uid}
  <!-- <Attendance />
  <Stats /> -->
  <p>You are signed up with email: {$user.email}</p>
{:else}
  <Login />
{/if}
