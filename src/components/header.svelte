<script>
  import GithubMark from './github-mark.svelte';
  export let title;
  export let repo;

  // {title} is defined in .svx file
  // {repo} and {topic} are defined in the respective page.js files
</script>

<header>
  <div class="meta">
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
  header {
    background-color: $paper;
    padding: sp(2.5) $content-spacer;
    border-bottom: 1px solid $kelp;
    @include mobile {
      padding: sp(1.5) $content-spacer-mobile sp(1.2);
    }
  }
  .title {
    margin: 0;
    // TODO: make this right
    font-family: 'Quincy CF';
    font-weight: 800;
    font-size: 4.0rem;
    line-height: 1.2;

    @include tablet {
      font-size: 3.5rem;
    }
    @include mobile {
      font-size: 2.8rem;
    }
  }
  .meta {
    display: flex;
    align-items: center;
    margin-bottom: sp(1.25);
  }
  .github {
    display: flex;
    justify-content: center;
    transition: $animate-faster ease-out;
    color: $kelp;
    text-decoration: none;
    @media (hover: hover) {
      &:hover {
        background-color: transparent;
        color: $coral-400;
      }
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