export async function load({ params, url }){
  const page = await import(`../../../../content/docs/${params.slug}.svx`);
  const content = page.default;
  const { metadata } = page;

  return {
    title: metadata?.title ,
    content,
  }
}