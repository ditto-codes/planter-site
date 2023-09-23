<script>
  import Button from '$components/button.svelte';
  import Code from '$components/code.svelte';
  import List from '$components/List'
  import Hero from '$components/hero.svelte';
</script>

<section>
  <Hero/>
</section>

<section>
<h2>Add a planter.</h2>
<p>Install the Planter CLI.</p>
<p>Add a planter to your library.</p>
<Code>npm i -g @planter/cli
<span>planter add </span>user/project my-planter
</Code>

<List title="My Library">
  <List.Item>
    my-planter
  </List.Item>
  <List.Item>
    vite-starter
  </List.Item>
  <List.Item>
    basic
  </List.Item>
  <List.Item>
    svelte
  </List.Item>
  <List.Item>
    cowboy-stuff
  </List.Item>
</List>

</section>

<section>
<h2>Create.</h2>
<p>Clone your saved planter with no git history.</p>
<Code><span>planter create </span>user/project my-planter
</Code>

<List title="My Library">
  <List.Item>
    my-planter
  </List.Item>
  <List.Item>
    vite-starter
  </List.Item>
  <List.Item>
    basic
  </List.Item>
  <List.Item>
    svelte
  </List.Item>
  <List.Item>
    cowboy-stuff
  </List.Item>
</List>

<List title="My Library">
  <List.Item type="fill">
    my-planter
  </List.Item>
</List>

</section>

<style lang="scss">
  section {
    margin: sp(2) 0;
  }
</style>