<script>
  import { getHighlighter } from 'shiki';
  import { onMount } from 'svelte'

  let node;
  onMount(async () => {
    let code = node.firstChild.innerText;
    const highlighter = await getHighlighter({
      theme: 'nord',
      langs: []
    });

    console.log('code', code);
    let output = highlighter.codeToHtml(code, {lang: 'shell' });
    node.innerHTML = output;
  });
</script>

<div class="code-block" bind:this={node}>
  <slot/>
</div>


