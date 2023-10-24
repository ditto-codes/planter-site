<script>
  export let type
  export let animate
</script>

<li class="{type}" class:animate><slot/></li>

<style lang="scss">
  li {
    font-size: sp(2.4);
    font-weight: 500;
    background-color: $burlap;
    color: $black;
    border: 2px solid $burlap-600;
    box-shadow: 3px 5px 0px 0px $burlap-600;
    border-radius: $border-radius-xl;
    padding: sp(1.7 2.5);
    margin-bottom: sp(1.5);
    &:last-of-type {
      margin-bottom: 0;
    }

    &.fill {
      // min-height: 425px;
      height: 100%;
      background-color: $blueberry;
      color: $paper;
      border: none;
      box-shadow: none;
    }

  }
</style>