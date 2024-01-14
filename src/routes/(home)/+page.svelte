<script>
  import IntersectionObserver from 'svelte-intersection-observer';
  import Button from '$components/button.svelte';
  import Code from '$components/code.svelte';
  import List from '$components/list/list.svelte';
  import ListItem from '$components/list/item.svelte';
  import Hero from '$components/hero.svelte';
  import Footer from '$components/footer.svelte';

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
          <ListItem key={0}>my-planter</ListItem>
          <ListItem key={1}>vite-starter</ListItem>
          <ListItem key={2}>basic</ListItem>
          <ListItem key={3}>svelte</ListItem>
          <ListItem key={4}>cowboy-stuff</ListItem>
        {/if}
      </List>
    </div>
  </IntersectionObserver>

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
  
  <IntersectionObserver element={animationNodeCreate} threshold={.8} let:intersecting once>
    <div class="graphic-group create-libraries" bind:this={animationNodeCreate} class:animate={intersecting}>
      <div class="animation-container lib">
        <List title="My Library">
          <ListItem>my-planter</ListItem>
          <ListItem>vite-starter</ListItem>
          <ListItem>basic</ListItem>
          <ListItem>svelte</ListItem>
          <ListItem>cowboy-stuff</ListItem>
        </List>
        <div class="animation-spacer"/>
      </div>
     <div class="animation-container dir">
        <div class="animation-spacer">
          <!-- Placeholder for size -->
          <List title="My Library">
            <ListItem>my-planter</ListItem>
            <ListItem>vite-starter</ListItem>
            <ListItem>basic</ListItem>
            <ListItem>svelte</ListItem>
            <ListItem>cowboy-stuff</ListItem>
          </List>
        </div>
        <List title="./my-dir">
          <ListItem type="fill">
            my-planter
          </ListItem>
        </List>
      </div>
    </div>
  </IntersectionObserver>
  
</section>
<div class="spacer" />
<section class="garden-cta full-width">
  <h2>Visit <a href="/garden">The Garden</a></h2>
  <p>Try our official planters or submit your own.</p>
</section>
<section class="why-planter full-width">
  <div class="why-planter-bg background-img">
    <img src="/ditto-codes-banner.png" alt="Background Plant"/>
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
  section:not(.hero) {
    @include bp(lg, down) {
      padding-left: sp(3);
      padding-right: sp(3);
    }
    @include bp(md, down) {
      padding-left: sp(2);
      padding-right: sp(2);
    }
  }
  h2 {
    font-family: $display-font-family;
    font-weight: $display-font-weight;
    font-size: $display-font-size;
    letter-spacing: $display-letter-spacing;
    @include bp(md, down) {
      font-size: minmax(320px, md, 32px, 56px);
    }
  }
  p, li {
    font-family: $font-family-serif;
    font-weight: 500;
    font-size: sp(2.2);
    margin-bottom: sp(.5);
    @include bp(lg, down) {
      font-size: sp(1.6);
    }
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
    :global(code) {
      text-wrap: wrap;
    }
  }

  .spacer {
    margin-top: minmax(sm, full, 60, 200);
  }
  
  .create-libraries {
    display: flex;
    place-items: center;
    place-content: center;
    & > :global(*) {
      width: 100%;
    }

    @include bp(lg, down) {
      display: none;
    }
  }

  .buttons {
    display: flex;
    margin-top: sp(4.6);
    // TODO: test column gap on iOS Safari
    column-gap: sp(2.5);
    
    @include bp(lg, down) {
      justify-content: center;
      column-gap: sp(2);
      margin-top: sp(3);
    }
    @include bp(350px, down) {
      flex-direction: column;
      align-items: center;
      row-gap: sp(2.5);
      & > :global(*) {
        display: block;
        width: 80%;
      }
    }
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

    h2 {
      font-family: $display-font-family;
      font-weight: $display-font-weight;
      font-size: sp(4.8);
      letter-spacing: $display-letter-spacing;
      @include bp(md, down) {
        font-size: minmax(320px, md, 24px, 48px);
      }
    }
    a {
      text-decoration: none;
    }
  }
  .why-planter {
    position: relative;
    margin-top: 0;
    margin-bottom: 0;
    text-align: left;
    background-color: #232323;
    color: white;
    
    padding: sp(8.5);
    @include bp(lg, down) {
      padding: sp(4) sp(3);
    }
    @include bp(md, down) {
      padding: sp(3) sp(2);
    }

    .why-planter-bg {
      height: 100%;
      pointer-events: none;
      img {
        mix-blend-mode: overlay;
        opacity: 0.3;
        height: 100%;
        // max-width: 100%;
        object-fit: cover;
        width: 100%;
      }
    }
    .inner {
      max-width: $page-max-width;
      margin: 0 auto;
      @include bp(lg, down) {
        width: 100%;
      }
    }
    p {
      margin-top: sp(5);
      margin-bottom: 0;
      @include bp(lg, down) {
        margin-top: sp(3);
      }
      span {
        font-weight: 700;
      }
    }
    ul {
      margin: sp(2) 0 0;
      padding-left: sp(3);
    }
  }
</style>