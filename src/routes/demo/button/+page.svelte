<script>
  import Button from '$components/button.svelte';
  import Example from '$components/demo/example.svelte';
  import Section from '$components/demo/section.svelte';
  import Props from '$components/demo/props.svelte';

  let props = [
    {
      name: 'variant',
      type: 'string',
      default: `'normal'`,
      values: [`'normal'`, `'ghost'`, `'text'`, `'unstyled'`,],
      description: 'Assign the visual style of the button', 
    },
    {
      name: 'size',
      type: 'string',
      default: `'normal'`,
      values: [`'small'`,`'normal'`,`'large'`,],
      description: 'Assign the size of the button', 
    },
    {
      name: 'type',
      type: 'string',
      default: `'button'`,
      values: [`'button'`, `'submit'`, `'reset'`],
      description: `Sets the 'type' attribute of <button>`, 
    },
    {
      name: 'href',
      type: 'string',
      default: `-`,
      values: [`any`,],
      description: 'If set, will use <a> instead of <button>', 
    },
    {
      name: 'pressed',
      type: 'boolean',
      default: `false`,
      values: [],
      description: 'Flag that will add a pressed style if truthy', 
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: `false`,
      values: [],
      description: `Flag that adds disabled styling and sets the 'disabled' attribute`, 
    },
  ]

  let pressed = false;
  let count = 0;

  const onClick = () => {
    count++;
  }
  const onPress = () => {
    pressed = !pressed;
  }
</script>

<Section 
  title="Button" 
>
  <p slot="description">Renders a <code>{`<button>`}</code> or <code>{`<a>`}</code></p>
  <Example label="Default">
    <Button>Button</Button>
  </Example>
  <Example label="on:click">
    <Button on:click={onClick}>Clicked: {count}</Button>
  </Example>
  <Example label="Toggle Button">
    <Button on:click={onPress} {pressed}>Toggle Button</Button>
  </Example>
  <Example label="Unstyled">
    <Button variant="unstyled">I look like normal text but I'm a button</Button>
  </Example>
  <Example label="Link (HREF)">
    <Button href="#somewhere">Infamous Anchor Button</Button>
  </Example>
  <Example label="Text">
    <Button variant="text">Text Button</Button>
  </Example>
  <Example label="Small Ghost">
    <Button size="small" variant="ghost">Small Ghost</Button>
  </Example>
  <Example label="Large Disabled">
    <Button size="large" disabled>Disabled</Button>
  </Example>
</Section>

<Section title="Props">
  <Props {props} restProps />
</Section>