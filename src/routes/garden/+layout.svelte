<div class="garden">
  <slot/>
</div>

<style lang="scss">
  .garden {
    padding: 60px $content-spacer 0;
    @include bp(lg, down) {
      padding: $content-spacer $content-spacer-mobile 0;
    }
    // padding: 60px 150px 0 150px;
    // @include bp(xl, down) {
    //   padding: 40px 75px 0 75px;
    // }
    // @include bp(md, down) {
    //   padding: 30px 30px 0 30px;
    // }
  }
</style>
