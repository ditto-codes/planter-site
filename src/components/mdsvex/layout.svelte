<script context="module">
  import hr from './hr.svelte';
  import ul from './ul.svelte';
  import li from './li.svelte';
  import h2 from './h2.svelte';
  import h3 from './h3.svelte';
  import blockquote from './blockquote.svelte';
  export { hr, ul, li, h2, h3, blockquote };
</script>
<script>
  export let title;
</script>
<slot />