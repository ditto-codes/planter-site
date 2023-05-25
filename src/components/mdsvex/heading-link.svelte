<!-- TODO
  Make it so when clicking the heading links, 
  the page doesn't jump to the top of the scroll container

  Add click to copy to clipboard
-->
<script>
  import { page } from '$app/stores';
  
  function linkify(node) {
    let jump = node.querySelector('.jump');
    let heading = node.querySelector('.heading');
    let anchor = node.querySelector('a');

    let text = heading.firstChild.innerText;
    let id = text
      .replace(/[\s\_\&\:\;\,\+]+/g, '-')
      .toLowerCase();

    anchor.href = '#' + id;
    jump.id = id;
  }

  function copy() {
    let url = $page.url.href;
    navigator.clipboard.writeText(url);
  }

</script>

<div use:linkify>
  <div class="jump" />
  <!-- svelte-ignore a11y-missing-attribute -->
  <div class="heading">
    <slot/>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <a on:click={copy} class="link-hash">#</a>
  </div>
</div>

<style lang="scss">
  // a :global(h1),
  // a :global(h2),
  // a :global(h3),
  // a :global(h4),
  // a :global(h5),
  // a :global(h6) {
  //   margin-bottom: 0;
  // }
  .heading {
    position: relative;
    display: block;
    &:hover {
      .link-hash {
        opacity: 1;
      }
    }
  }
  .link-hash {
    // Reset button styles
    background: none;
    border: 0;
    padding: 0;
    // Actual styles
    opacity: 0;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-left: sp(-2.25);
    padding: sp(1.5 .5);
    color: $coral;
    transition: $animate-fast;
    user-select: none;
    text-decoration: none;
    font-size: 2rem;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: .2em;
      text-decoration-thickness: 1.5px;
    }
  }

  .jump {
    display: block;
    position: relative;
    top: -225px;
    visibility: hidden;
  }
</style>