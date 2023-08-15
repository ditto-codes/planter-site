<script>
  import { page } from '$app/stores';
  $: ({ sidebar: links } = $page.data);
  let url;
  $: url = $page.url.pathname;
  
  import Icon from '$components/icon.svelte'


  let open = false
</script>

<div class="mobile-nav">
  <button class="menu-button" on:click={() => {open = !open}}>
    <div class="menu-icon">
      <Icon name="menu" size="20"/>
    </div>
    <div class="menu-text">Menu</div>
  </button>

  {#if open}
    <nav>
      <ul>
        {#each links as link}
          <li>
            <a 
              class={url === link.url ? 'current' : ''}
              href="{link.url}"
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
  margin-top: $navHeight;
  padding: 0 $content-spacer;
  z-index: 100;
  width: 100%;
  height: $mobileNavHeight;
  align-items: center;
  background-color: $paper-400;
  border-bottom: 1px solid $kelp;
  z-index: 99;

  @include tablet {
    display: flex;
  }
}

.menu-button {
  background: transparent;
  border: none;
  padding: 0;
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