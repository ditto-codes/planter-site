<script>
  import GithubMark from './github-mark.svelte';
  export let topic;
  export let title;
  export let repo;

  // {title} is defined in .svx file
  // {repo} and {topic} are defined in the respective page.js files
</script>

<header>
  <div class="meta">
    <div class="topic">{topic}</div>
    <a class="github" href="{repo.url}">
      <div class="icon">
        <GithubMark />
      </div>
      <div class="repo">{repo.name}</div>
    </a>
  </div>
  <h1 class="title">{title}</h1>
</header>

<style lang="scss">
  .title {
    margin: 0;
    // TODO: make this right
    font-family: 'Quincy CF';
    font-weight: 800;
    font-size: 4.0rem;
  }
  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: sp(1);
  }
  .topic {
    font-weight: 700;
    color: $kelp;
    font-size: 1.8rem;
  }
  .github {
    display: flex;
    justify-content: center;
    transition: $animate-faster ease-out;
    color: $black;
    text-decoration: none;
    &:hover {
      background-color: transparent;
      color: $coral-400;
    }
    .icon {
      display: flex;
      margin-right: sp(.5);
    }
    .repo {
      line-height: 1.2;
    }
  }
</style>