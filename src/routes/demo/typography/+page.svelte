
<script>
  import Example from '$components/demo/example.svelte';
  import Section from '$components/demo/section.svelte';
</script>

<Section 
  title="Headings" 
>
  <Example label="H1">
    <h1 as="h1">The five boxing wizards jump quickly.</h1>
  </Example>
  <Example label="H2">
    <h2 as="h2">The five boxing wizards jump quickly.</h2>
  </Example>
  <Example label="H3">
    <h3 as="h3">The five boxing wizards jump quickly.</h3>
  </Example>
  <Example label="H4">
    <h4 as="h4">The five boxing wizards jump quickly.</h4>
  </Example>
  <Example label="H5">
    <h5 as="h5">The five boxing wizards jump quickly.</h5>
  </Example>
  <Example label="H6">
    <h6 as="h6">The five boxing wizards jump quickly.</h6>
  </Example>
</Section>

<Section 
  title="Paragraphs" 
>
  <Example label="LEAD">
    <p class="lead">Next they turned to the business table. </p>
  </Example>
  <Example label="P" top>
    <p>Next they turned to the business table. On the desk, among the neat array of papers, a large envelope was uppermost, and bore, in the doctor’s hand, the name of Mr. Utterson. The lawyer unsealed it, and several enclosures fell to the floor. The first was a will, drawn in the same eccentric terms as the one which he had returned six months before, to serve as a testament in case of death and as a deed of gift in case of disappearance; but in place of the name of Edward Hyde, the lawyer, with indescribable amazement read the name of Gabriel John Utterson. He looked at Poole, and then back at the paper, and last of all at the dead malefactor stretched upon the carpet.</p>
  </Example>
  <Example label="SMALL">
    <small>Next they turned to the business table. on the desk, among the neat array of papers, a large envelope was uppermost, and bore, in the doctor’s hand, the same name of mr.utterson.</small>
  </Example>
  <Example label="LINK">
    <p>This is an <a href="#">example</a> of a link within a block of text.</p>
  </Example>
</Section>
