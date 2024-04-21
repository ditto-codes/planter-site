<script>
  import Button from '$components/button.svelte'
</script>

<div class="hero">
  <div class="col left">
    <img class="planter-logo" src="temp-logotype.png" alt="logo" />
    <div class="copy">
      <p>Planter is a CLI for starting projects from a personal library of starters or from an existing repo. Start your next project using Planter.</p>
      <div class="buttons">
        <Button href="/docs/getting-started">Get Started</Button>
        <Button href="/garden" variant="ghost">The Garden</Button>
      </div>
    </div>
  </div>

  <div class="col right">
    <img class="planter-graphic desktop" src="hero-plant.png" alt="plant graphic"/>
    <img class="planter-graphic mobile" src="hero-plant-m.png" alt="plant graphic"/>
  </div>
</div>

<style lang="scss">
  .hero {
    display: flex;
    column-gap: sp(2);
    padding: sp(4);

    @include bp(lg, down) {
      flex-direction: column-reverse;
      padding: 0;
    }
  }

  .copy {
    padding-left: sp(4.5);
    max-width: 475px;
    @include bp(lg, down) {
      padding-left: 0;
      text-align: center;
      margin-top: sp(1);
    }
  }

  .col.left {
    width: 60%;
    @include bp(lg, down) {
      padding: sp(2) sp(4) sp(4);
    }
  }

  .col.right {
    width: 40%;
  }

  img {
    display: block;
    width: 100%;
  }

  .planter-logo {
    max-width: 700px;
  }

  .planter-graphic {
    max-width: 475px;
    @include bp(lg, down) {
      max-width: 240px;
    }
    @include bp(sm, down) {
      max-width: 120px;
    }

    &.desktop {
      @include bp(lg, down) {
        display: none;
      }
    }
    &.mobile {
      display: none;
      width: 100%;
      max-width: unset;
      @include bp(lg, down) {
        display: block;
      }
    }
  }

  .col {
    display: flex;
    flex-direction: column;
    place-content: center;
    @include bp(lg, down) {
      width: 100% !important;
      align-items: center;
    }
  }

  .buttons {
    display: inline-flex;
    margin-top: sp(4.6);
    column-gap: sp(2.5);

    @include bp(sm, down) {
      margin-top: sp(2);
      flex-direction: column;
      row-gap: sp(2);
      & > :global(*) {
        width: 100%;
        display: block;
      }
    }
  }

</style>