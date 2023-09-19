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
  <nav>
    <a class="logo" href="{links.home}" alt="Home">
      <img src="/logo-type.svg" alt="Planter logo" />
    </a>
    <ul>
      <li><a href="{links.docs}" class={url === links.docs ? 'current' : ''}>Docs</a></li>
      <li><a href="{links.garden}" class={url === links.garden ? 'current' : ''}>The Garden</a></li>
      <li><a href="{links.github}">GitHub</a></li>
    </ul>
  </nav>
  <!-- <div class="side-col left" />
  <div class="center-col">
    
  </div>
  <div class="side-col" /> -->
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
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: $nav-height;
    padding: 0 calc(#{$content-spacer} - .875rem);
    width: 100%;
    max-width: $page-max-width;
    margin: 0 auto;
    @include mobile {
      padding: 0 calc(#{$content-spacer-mobile} - .875rem);
      height: $mobile-nav-height;
    }
    @include bp(sm, down) {
      padding: 0 calc(#{$content-spacer-mobile} - .5rem);
    }
  }
  img {
    display: block;
    height: 30px;
    @include mobile {
      height: 30px;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    display: inline-block;
    margin-left: sp(.25);
    @include mobile {
      margin-left: 0;
    }
  }
  a {
    color: $kelp;
    text-decoration: none;
    font-size: 1.8rem;
    padding: .875rem;
    transition: $animate-faster ease-out;
    
    @media (hover: hover) {
      &:hover {
        border-radius: 7px;
        &.current {
          color: $black;
        }
      }
    }

    @include tablet {
      font-size: 1.6rem;
      padding: .875rem;
    }
    @include bp(sm, down) {
      font-size: 1.5rem;      
      padding: .5rem;
    }
  }
  
  .current {
    color: $black; 
  }
</style>
