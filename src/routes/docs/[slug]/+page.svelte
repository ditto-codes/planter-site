<script>
  export let data;
  const { content, title, topic, repo } = data;
  import Header from '$components/header.svelte';
</script>

<Header slot="header" {title} {topic} {repo} />
<svelte:component this={content} />