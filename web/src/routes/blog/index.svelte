<script context="module">
  import client from '../../sanityClient'
  export function preload({ params, query }) {
    return (
      client
        .fetch(
          `*[_type == "post" && defined(slug.current) && publishedAt < now() && defined(collection)]
        {
          "slug": slug.current, 
          publishedAt, 
          title,
          "author": authors[0].author->.name,
          "image": mainImage.asset->url,
          "alt": mainImage.alt,
          "collection": collection->{
            title, 
            "cover": cover.asset->url, 
            "alt": cover.alt, 
            "caption": cover.caption, 
            description
            }
        }|order(publishedAt desc)`,
        )
        // *[_type == 'post' && defined(collection)]{title, "edition": collection->{title, "cover": cover.asset->url, "alt": cover.alt, "caption": cover.caption, description}}
        .then((posts) => {
          return { posts }
        })
        .catch((err) => this.error(500, err))
    )
  }
</script>

<script>
  import Collections from './Collections.svelte'
  import RecentPosts from './RecentPosts.svelte'

  export let posts
  const collection = posts[0].collection
</script>

<style>
  @media (min-width: 1000px) {
    section {
      display: grid;
      grid-template-columns: 3fr 2fr;
      grid-gap: 2rem;
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
