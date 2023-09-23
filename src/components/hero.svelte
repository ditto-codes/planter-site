<script>
  import Button from '$components/button.svelte'
</script>

<div class="hero">
  <div class="col left">
    <img src="temp-logotype.png" alt="logo" />
    <div class="copy">
      <p>Planter is a tool for starting projects from a personal library of starters or from an existing repo. Start your next project using Planter.</p>
      <div class="buttons">
        <Button href="/docs/getting-started">Get Started</Button>
        <Button href="/garden" variant="ghost">The Garden</Button>
      </div>
    </div>
  </div>

  <div class="col right">
    <img src="hero-plant.png" alt="plant"/>
  </div>
</div>

<style lang="scss">
  .hero {
    display: flex;
    column-gap: sp(2);
    padding: sp(4);
  }

  .copy {
    padding-left: sp(4.5);
    max-width: 475px;
  }

  .col.left {
    width: 60%;
    & img {
      max-width: 700px;
    }
  }

  .col.right {
    width: 40%;
    & img {
      max-width: 475px;
    }
  }


  img {
    display: block;
  }

  .col {
    display: flex;
    flex-direction: column;
    place-content: center;
  }

  .buttons {
    display: flex;
    margin-top: sp(4.6);
    column-gap: sp(2.5);
  }

</style>