<script>
  import IntersectionObserver from 'svelte-intersection-observer';
  import Button from '$components/button.svelte';
  import Code from '$components/code.svelte';
  import List from '$components/list';
  import Hero from '$components/hero.svelte';
  import Footer from '$components/footer.svelte';

  import { fade } from 'svelte/transition';

  let animationNodeLibrary;
  let animationNodeCreate;

</script>

<section class="hero">
  <Hero/>
</section>
<div class="spacer" />
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
  <IntersectionObserver element={animationNodeLibrary} threshold={.8} let:intersecting once>
    <div class="graphic-group library" bind:this={animationNodeLibrary}>
      <List title="My Library">
        {#if intersecting}
          <List.Item key={0}>my-planter</List.Item>
          <List.Item key={1}>vite-starter</List.Item>
          <List.Item key={2}>basic</List.Item>
          <List.Item key={3}>svelte</List.Item>
          <List.Item key={4}>cowboy-stuff</List.Item>
        {/if}
      </List>
    </div>
  </IntersectionObserver>

</section>
<div class="spacer" />
<section>
  <h2>Create</h2>
  <div class="description">
    <p>Clone your saved planter with no git history.</p>
  </div>
  <div class="shell-example">
<Code><span>planter create </span>user/project my-planter</Code>
  </div>
  
  <IntersectionObserver element={animationNodeCreate} threshold={.8} let:intersecting once>
    <div class="graphic-group create-libraries" bind:this={animationNodeCreate} class:animate={intersecting}>
      <div class="animation-container lib">
        <List title="My Library">
          <List.Item>my-planter</List.Item>
          <List.Item>vite-starter</List.Item>
          <List.Item>basic</List.Item>
          <List.Item>svelte</List.Item>
          <List.Item>cowboy-stuff</List.Item>
        </List>
        <div class="animation-spacer"/>
      </div>
     <div class="animation-container dir">
        <div class="animation-spacer">
          <!-- Placeholder for size -->
          <List title="My Library">
            <List.Item>my-planter</List.Item>
            <List.Item>vite-starter</List.Item>
            <List.Item>basic</List.Item>
            <List.Item>svelte</List.Item>
            <List.Item>cowboy-stuff</List.Item>
          </List>
        </div>
        <List title="./my-dir">
          <List.Item type="fill">
            my-planter
          </List.Item>
        </List>
      </div>
    </div>
  </IntersectionObserver>
  
</section>
<div class="spacer" />


<section class="garden-cta full-width">
  <p>Try out our <a href="/garden">official planters</a></p>
</section>

<section class="why-planter full-width">
  <div class="why-planter-bg background-img">
    <img src="ditto-codes-banner.png" alt="Background Plant"/>
  </div>
  <div class="inner">
    <h2>Why Planter?</h2>

    <p>Quickly cloning a repo with zero git history can be cumbersome, and managing a library of boilerplates isn't always easy. </p>

    <p>
      <span>Planter is a tool that enables you to...</span>
    </p>

    <ul>
      <li>
        Reduce friction when starting new projects from existing code.
      </li>
      <li>
        Quickly try out public repos in one line: <code>planter create&nbsp;&lt;repo-url&gt;</code>
      </li>
      <li>
        Maintain and re-use unpublished / non-repo directories via Local Planters.
      </li>
    </ul>

    <p>
      Be nice to your future self and get started with&nbsp;Planter.
    </p>

    <div class="buttons">
      <Button href="/docs/getting-started" variant="light">Get Started</Button>
      <Button href="/garden" variant="ghost light">The Garden</Button>
    </div>
  </div>
</section>


<Footer dark />

<style lang="scss">
  section {
    margin: sp(2) 0;
    text-align: center;
  }
  section:not(.full-width) {
    max-width: $page-max-width;
    margin: 0 auto;
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
    margin-top: sp(7.2);
    position: relative;
  }

  .animation-container {
    display: flex;
    padding: 0 15px;
    justify-content: center;

    :global(.list) {
      // so it fills the container without considering the spacers
      flex-grow: 1;
      margin: 0;
    }
  }

  .animation-container.lib {
    position: absolute;
    left: 0;
    top: 0;
  }

  .animation-container.dir {
    opacity: 0;
  }

  .animation-spacer {
    width: 0;
    max-width: 0;
  }

  .animate {
  
    .animation-spacer {
      animation: create 500ms cubic-bezier(0.85, 0, 0.15, 1) forwards;
    }

    .dir {
      animation: fade 500ms 250ms ease-in-out forwards;
    }
    .dir :global(.list ul) {
      animation: grow 500ms 400ms cubic-bezier(0.85, 0, 0.15, 1) forwards;
    }
    
  }
  .animation-container.dir :global(.list) {
    display: flex;
    flex-direction: column;
  }

  @keyframes grow {
    from {
      flex-grow: 0;
    }
    to {
      flex-grow: 1;
    }
  }

  @keyframes fade {
    5% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes create {
    from {
      opacity: 0;
      width: 0;
      max-width: 0;
    } to {
      opacity: 1;
      width: 100%;
      max-width: 505px;
    }
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
      // margin: 0 30px;
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
    background-color: $kelp-dark;
    color: $paper;
    margin-bottom: 0;
    p {
      font-family: $font-family-monospace;
    }
  }
  .why-planter {
    // background-color: $kelp-dark;
    background-color: #232323;
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
      height: 100%;
      pointer-events: none;
      img {
        mix-blend-mode: overlay;
        opacity: 0.3;
        height: 100%;
        max-width: 100%;
      }
    }
    .inner {
      width: 70%;
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
  
  // .ditto-codes {
  //   margin-top: 0;
  //   margin-bottom: 0;
  //   background-color: #232323;
  //   color: white;
  //   padding: sp(12);
  //   text-align: left;
  //   position: relative;
  //   overflow: hidden;
  //   @include bp(lg, down) {
  //     padding: sp(3);
  //   }
  //   h2 {
  //     font-size: sp(14.2);
  //   }
  //   p {
  //     margin-right: sp(3);
  //     width: calc(50% - sp(3));
  //     @include bp(lg, down) {
  //       width: 100%;
  //       margin-bottom: sp(3);
  //       margin-right: 0;
  //     }
  //   }
  //   .copy {
  //     display: flex;
  //     flex-wrap: wrap;
  //   }
  //   .ditto-codes-bg {
  //     img {
  //       opacity: .5;
  //       mix-blend-mode: overlay;
  //     }
  //   }
  // }
</style>