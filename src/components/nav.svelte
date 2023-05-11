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

<style lang="scss">
  nav {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: sp(7.5);
    width: 100%;
    padding: sp(0 3);
    background-color: $paper;
    border-bottom: 1px solid $kelp;
    z-index: 100;
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
