<script>
  import '$styles/style.scss';
  import Nav from '$components/nav.svelte';
</script>

<Nav />

<div class="layout">
  <slot />
</div>

<style lang="scss">
  .layout {
    padding-top: $nav-height;
    max-width: $page-max-width;
    margin: 0 auto;

    @include mobile {
      padding-top: $mobile-nav-height;
    }
  }
</style>