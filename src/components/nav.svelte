<script>


</script>


<nav>
  <div class="logo">
    <img src="/planter-logo.png" alt="Planter logo" />
  </div>
  <ul>
    <li><a href="/docs">Docs</a></li>
    <li><a href="/garden">The Garden</a></li>
    <li><a href="https://github.com/ditto-codes/planter">GitHub</a></li>
  </ul>
</nav>

<style lang="scss">
  nav {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: sp(7.5);
    width: 100%;
    padding: sp(0 3);
    background-color: $paper;
    border-bottom: 1px solid $kelp;
  }
  img {
    display: block;
    height: 40px;
  }
  ul {
    list-style: none;
  }
  li {
    display: inline-block;
    margin-left: sp(1.5);
  }
  a {
    color: $kelp;
    text-decoration: none;
    font-size: 1.8rem;
    &:hover {
      // TODO: consider making pretty, 
      // like maybe ghost-button-y hover states
      text-decoration: underline;
    }
  }
</style>
