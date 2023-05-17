<script>
  import HeadingLink from './heading-link.svelte';
  import HR from './heading-hr.svelte';
</script>

<HeadingLink>
  <h2>
    <slot/>
  </h2>
</HeadingLink>
<HR />

<style lang="scss">
  h2 {
    margin-top: 3.5rem;
    margin-bottom: .5rem;
  }
</style>