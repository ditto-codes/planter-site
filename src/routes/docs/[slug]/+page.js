export async function load({ params }){
  const page = await import(`../../../content/cli/${params.slug}.svx`);
  const content = page.default;
  const { metadata } = page;

  return {
    topic: 'Planter CLI',
    repo: {
      name: 'planter',
      url: 'https://github.com/ditto-codes/planter',
    },
    title: metadata?.title ,
    content,
    nav: [
      { 
        title: 'Getting Started', 
        url: '/docs/getting-started' 
      },
      { 
        title: 'Commands', 
        url: '/docs/commands' 
      },
      { 
        title: 'Local Repos', 
        url: '/docs/local-repos' 
      },
      { 
        title: 'Ignore Files', 
        url: '/docs/ignore-files' 
      },
      { 
        title: 'About', 
        url: '/docs/about' 
      },
    ]
  }
}