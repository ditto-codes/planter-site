<script>
  import '../styles/style.scss';
  import Nav from '$components/nav.svelte';
  import Header from '$components/header.svelte'
  import Sidebar from '$components/sidebar.svelte'
  import { page } from '$app/stores';
  const { title, topic, repo, } = $page.data;
</script>

<Nav />
<div class="layout">
  <div class="sidebar">
    <!-- <Sidebar links={sidebar} /> -->
    sidebar
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
  .layout {
    padding-top: $navHeight;
  }
  .sidebar {
    position: fixed;
    top: sp(7.5);
    width: 300px;
    height: calc(100vh - #{$navHeight});
    border-right: 1px solid $kelp;
    padding: sp(3.5);
  }
  .page {
    margin-left: 300px;
  }
  .content {
    padding: sp(3.5);
  }
</style>