<!-- TODO
  Make it so when clicking the heading links, 
  the page doesn't jump to the top of the scroll container

  Add click to copy to clipboard
-->
<script>
  let node;

  function linkify(node) {
    let text = node.firstChild.innerText;
    console.log('node.firstChild.innerText', text);
    let id = text
      .replace(/[\s\_\&\:\;\,\+]+/g, '-')
      .toLowerCase();

    node.href = '#' + id;
    node.id = id;
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a class="unstyled" bind:this={node} use:linkify>
  <slot/>
  <span class="link-hash">#</span>
</a>

<style lang="scss">
  a :global(h1),
  a :global(h2),
  a :global(h3),
  a :global(h4),
  a :global(h5),
  a :global(h6) {
    margin-bottom: 0;
  }
  a {
    position: relative;
    display: block;
    &:hover {
      .link-hash {
        opacity: 1;
      }
    }
  }
  .link-hash {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-left: sp(-1.5);
    color: $coral;
    transition: $animate-faster;
  }
</style>