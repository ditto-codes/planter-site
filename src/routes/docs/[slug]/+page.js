import { error } from '@sveltejs/kit';
 
export async function load({ params }){
  const page = await import(`../../../content/cli/${params.slug}.svx`);
  const content = page.default;

  return {
    content,
  }
}