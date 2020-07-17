<script context="module">
  import client from '../../sanityClient'
  export function preload({ params, query }) {
    return client
      .fetch(
        `*[_type == "post" && defined(slug.current) && publishedAt < now()]
        {
          "slug": slug.current, 
          publishedAt, 
          title,
          "author": authors[0].author->.name,
          "image": mainImage.asset->url,
          "alt": mainImage.alt
        }|order(publishedAt desc)`,
      )
      .then((posts) => {
        return { posts }
      })
      .catch((err) => this.error(500, err))
  }
</script>

<script>
  import Collections from './Collections.svelte'
  import RecentPosts from './RecentPosts.svelte'

  export let posts
</script>

<style>
  @media (min-width: 1000px) {
    section {
      display: grid;
      grid-template-columns: 2fr 1fr;
    }
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<section>
  <Collections />
  <aside>
    <RecentPosts {posts} />
  </aside>
</section>
