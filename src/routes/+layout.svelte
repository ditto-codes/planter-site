<script>
  import '$styles/style.scss';
  import Nav from '$components/nav.svelte';
  import MobileNav from '$components/mobile-nav.svelte'
</script>

<Nav />
<MobileNav/>

<div class="layout">
  <slot />
</div>

<style lang="scss">
  .layout {
    padding-top: $navHeight;

    @include tablet {
      padding-top: calc($navHeight + $mobileNavHeight);
    }

  }
</style>