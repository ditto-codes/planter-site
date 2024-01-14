<script>
  export let dark = false;
</script>

<footer class:dark>
  MIT Licensed  | &copy; 2024 Matthew & Matt at Ditto Labs
</footer>

<style lang="scss">
  footer {
    // background-color: $burlap-100;
    color: $dark-gray-400;
    padding: sp(1.6 1);
    text-align: center;
    border-top: 1px solid $kelp;
  }
  .dark {
    background-color: $kelp-dark-400;
    color: $white;
    border-top: 0;
  }
</style>