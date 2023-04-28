<script>
  import { user } from '$lib/stores'
  import Header from '$lib/Header.svelte'
</script>

<Header title="Stats" />

<div>
  <table class="table is-striped">
    <thead>
      <tr>
        <th>20m Sprint Time (s)</th>
        <th>Broad Jump Distance (m)</th>
        <th>3-Cone Drill Time (s)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>3.25</td>
        <td>2.80</td>
        <td>7.90</td>
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
