<script>
  import '$styles/style.scss';
  import Nav from '$components/nav.svelte';
</script>

<Nav />
<div class="home-layout">
  <slot/>
</div>

<style lang="scss">
  .home-layout {
    padding-top: $nav-height;
    @include mobile {
      padding-top: $mobile-nav-height;
    }
  }
</style>