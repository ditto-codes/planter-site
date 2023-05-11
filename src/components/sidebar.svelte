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
  li {
    margin-bottom: sp(1);
  }
  a {
    color: $gray;
    text-decoration: none;
    display: block;
    &:hover {
      // TODO: cool ghost-y hover state later
    }
  }
</style>