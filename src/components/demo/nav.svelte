<!--
  
  NAV
  
  Quickly compose a site navigation by passing an object to this component
  
-->
<script>
  export let { class: className } = '';
  export let links = [];
  export let align = 'left';
  let classes = `${align}`;
  if (className) classes += ` ${className}`;
</script>

<!-- RENDER
────────────────────────────────── -->
<nav class={classes} {...$$restProps}>
  
  <ul class={align}>
    <slot name="before" />
    {#if links}
      {#each links as link}
        <li>
          <a class="link" href={link.href} rel={link.rel ? link.rel : ''}>{link.text}</a>
        </li>
      {/each}
    {/if}
    <slot name="after" />
  </ul>
</nav>

<!-- STYLES
────────────────────────────────── -->
<style lang="scss">
  nav {
    background-color: $canvas;
    border-bottom: 1px solid $gray-100;
    padding: sp(md);
    display: flex;
    align-items: center;

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      width: 100%;
    }

    li {
      padding: sp(xs) sp(sm);
      list-style: none;
      display: inline-block;
    }
  }

  .link {
    color: $gray;
    font-weight: 500;
    text-decoration: none;

    &:hover, 
    &:focus-visible {
      color: $blue;
      background-color: transparent;
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: sp(xs);
    }

    $focus-outline: 2px solid $purple;
    $border: $border-width solid transparent;
    &:focus-visible {
      border-radius: $border-radius;
      outline-offset: 2px; 
      outline: $focus-outline;
    }
  }
  
  .left {
    justify-content: flex-start;
  }

  .center {
    justify-content: center;
  }

  .right {
    justify-content: flex-end;
  }
</style>

