<script>
  export let title = 'Section Title';
</script>

<section>
  <div class="heading">
    <h2 class="h4">
      {title}
    </h2>
  </div>
  {#if $$slots.description}
    <div class="description">
      <slot name="description" />
    </div>
  {/if}
  <slot/>
</section>

<style lang="scss">

  section {
    margin-bottom: sp(xxl);
  }

  .heading {
    padding-bottom: sp(1.25);
    margin-bottom: sp(md);
    border-bottom: solid $gray 1px;
    :global(*) {
      padding: 0;
      margin: 0;
    }
  }

  .description {
    margin-bottom: sp(xxl);
    
    :global(code) {
      color: $red-400;
    }
  }

</style>