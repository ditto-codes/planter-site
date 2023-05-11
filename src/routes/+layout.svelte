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
  <slot />
</div>

<style lang="scss">
  .layout {
    padding-top: $navHeight;
  }
</style>