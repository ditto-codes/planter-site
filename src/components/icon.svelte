<!--
  
  ICON
  
  Renders an icon using https://feathericons.com/
  
-->

<script>
  import * as feather from 'feather-icons';
  
  export let name;
  export let size;

  let settings = {
    ...$$restProps
  }

  if (size) {
    settings.height = size;
    settings.width = size;
  }

  let svg = feather.icons[name].toSvg({ ...settings });
</script>

<!-- RENDER
────────────────────────────────── -->

{@html svg}

<!-- STYLES
────────────────────────────────── -->
