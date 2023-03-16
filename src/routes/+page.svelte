<script>
  import Button from '$components/button.svelte';
</script>

<div class="splash">
  <img src="/planter-logo.png" alt="">
  <h1>Planter Svelte</h1>
  <p>Welcome to Planter Svelte!</p>
  <Button href="/docs/getting-started">Docs</Button>
  <span class="spacer"></span>
  <Button href="/demo/typography">Demo</Button>
</div>

<style lang="scss">
  .splash {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .spacer {
      margin-left: sp(sm);
    }
  }
</style>