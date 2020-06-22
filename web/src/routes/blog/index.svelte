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
        }|order(publishedAt desc)`,
      )
      .then((posts) => {
        console.log({ posts })
        return { posts }
      })
      .catch((err) => this.error(500, err))
  }
</script>

<script>
  export let posts

  function formatDate(date) {
    return new Date(date).toLocaleDateString()
  }
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
  span {
    font-weight: 900;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
      ({formatDate(post.publishedAt)}) by
      <span>{post.author ? post.author : 'fuck if i know who wrote this'}</span>
    </li>
  {/each}
</ul>
