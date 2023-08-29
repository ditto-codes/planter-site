<script>
  export let links = [];
  import { page } from '$app/stores';
  let url;
  $: url = $page.url.pathname;
</script>

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

<style lang="scss">
  .current {
    color: $black; 
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  a {
    color: $gray;
    text-decoration: none;
    display: block;
    padding: sp(.875);
    transition: $animate-faster ease-out;
    &:hover {
      border-radius: 7px;
      &.current {
        color: $black;
      }
    }
  }
</style>