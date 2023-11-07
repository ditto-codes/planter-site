<script>
  import PlanterCard from '$components/planter-card.svelte';
  import planters from '$content/planters.js'
  
</script>

<div class="intro">
  <h1 class="heading">The Garden</h1>
  <p>Here you can find official and community&nbsp;planters.</p>
</div>

<ul>
  {#each planters as planter}
    <li><PlanterCard {...planter} /></li>
  {/each}
</ul>

<div class="submit">
  <h2 class="heading">Submit Your Planter</h2>
  <p>Open an issue in <a href="https://www.github.com/ditto-codes/planter-site">this repo</a> to submit your own&nbsp;planter.</p>
</div>

<style lang="scss">
  .heading {
    // TODO: make this right
    font-family: 'Quincy CF';
    font-weight: 800;
    line-height: 1.2;
  }
  h1 {
    font-size: 4.0rem;
    @include tablet {
      font-size: 3.5rem;
    }
    @include mobile {
      font-size: 2.8rem;
    }
  }
  h2 {
    // TODO: make this right
    font-size: 3.0rem;
    @include tablet {
      font-size: 2.5rem;
    }
    @include mobile {
      font-size: 2rem;
    }
  }
  ul {
    list-style-type: none;
    display: flex;
    padding: 0;
    margin: 0 sp(-1.5);
    margin-bottom: sp(4);
    flex-wrap: wrap;
  }
  li {
    width: calc(100% / 3);
    padding: sp(1.5);
    min-width: 300px;
    @include bp(xl, down) {
      width: calc(100% / 2);
    }
    @include bp(md, down) {
      width: 100%;
      max-width: unset;
      min-width: unset;
    }
  }
</style>