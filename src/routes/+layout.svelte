<script>
  import '../styles/style.scss';
  import Nav from '$components/nav.svelte';
</script>

<Nav />
<div class="layout">
  <div class="header">
    <slot name="header" />
  </div>
  <div class="content">
    <slot/>
  </div>
</div>

<style lang="scss">
  .layout {
    // Size of nav
    padding-top: sp(7.5);
  }
</style>