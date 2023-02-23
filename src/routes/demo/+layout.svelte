<!--
  
  DEMO page
  
-->

<script>
  import Button from '$components/button.svelte';
  import Nav from '$components/demo/nav.svelte';
  import Sidebar from '$components/demo/sidebar.svelte';
  import GitHubMark from '$components/demo/github-mark.svelte';

  let links = [
    { href: 'https://planter.dev', text: 'Docs'}, 
  ];

</script>

<!-- RENDER
────────────────────────────────── -->
<div class="demo-container">
  <Nav align="right" links={links} role="Secondary">
    <li class="logo-wrapper" slot="before">
      <a href="/" class="logo">
        <img src="/planter-logo.png" alt="Planter Svelte" title="Home">
      </a>
      <span class="h6">Planter Svelte</span>
    </li>
    <li slot="after">
      <Button variant="unstyled" href="https://github.com/ditto-labs-co/planter-svelte">
        <GitHubMark name="github" alt="GitHub" title="View on GitHub" />
      </Button>
    </li>
  </Nav>
  <div class="layout">
    <Sidebar />
    <div class="demo-body-scroll">
      <div class="demo-body">
        <slot/>    
      </div>
    </div>
  </div>
</div>


<!-- STYLES
────────────────────────────────── -->

<style lang="scss">

  .demo-body {
    margin: sp(md);
    
  }
  .demo-body-scroll {
    overflow-y: auto;
  }

  .demo-container {
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
  }
  .layout {
    display: grid;
    grid-template-columns: auto 1fr;
    min-height: 100%;
  }
  
  .logo {
    display: inline-block;
    img {
      width: 36px;
    }
    &:hover {
      background-color: transparent;
    }
  }
  .logo-wrapper {
    justify-self: start;
    margin-right: auto;
    span {
      margin-bottom: 0;
    }
  }  

  a {
    $focus-outline: 2px solid $burlap;
    $border: $border-width solid transparent;
    &:focus-visible {
      // border: $border;
      border-radius: $border-radius;
      outline-offset: 2px; 
      outline: $focus-outline;
    }
  }
  
  li {
    padding: sp(xs) sp(sm);
    list-style: none;
    display: inline-block;

    display: flex;
    align-items: center;
  }
  
</style>