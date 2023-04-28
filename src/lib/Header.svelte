<script>
  export let title
  export let src
</script>

<section class="hero">
  {#if src}
    <div>
      <img class="is-round" {src} />
    </div>
  {/if}
  <div class="hero-body">
    <p class="title">{title}</p>
  </div>
</section>

<style>
  section.hero {
    display: flex;
    flex-direction: row;
  }
</style>
