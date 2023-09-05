export async function load({ params }){
  const page = await import(`../../../../content/planter-svelte/${params.slug}.svx`);
  const content = page.default;
  const { metadata } = page;

  return {
    title: metadata?.title ,
    content,
  }
}