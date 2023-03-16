import { error } from '@sveltejs/kit';
 
export async function load({ params }){
  const page = await import(`../../../../content/planter-basic/${params.slug}.svx`);
  const content = page.default;

  return {
    content,
  }
}