<script>
  import Icon from '$components/icon.svelte';
  import GithubMark from '$components/github-mark.svelte';
  
  export let name;
  export let internal = false; //
  export let route;
  export let repo; // { name, url }
  export let tools; // vite, sass, p5

  const _tools = {
    p5: {
      name: 'p5.js',
      color: '#ED225D',
    },
    sass: {
      name: 'Sass',
      color: '#BC58C5',
    },
    svelte: {
      name: 'Svelte',
      color: '#FF4000',
    },
    vite: {
      name: 'Vite',
      color: '#1C2BAA',
    },
    react: {
      name: 'React',
      color: '#087EA4',
    },
  }

  let link = '';
  let icon = 'arrow-up-right';
  if (internal && route) {
    link = route;
    icon = 'arrow-right';
  } else {
    link = repo.url;
  }
</script>

<div class="planter-card">

  <a href="{link}" class="row top">
    <h2>{name}</h2>
    <Icon name="{icon}" color="currentColor" />
  </a>

  <div class="row bottom">
    <a class="github" href="{repo.url}">
      <div class="icon">
        <GithubMark />
      </div>
      <div class="repo">{repo.name}</div>
    </a>
    <ul class="tools">
      {#each tools as tool}
        <li class="tool" style="--tool-color: {_tools[tool].color}">{_tools[tool].name}</li>
      {/each}  
    </ul>
  </div>

</div>

<style lang="scss">
  .planter-card {
    border: 1px solid $black;
    padding: 15px;
    border-radius: 5px;
    width: 100%;
    @include bp(lg, down) {
      font-size: sp(1.4);
    }
  }

  .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    & > * {
      flex-basis: fit-content;
    }
  }

  a.top {
    text-decoration: none;
    color: black;
    transition: $animate-faster ease-out;
    min-height: 45px;
    @media (hover: hover) {
      &:hover {
        background-color: transparent;
        color: $coral-400;
      }
    }
  }

  h2 {
    font-weight: 700;
    @include bp(lg, down) {
      font-size: sp(1.8);
    }
  }

  .github {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: $animate-faster ease-out;
    color: $black;
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
      @include bp(lg, down) {
        line-height: 1;
      }
    }
  }

  .tools {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  .tool {
    color: var(--tool-color, $black);
    margin-left: sp(.75);
  }
</style>

