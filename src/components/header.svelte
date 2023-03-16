<script>
	import Icon from "./icon.svelte";
  export let topic;
  export let title;
  export let repo;
</script>


<header>
  <div class="meta">
    <div class="topic">{topic}</div>
    <div class="github">
      <a href="{repo.url}"><Icon name="github" />{repo.name}</a>
    </div>
  </div>
  <h1 class="title">{title}</h1>
</header>

<style lang="scss">
  .header {

  }
  .title {

  }
  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .topic {

  }
  .github {

  }
</style>