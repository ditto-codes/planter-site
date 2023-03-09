<script>
  import '../styles/style.scss';
  import Nav from '$components/nav.svelte';
</script>

<Nav />
<div class="layout">
  <slot />
</div>

<style lang="scss">
  .layout {
    // Size of nav
    padding-top: sp(7.5);
  }
</style>