<script>
import { page } from '$app/stores';

  let url;
  $: url = $page.url.pathname;

  const links = {
    home: '/',
    docs: '/docs/getting-started',
    garden: '/garden',
    github: 'https://github.com/ditto-codes/planter',
  }
</script>

<div class="nav-container">
  <div class="side-col left" />
  <div class="center-col">
    <nav>
      <a class="logo" href="{links.home}" alt="Home">
        <img src="/planter-logo.png" alt="Planter logo" />
      </a>
      <ul>
        <li><a href="{links.docs}" class={url === links.docs ? 'current' : ''}>Docs</a></li>
        <li><a href="{links.garden}" class={url === links.garden ? 'current' : ''}>The Garden</a></li>
        <li><a href="{links.github}">GitHub</a></li>
      </ul>
    </nav>
  </div>
  <div class="side-col" />
</div>
<style lang="scss">
  .nav-container {
    display: flex;
    border-bottom: 1px solid $kelp;
    position: fixed;
    z-index: 100;
    background-color: $paper;
    width: 100%;
    justify-content: center;
  }
  .center-col {
    width: 100%;
    max-width: 1000px;
  }
  .side-col {
    flex: 1;
  }
  .left {
    min-width: $sidebarWidth;
    width: 20%;

    @include tablet {
      display: none;
    }

  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: sp(7.5);
    padding: sp(0 3);
    width: 100%;
  }
  img {
    display: block;
    height: 40px;
  }
  ul {
    list-style: none;
  }
  li {
    display: inline-block;
    margin-left: sp(.25);
  }
  a {
    color: $kelp;
    text-decoration: none;
    font-size: 1.8rem;
    padding: sp(.875);
    transition: $animate-faster ease-out;
    &:hover {
      border-radius: 7px;
      &.current {
        color: $black;
      }
    }
  }
  
  .current {
    color: $black; 
  }
</style>
