<script>
  import { page } from '$app/stores';
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { onDestroy, onMount } from 'svelte'

  import Icon from '$components/icon.svelte'
  $: ({ nav: links } = $page.data);
  
  let url;
  $: url = $page.url.pathname;
  
  let open = false;

  const toggle = () => {open = !open};
  let mobileNavElement;

  function clickOutside(e) {
    const isOutside = !mobileNavElement.contains(e.target);
    if (isOutside && open) toggle();
  }

  onMount(() => {
    document.addEventListener('click', clickOutside);
    return () => document.removeEventListener('click', clickOutside);
  });

</script>

<div class="mobile-nav" bind:this={mobileNavElement}>
  <button class="menu-button" on:click={toggle}>
    <div class="menu-icon" class:open>
      <Icon name="chevron-down" size="20"/>
    </div>
    <div class="menu-text">Menu</div>
  </button>

  {#if open}
    <nav transition:slide|global={{ duration: 300, easing: quintOut}}>
      <ul>
        {#each links as link}
          <li>
            <a 
              class={url === link.url ? 'current' : ''}
              href="{link.url}"
              on:click={toggle}
            >
              {link.title}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  {/if}
  
</div>

<style lang="scss">


.mobile-nav {
  display: none;
  position: fixed;
  padding: 0 $content-spacer;
  z-index: 100;
  width: 100%;
  height: $docs-mobile-nav-height;
  align-items: center;
  background-color: $paper-400;
  border-bottom: 1px solid $kelp;
  z-index: 99;

  @include tablet {
    display: flex;
  }
  @include mobile {
    padding: 0 $content-spacer-mobile;
  }
}

nav {
  position: absolute;
  top: $docs-mobile-nav-height;
  left: 0;
  width: 100%;
  background-color: $paper-500;
  border-bottom: 1px solid $kelp;
  padding: sp(2) $content-spacer;

  @include mobile {
    padding: $content-spacer-mobile;
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  font-size: sp(1.8);
  a {
    color: $gray;
    text-decoration: none;
    padding: sp(.5);
    display: inline-block;
    background-color: transparent;

    @media (hover: hover) {
      &:hover {
        color: $coral;
      }
    }
  }
}

.current {
  color: $black;
}

.menu-button {
  background: transparent;
  border: none;
  padding: 0;
  color: $black;  
}

.menu-icon {
  pointer-events: none;
  transition: 200ms ease-out;
}
.menu-icon.open {
  transform: rotate(-180deg);
}

.menu-button, .menu-icon, .menu-text {
  display: flex;
  align-items: center;
}

.menu-text {
  padding: 1px 0 0 sp(.5);
  line-height: 1;
}

</style>