<!--
  
  SIDEBAR
  
  Sidebar for demo organization.
  
-->

<script>  
  import { page } from '$app/stores';

  $: current = $page.url;

  export let { class: className } = '';
  export let links = {
    'Components': [
      'Button',
      'Icon',
    ],
    'Tokens': [
      'Typography',
      'Color',
    ]
  };

</script>

<!-- RENDER
────────────────────────────────── -->
<nav>
  
  <ul>
    {#each Object.keys(links) as heading}
      <li class="section">
        <p class="heading h6">{heading}</p>
        <ul>
          {#each links[heading] as link}
            <li>
              <a 
                href={`/demo/${link.toLowerCase()}`} 
                class={`link${current === `/demo/${link.toLowerCase()}` 
                  ? ' selected' 
                  : ''
                }`}
              >
                {link}
              </a>
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</nav>


<!-- STYLES
────────────────────────────────── -->
<style lang="scss">
  nav {
    background-color: $canvas;
    border-bottom: 1px solid $gray-100;
    padding: 0 sp(lg);
    width: 200px;

    ul {
      margin: 0;
      padding: 0;
    }

    li {
      margin: sp(xs) 0;
      list-style: none;
    }
  }

  .section {
    padding: 0;
  }

  .heading {
    padding: sp(xl) 0 sp(sm);
    margin: 0;
  }

  .link {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    padding: sp(sm sm);
    border-radius: 2px;
    transition: $animate-fast;
    color: $gray;
    
    &.selected {
      color: $blue; 
      background-color: rgba($blue-100, .5);
      &:hover,
      &:focus-visible {
        background-color: rgba($blue-100, .5);
      }
    }

    @mixin hover-state {
      color: $blue;
      background-color: rgba($blue-100, .25);
    }

    &:hover {
      @include hover-state;
    }

    &:focus-visible {
      @include hover-state;
      // Focus ring
      $focus-outline: 2px solid $purple;
      outline-offset: 2px;
      outline: $focus-outline;
    }
  }
</style>

