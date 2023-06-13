export async function load({ params }){
  const page = await import(`../../../../content/planter-basic/${params.slug}.svx`);
  const content = page.default;
  const { metadata } = page;

  return {
    topic: 'Planter Basic',
    repo: {
      name: 'planter-basic',
      url: 'https://github.com/ditto-codes/planter-basic',
    },
    title: metadata?.title ,
    content,
    sidebar: [
      { 
        title: 'Getting Started', 
        url: '/docs/basic/getting-started' 
      },
      { 
        title: 'Styling With Sass', 
        url: '/docs/basic/styling-with-sass' 
      },
      { 
        title: 'Config', 
        url: '/docs/basic/config' 
      },
    ]
  }
}