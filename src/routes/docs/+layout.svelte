<script>
  import '$styles/style.scss';
  import Nav from '$components/nav.svelte';
  import Header from '$components/header.svelte'
  import Sidebar from '$components/sidebar.svelte'
  import { page } from '$app/stores';
  $: ({ title, topic, repo, sidebar } = $page.data);
</script>


<div class="docs-layout">
  <div class="side-col left">
    <div class="sidebar">
      <Sidebar links={sidebar} />
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
  }
  .side-col {
    flex: 1;
  }
  .left {
    display: flex;
    justify-content: flex-end;
    border-right: 1px solid $kelp;
  }
  .sidebar {
    position: sticky;
    top: sp(7.5);
    width: $sidebarWidth;
    height: calc(100vh - #{$navHeight});
    padding: $content-spacer;
  }
  .header {
    padding: sp(2.5) $content-spacer;
    border-bottom: 1px solid $kelp;
    position: sticky;
    top: $navHeight;
    width: 100%;
    background-color: $paper;
    z-index: 1;
    // height: 142px;
    @include mobile {
      padding: sp(2) $content-spacer-mobile;
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