<li class="howdy"><slot/></li>

<style lang="scss">
  li {
    position: relative;
    list-style: none;
    margin-bottom: sp(.5);
    &::before {
      $size: 6px;
      position: absolute;
      top: 50%;
      left: -.875em;
      transform: translateY(-50%);
      content: '';
      display: inline-block;
      height: $size;
      width: $size;
      border: 2px solid $kelp;
      border-radius: calc(#{$size} / 2);
      color: $kelp;
    }
  }
</style>