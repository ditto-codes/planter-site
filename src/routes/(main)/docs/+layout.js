// Note: we tried dynamically imports for the page content here
//       but there's a bug: https://github.com/vitejs/vite/issues/11824
export async function load({ params, url }) {
  const fullPath = url.pathname;
  const path = fullPath.replace(`/${params.slug}`, '');

  const data = {
    '/docs': {
      repo: {
        name: 'planter',
        url: 'https://github.com/ditto-codes/planter',
      },
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
          title: 'Local Planters', 
          url: '/docs/local-planters' 
        },
        { 
          title: 'About', 
          url: '/docs/about' 
        },
      ]
    },
    '/docs/basic': {
      repo: {
        name: 'planter-basic',
        url: 'https://github.com/ditto-codes/planter-basic',
      },
      nav: [
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
    },
    '/docs/svelte': {
      repo: {
        name: 'planter-svelte',
        url: 'https://github.com/ditto-codes/planter-svelte',
      },
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
    },
  }

  return {
    ...data[path],
  }
}