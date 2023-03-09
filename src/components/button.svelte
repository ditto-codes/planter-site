<!--
  
  BUTTON
  
  Renders multiple types of buttons, and anchor tags as buttons when appropriate
  
-->

<script>
  export let variant = 'normal';
  export let type = 'button';
  export let size = 'normal';
  export let href = false;
  export let disabled = false;
  export let pressed = false;
  export let className = '';
  
  let classes = `${variant} ${size}`;
  if (className) classes += ` ${className}`;

</script>

<!-- RENDER
────────────────────────────────── -->

{#if href}
    <a 
      on:click
      href={href} 
      class:pressed 
      class:disabled 
      class={classes} 
      {...$$restProps}
    >
      <slot/>
    </a>
  {:else}
    <button 
      on:click
      type={type} 
      class:pressed 
      class:disabled 
      class={classes} 
      disabled={disabled}
      {...$$restProps}
    >
      <slot/>
    </button>
{/if}

<!-- STYLES
────────────────────────────────── -->

<style lang="scss">
/*
  
  BUTTON
  
  Styles for a button element.

  Sizes:
  - Small
  - Default
  - Large
  - Block (Fluid)

  Variants:
  - Button
  - Button Ghost
  - Button Text
  
*/

button, 
a {
  // Theme
  $color: $paper;
  $bg-color: $paper;
  $border: $border-width solid transparent;
  $hover-bg-color: $paper-500;
  $active-bg-color: $paper-600;
  $focus-outline: 2px solid $burlap;
  $disabled-bg-color: $gray-100;

  color: $color;
  background-color: black;
  border: $border;
  border-radius: $border-radius;
  padding: 10px 26px;
  outline: 0;
  transition: $animate-faster;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: $hover-bg-color;
    color: $color;
    cursor: pointer;
  }

  &:active, &.pressed {
    background-color: $active-bg-color;
  }

  &:focus-visible {
    border: $border;
    outline-offset: 2px;
    outline: $focus-outline;
  }

  &.disabled {
    background-color: $disabled-bg-color;
    cursor: not-allowed;

    &:hover {
      background-color: $disabled-bg-color;
      color: $color;
    }
  }
}

.unstyled {
  background-color: transparent;
  color: inherit;
  padding: 0;
  &:hover {
    background-color: transparent;
    color: inherit;
  }

  &:hover,
  &:focus-visible {
    color: $paper-500;
  }
}

// Sizes

.small {
  padding: 5px 11px;
}

.large {
  padding: 18px 42px;
}

.block {
  width: 100%;
}

// Kinds

.ghost {
  // Theme
  $color: $paper;
  $bg-color: transparent;
  $border: 1px solid $paper;
  $hover-color: $paper-500;
  $hover-border: 1px solid $paper-500;
  $hover-bg-color: $paper-100;
  $active-bg-color: $paper-200;
  $disabled-color: $gray-100;
  $focus-border: 1px solid $paper;
  $disabled-border: 1px solid $gray-100;

  border: $border;
  color: $color;
  background-color: transparent;
  padding: 10px 26px;

  &:hover {
    border: $hover-border;
    color: $hover-color;
    background-color: $hover-bg-color;
  }

  &:active, &.pressed {
    background-color: $active-bg-color;
  }

  &:focus {
    border: $focus-border;
    outline-offset: 2px;
  }

  &.disabled {
    border: $disabled-border;
    color: $disabled-color;
    cursor: not-allowed;

    &:hover {
      border: $disabled-border;
      color: $disabled-color;
      background-color: transparent;
    }
  }

}

.text {
  // Theme
  $color: $paper;
  $hover-bg-color: $paper-100;
  $active-bg-color: $paper-200;
  $hover-color: $paper-500;
  $focus-border: 1px solid transparent;
  $focus-outline: 2px solid $burlap;
  $disabled-color: $gray-100;
  
  background-color: transparent;
  color: $color;

  &:hover {
    background-color: $hover-bg-color;
    color: $hover-color;
  }

  &:active, &.pressed {
    background-color: $active-bg-color;
  }

  &:focus-visible {
    border: $focus-border;
    outline-offset: 2px;
    outline: $focus-outline;
  }

  &.disabled {
    color: $disabled-color;
    cursor: not-allowed;

    &:hover {
      background-color: transparent;
      color: $disabled-color;
    }
  }
}
</style>