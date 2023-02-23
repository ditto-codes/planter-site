<script>
  export let label = '';
  export let top = false;
</script>

<div class="container" class:top>
  <h3 class="label">
    {label}
  </h3>
  <div class="example">
    <slot/>
  </div>
</div>


<style lang="scss">
  .container {
    display: grid;
    grid-template-columns: 100px 1fr;
    margin-bottom: sp(xl);
    align-items: center;
  }
  .top {
    align-items: unset;
  }
  .label {
    font-size: $small-font-size;
    color: $gray-300;
    font-weight: 400;
    font-family: $font-family-monospace;
    margin-bottom: 0;
  }
  .example :global(*) {
    margin-bottom: 0;
  }
</style>