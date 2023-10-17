<script>
  import Button from '$components/button.svelte';
  import Code from '$components/code.svelte';
  import List from '$components/list';
  import Hero from '$components/hero.svelte';
  import Footer from '$components/footer.svelte';
</script>

<section class="hero">
  <Hero/>
</section>

<section>
  <h2>Add to your library.</h2>
  <div class="description">
    <p>Install the Planter CLI.</p>
    <p>Add a planter to your library.</p>
  </div>
  <div class="shell-example">
<Code>npm i -g @planter/cli
<span>planter add </span>user/project my-planter
</Code>
  </div>

  <div class="graphic-group library">
    <List title="My Library">
      <List.Item>my-planter</List.Item>
      <List.Item>vite-starter</List.Item>
      <List.Item>basic</List.Item>
      <List.Item>svelte</List.Item>
      <List.Item>cowboy-stuff</List.Item>
    </List>
  </div>

</section>
<div class="spacer" />
<section>
  <h2>Create.</h2>
  <div class="description">
    <p>Clone your saved planter with no git history.</p>
  </div>
  <div class="shell-example">
<Code><span>planter create </span>user/project my-planter</Code>
  </div>
  
  <div class="graphic-group create-libraries">   
    <List title="My Library">
      <List.Item>my-planter</List.Item>
      <List.Item>vite-starter</List.Item>
      <List.Item>basic</List.Item>
      <List.Item>svelte</List.Item>
      <List.Item>cowboy-stuff</List.Item>
    </List>
    <List title="My Library">
      <List.Item type="fill">
        my-planter
      </List.Item>
    </List>
  </div>
</section>
<div class="spacer" />
<section class="garden-cta">
  <p>Try out our <a href="/garden">official planters</a></p>
</section>

<section class="why-planter">
  <div class="why-planter-bg background-img">
    <img src="why-planter-plant.png" alt="Background Plant"/>
  </div>
  <div class="inner">
    <h2>Why Planter?</h2>
  
    <p>
      We have spent a lot of time starting projects—learning about 
      toolchains, trying out project starters from across the web, and
      even creating our own starters. What we discovered was that we 
      wanted a tool that gave us the ability to create a library of starters, 
      and an easy way to start new projects using that library.
    </p>
  
    <p>
      <span>Planter is a tool that enables you to...</span>
    </p>
  
    <ul>
      <li>
        save repos as planters to your library using planter add,
      </li>
      <li>
        start new projects with your saved planters using planter create,
      </li>
      <li>
        and even quickly use a repo as a starter without saving it, using <code>planter create&nbsp;repo-url</code>
      </li>
    </ul>
  
    <p>
      Along with creating Planter, we want to promote the value of well-made 
      reusable & shareable project starters. <a href="/garden">The Garden</a> is a place to 
      showcase our own starters as well as feature other ones we think 
      are&nbsp;great!
    </p>
  
    <p>
      Be nice to your future self and get started with&nbsp;Planter.
    </p>
  
    <div class="buttons">
      <Button href="/docs/getting-started" variant="light">Get Started</Button>
      <Button href="/garden" variant="ghost light">The Garden</Button>
    </div>
  </div>

</section>

<section class="ditto-codes">
  <div class="ditto-codes-bg background-img">
    <img src="ditto-codes-banner.png" alt="Background of Plant" />
  </div>
  <div class="h2-contain">
    <h2>ditto.codes</h2>
  </div>
  <div class="copy">
    <p>
      Planter was originally created by Matthew 
      Alicea in 2018 in order to have a project 
      starter for web projects without having to go 
      through a tedious setup process every time. 
      Since then, Planter has grown into a CLI 
      made to easily adopt and create your own 
      project starters with the same goal at heart: 
      spend less time setting up projects, and more 
      time&nbsp;creating!
    </p>
    <p>
      This iteration was built with the help of 
      Matthew Gluf who is a designer and self-taught 
      developer. Between the two they form Ditto Labs, 
      a collaborative effort to create helpful and 
      interesting web based products and&nbsp;tools.
    </p>
  </div>
</section>

<Footer dark />

<style lang="scss">
  section {
    margin: sp(2) 0;
    text-align: center;
  }
  h2 {
    font-family: $display-font-family;
    font-weight: $display-font-weight;
    font-size: $display-font-size;
    letter-spacing: $display-letter-spacing;
  }
  p, li {
    font-family: $display-font-family;
    font-weight: 500;
    font-size: sp(2.2);
    margin-bottom: sp(.5);
    a {
      &:hover {
        background-color: rgba($coral-400, 0.2);
      }
    }
  }
  .description {
    margin-bottom: sp(2);
  }

  .graphic-group {
    margin-top: sp(10);
  }
  
  .shell-example {
    text-align: left;
  }

  .spacer {
    margin-top: sp(20);
  }
  
  .create-libraries {
    display: flex;
    place-items: center;
    place-content: center;
    & > :global(*) {
      width: 100%;
      margin: 0 30px;
    }

    @include bp(lg, down) {
      flex-wrap: wrap;
      & > :global(*) {
        margin-top: 30px;
      }
    }
  }

  .buttons {
    display: flex;
    margin-top: sp(4.6);
    column-gap: sp(2.5);
  }

  .background-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .hero {
    text-align: left;
  }
  .garden-cta {
    padding: sp(6) 0;
    background-color: $light-gray;
    margin-bottom: 0;
    p {
      font-family: $font-family-monospace;
    }
  }
  .why-planter {
    background-color: $kelp-dark;
    color: white;
    text-align: left;
    padding: sp(12);
    margin-top: 0;
    margin-bottom: 0;
    position: relative;
    @include bp(lg, down) {
      padding: sp(3);
    }
    .why-planter-bg {
      right: 0;
      left: unset;
      img {
        mix-blend-mode: difference;
        opacity: 0.5;
      }
    }
    .inner {
      width: 60%;
      @include bp(lg, down) {
        width: 100%;
      }
    }
    p {
      margin-top: sp(5);
      margin-bottom: 0;
      span {
        font-weight: 700;
      }
    }
  }
  
  .ditto-codes {
    margin-top: 0;
    margin-bottom: 0;
    background-color: #232323;
    color: white;
    padding: sp(12);
    text-align: left;
    position: relative;
    overflow: hidden;
    @include bp(lg, down) {
      padding: sp(3);
    }
    h2 {
      font-size: sp(14.2);
    }
    p {
      margin-right: sp(3);
      width: calc(50% - sp(3));
      @include bp(lg, down) {
        width: 100%;
        margin-bottom: sp(3);
        margin-right: 0;
      }
    }
    .copy {
      display: flex;
      flex-wrap: wrap;
    }
    .ditto-codes-bg {
      img {
        opacity: .5;
        mix-blend-mode: overlay;
      }
    }
  }
</style>