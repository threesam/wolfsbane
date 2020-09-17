<script context="module">
  import client from '../../sanityClient'
  export function preload({ params }) {
    const filter = `*[_type == 'collection' && publishedAt < now()]|order(_createdAt desc)[5]`
    const projection = `{
        ...,
        "cover": cover.asset->url,
        "alt": cover.alt,
        "caption": cover.caption,
        title,
        "posts": *[_type == 'post' && references(^._id)]|order(_createdAt desc){
          "slug": slug.current, 
          publishedAt, 
          title,
          "author": authors[0].author->name,
          "image": mainImage.asset->url,
          "alt": mainImage.alt,
        }
      }`
    const query = filter + projection
    return client
      .fetch(query)
      .then((collection) => {
        return { collection }
      })
      .catch((err) => this.error(500, err))
  }
</script>

<script>
  import Collections from './Collections.svelte'
  import RecentPosts from './RecentPosts.svelte'

  export let collection
  const { posts } = collection
</script>

<style>
  section {
    display: grid;
    grid-gap: 1rem;
  }
  @media (max-width: 999px) {
    section {
      grid-template-columns: 1fr;
    }
  }
  @media (min-width: 1000px) {
    section {
      grid-template-columns: 3fr 2fr;
    }
  }
</style>

<svelte:head>
  <title>The Blog</title>
</svelte:head>

<section>
  <Collections {collection} />
  <aside>
    <RecentPosts {posts} />
  </aside>
</section>
