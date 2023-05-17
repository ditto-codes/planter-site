<script>
  import '$styles/style.scss';
  import Nav from '$components/nav.svelte';
  import Header from '$components/header.svelte'
  import Sidebar from '$components/sidebar.svelte'
  import { page } from '$app/stores';
  $: ({ title, topic, repo, sidebar } = $page.data);
</script>

<div class="sidebar">
  <Sidebar links={sidebar} />
</div>
<div class="page">
  <div class="header">
    <Header slot="header" {title} {topic} {repo} />
  </div>
  <div class="content">
    <slot/>
  </div>
</div>

<style lang="scss">
  
  .sidebar {
    position: fixed;
    top: sp(7.5);
    width: $sidebarWidth;
    height: calc(100vh - #{$navHeight});
    border-right: 1px solid $kelp;
    padding: $content-spacer;
  }
  .page {
    margin-left: $sidebarWidth;
  }
  .header {
    padding: sp(2.5) $content-spacer;
    border-bottom: 1px solid $kelp;
    position: sticky;
    top: $navHeight;
    width: 100%;
    background-color: $paper;
    z-index: 1;
    @include mobile {
      padding: sp(2) $content-spacer-mobile;
    }
  }
  .content {
    padding: sp(0) $content-spacer $content-spacer;
    @include mobile {
      padding: sp(0) $content-spacer-mobile $content-spacer-mobile;
    }
  }
</style>