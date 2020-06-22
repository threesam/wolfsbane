<script context="module">
  import client from '../../sanityClient'
  import BlockContent from '@movingbrands/svelte-portable-text'
  import serializers from '../../components/serializers'
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params
    const filter = '*[_type == "author" && slug.current == $slug][0]'
    const projection = `{name, "bio": bio[], "alt": image.alt, "imageUrl": image.asset->url}`

    const query = filter + projection
    const author = await client
      .fetch(query, { slug })
      .catch((err) => this.error(500, err))
    return { author }
  }
</script>

<script>
  export let author
  let name = author.name
</script>

<a href="/authors">All Authors</a>
<h1>{name}</h1>
{#if author.imageUrl}
  <img
    src={`${author.imageUrl}?fit=crop&crop=entropy&w=100&h=100`}
    alt={author.alt} />
{:else}
  <img
    src="./great-success.png"
    alt="no author image"
    width="100"
    height="100" />
{/if}
