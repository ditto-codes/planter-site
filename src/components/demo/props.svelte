<script>
  export let props = [
    // {
    //   name: '-',
    //   type: '-',
    //   default: `'-'`,
    //   values: [`'-'`],
    //   description: '-', 
    // }
  ]

  export let restProps = true;
</script>


<table>

  <thead>
    <th style="width: 13%">Name</th>
    <th style="width: 13%">Type</th>
    <th style="width: 13%">Default</th>
    <th style="width: 20%">Values</th>
    <th>Description</th>
  </thead>
  <tbody>
    {#each props as prop}
      <tr>
        <td class="name">{prop.name}</td>
        <td class={prop.type}>{prop.type}</td>
        <td class={`default ${prop.default !== '-' ? prop.type : ''}`}>
          {prop.default}
        </td>
        <td class={prop.type}>
          {#each prop.values as value, i}
            {#if value === 'any' | value.includes('See below')}
              <span class="italics">{value}</span>
            {:else}
              {value}
            {/if}
            
            {#if i < prop.values.length - 1}
              <br>
            {/if}
          {/each}
        </td>
        <td>{prop.description}</td>
      </tr>
    {/each}
  </tbody>
</table>
<div class="footnote">
  {#if restProps}
    <p>All additional props are passed via <code>$$restProps</code>. Read about <a href="https://svelte.dev/docs#template-syntax-attributes-and-props">Attributes & Props</a> in the Svelte Docs.</p>
  {/if}
</div>


<style lang="scss">
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    border-bottom: 1px solid $gray-100;
    padding-bottom: sp(sm);
    font-size: $small-font-size;
    text-transform: $small-text-transform;
    font-weight: 500;
    color: $gray-300;
  }

  td {
    font-family: $font-family-monospace;
    font-size: 0.875rem;
    vertical-align: top;
    padding: sp(sm) 0;
    color: $gray-400;
  }

  thead, 
  tr {
    border-bottom: 1px solid $gray-100;
  }

  .name {
    color: $blue-400;
  }

  .string,
  .string.default {
    color: $green-300;
  }

  .boolean {
    color: $magenta-300;
  }
  .boolean.default {
    color: $red-400;
  }

  .object,
  .array {
    color: $black;
  }
  
  .default {
    color: $gray-300;
  }

  .italics {
    color: $gray-300;
    font-style: italic;
  }

  .footnote {
    color: $gray-300;
    margin-top: sp(md);
    font-size: $small-font-size;
  }
</style>