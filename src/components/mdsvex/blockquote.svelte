<blockquote>
  <slot />
</blockquote>

<style lang="scss">
  blockquote {
    background-color: $burlap-100;
    border: 1px solid $burlap-500;
    border-left: 5px solid $burlap-500;
    margin: 0;
    padding: sp(1.6);
    border-radius: 3px;
  }
  :global(blockquote > p) {
    margin: 0;
  }
  :global(blockquote > p + p) {
    margin-top: sp(1);
  }
</style>