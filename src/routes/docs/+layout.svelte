<script>
  import '$styles/style.scss';
  import Nav from '$components/nav.svelte';
  import Header from '$components/header.svelte'
  import Sidebar from '$components/sidebar.svelte'
  import { page } from '$app/stores';
  // TODO: wrap this in a reactive statement? content doesn't change
  const { title, topic, repo, sidebar } = $page.data;
</script>

<Nav />
<div class="layout">
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
</div>

<style lang="scss">
  $navHeight: sp(7.5);
  $sidebarWidth: 250px;
  .layout {
    padding-top: $navHeight;
  }
  .sidebar {
    position: fixed;
    top: sp(7.5);
    width: $sidebarWidth;
    height: calc(100vh - #{$navHeight});
    border-right: 1px solid $kelp;
    padding: sp(3.5);
  }
  .page {
    margin-left: $sidebarWidth;
  }
  .header {
    padding: sp(2.5) sp(3.5);
    border-bottom: 1px solid $kelp;
    position: sticky;
    top: $navHeight;
    width: 100%;
    background-color: $paper;
    z-index: 1;
  }
  .content {
    padding: sp(3.5);
  }
</style>