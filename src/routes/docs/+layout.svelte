<script>
  import '$styles/style.scss';
  import DocsMobileNav from '$components/docs-mobile-nav.svelte'
  import Header from '$components/header.svelte'
  import DocsNav from '$components/docs-nav.svelte'
  import { page } from '$app/stores';
  $: ({ title, topic, repo, nav } = $page.data);
</script>

<DocsMobileNav />

<div class="docs-layout">
  <div class="side-col left">
    <div class="sidebar">
      <DocsNav links={nav} />
    </div>
  </div>
  <div class="center-col">
    <div class="header">
      <Header slot="header" {title} {topic} {repo} />
    </div>
    <div class="content">
      <slot/>
    </div>
  </div>
  <div class="side-col"/>
</div>

<style lang="scss">
  .docs-layout {
    display: flex;
    @include tablet {
      padding-top: $docs-mobile-nav-height;
    }
  }

  .center-col {
    // required for pre-breakout overflow
    min-width: 0;
  }

  .side-col {
    flex: 1;
  }

  .left {
    display: flex;
    justify-content: flex-end;
    border-right: 1px solid $kelp;

    @include tablet {
      display: none;
    }
    
  }
  .sidebar {
    position: sticky;
    top: sp(7.5);
    width: $sidebar-width;
    height: calc(100vh - #{$nav-height});
    padding: $content-spacer;
  }
  .header {
    position: sticky;
    top: $nav-height;
    width: 100%;
    z-index: 1;
    
    @include tablet {
      top: calc($nav-height + $docs-mobile-nav-height);
    }
    @include mobile {
      top: calc($mobile-nav-height + $docs-mobile-nav-height);
    }
  }

  .content {
    padding: sp(0) $content-spacer $content-spacer;
    max-width: $docs-content-max-width;
    line-height: 1.5;
    & > :global(*:first-child) {
      margin-top: $content-spacer;
      @include mobile {
        margin-top: $content-spacer-mobile;
      }
    }
    @include mobile {
      padding: sp(0) $content-spacer-mobile $content-spacer-mobile;
    }
  }

</style>