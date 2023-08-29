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
  <div class="side-col">
    <div class="fake-header" />
  </div>
</div>

<style lang="scss">
  .docs-layout {
    display: flex;
    @include tablet {
      padding-top: $mobileNavHeight;
    }
  }

  .center-col {
    // required for pre-breakout overflow
    // 
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
    width: $sidebarWidth;
    height: calc(100vh - #{$navHeight});
    padding: $content-spacer;
  }
  .header {
    position: sticky;
    top: $navHeight;
    width: 100%;
    z-index: 1;
    
    @include tablet {
      top: calc($navHeight + $mobileNavHeight);
    }
  }
  .fake-header {
    position: sticky;
    top: $navHeight;
    height: $headerHeight;
    border-bottom: 1px solid $kelp;
  }

  .content {
    padding: sp(0) $content-spacer $content-spacer;
    max-width: 1000px;
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