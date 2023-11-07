<script>
  import '$styles/style.scss';
  import Nav from '$components/nav.svelte';
</script>

<Nav />
<slot/>

<style lang="scss">
  .layout {
    padding-top: $nav-height;
    @include mobile {
      padding-top: $mobile-nav-height;
    }
  }
</style>