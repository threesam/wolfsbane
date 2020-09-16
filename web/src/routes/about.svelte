<script context="module">
  import client from '../sanityClient'
  import BlockContent from '@movingbrands/svelte-portable-text'
  import serializers from '../components/serializers'
  export async function preload({ params }) {
    const filter = '*[_type == "siteSettings"][0]'
    const projection = `{
	  ...,
	  "image": image.asset->url,
	  "caption": image.caption,
	  "alt": image.alt,
      body[]{
        ...,
        children[]{
          ...,
          _type == 'authorReference' => {
            _type,
            author->
          }
        }
      }
    }`

    const query = filter + projection
    const siteSettings = await client
      .fetch(query)
      .catch((err) => this.error(500, err))
    return { siteSettings }
  }
</script>

<script>
  export let siteSettings
  const { title, description } = siteSettings
</script>

<style>
  hr {
    margin: 1rem 0;
  }
</style>

<svelte:head>
  <title>About {title}</title>
</svelte:head>
<h1>About {title}</h1>

<p>{description}</p>
<hr />
<p>
  Check out our
  <a href="/authors">
    <b>authors</b>
  </a>
</p>

<p>
  Check out our
  <a href="/photographers">
    <b>photographers</b>
  </a>
</p>
