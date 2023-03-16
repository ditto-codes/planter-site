import { error } from '@sveltejs/kit';
 
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
    title: metadata.title,
    content,
  }
}