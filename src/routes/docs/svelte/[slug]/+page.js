export async function load({ params }){
  const page = await import(`../../../../content/planter-svelte/${params.slug}.svx`);
  const content = page.default;
  const { metadata } = page;

  return {
    topic: 'Planter Svelte',
    repo: {
      name: 'planter-svelte',
      url: 'https://github.com/ditto-codes/planter-svelte',
    },
    title: metadata?.title ,
    content,
    nav: [
      { 
        title: 'Getting Started', 
        url: '/docs/svelte/getting-started' 
      },
      { 
        title: 'Styling With Sass', 
        url: '/docs/svelte/styling-with-sass' 
      },
      { 
        title: 'Config', 
        url: '/docs/svelte/config' 
      },
    ]
  }
}