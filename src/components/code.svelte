<pre><code><slot/></code></pre>

<style lang="scss">
  pre {
    background-color: $kelp;
    color: $paper;
    padding: sp(1.3 2 1.5);
    max-width: 425px;
    margin: 0 auto;
    border-radius: $border-radius;
    font-weight: 500;
  }
  code {
    background-color: inherit;
    color: inherit;
    padding: 0;
  }
  code :global(span) {
    color: $aloe;
    font-weight: 700;
  }
</style>