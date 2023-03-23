<script>
	import Icon from "./icon.svelte";
  export let topic;
  export let title;
  export let repo;

  // {title} is defined in .svx file
  // {repo} and {topic} are defined in the respective page.js files
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