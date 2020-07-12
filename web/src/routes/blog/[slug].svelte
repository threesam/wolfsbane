<script context="module">
  import client from '../../sanityClient'
  import BlockContent from '@movingbrands/svelte-portable-text'
  import serializers from '../../components/serializers'
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params
    const filter = '*[_type == "post" && slug.current == $slug][0]'
    const projection = `{
      ...,
      "author": authors[0].author->name,
      "image": mainImage.asset->url,
      "alt": mainImage.alt,
      "caption": mainImage.caption,
      body[]{
        ...,
        children[]{
          ...
        }
      }
    }`

    const query = filter + projection
    const post = await client
      .fetch(query, { slug })
      .catch((err) => this.error(500, err))
    return { post }
  }
</script>

<script>
  export let post
</script>

<style>
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(img) {
    display: block;
    max-width: 100%;
  }

  .content :global(figure) {
    margin: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
  figure {
    background: var(--dark-grey);
    color: var(--white);
  }
  figcaption {
    padding: 0.5rem;
    text-align: center;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>
<h2>{post.author}</h2>

<div class="content">
  <figure>
    <img src={post.image} alt={post.alt} />
    <figcaption>{post.caption}</figcaption>
  </figure>
  <BlockContent blocks={post.body} {serializers} />
</div>
