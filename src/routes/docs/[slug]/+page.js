import { error } from '@sveltejs/kit';
 
export async function load({ params }){
  const post = await import(`../../../content/cli/${params.slug}.svx`)
  const content = post.default

  return {
    content,
  }
}