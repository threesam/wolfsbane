<script context="module">
  import client from '../../sanityClient'
  export function preload({ params, query }) {
    return client
      .fetch(
        '*[_type == "author"]{name, "slug": slug.current, "alt": image.alt, "imageUrl": image.asset->url}|order(name asc)',
      )
      .then((authors) => {
        return { authors }
      })
      .catch((err) => this.error(500, err))
  }
</script>

<script>
  import Author from '../../components/Author.svelte'
  export let authors
</script>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(15rem, 100%), 1fr));
    grid-gap: 1rem;
  }
</style>

<h1>Authors</h1>

<div>
  {#each authors as author}
    <Author {author} />
  {/each}
</div>
