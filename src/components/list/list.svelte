<script>
  export let title;
</script>

<div class="list">
  <div class="title">{title}</div>
  <ul><slot/></ul>
</div>

<style lang="scss">
  .list {
    // border: 2px solid $burlap-300;
    background-color: $burlap-200;
    border-radius: $border-radius-xl;
    padding: sp(2.5);
    max-width: 475px;
    margin: 0 auto;
    text-align: left;
    min-height: 509px;
  }
  .title {
    color: $gray;
    margin-bottom: sp(2);
    font-size: sp(1.8);
    font-weight: 500;
    margin-top: sp(-.5);
    font-family: $font-family-monospace;
    letter-spacing: -1px;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
</style>