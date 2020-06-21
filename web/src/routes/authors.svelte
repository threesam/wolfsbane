<script context="module">
  import client from '../sanityClient'
  export function preload({ params, query }) {
    return client
      .fetch(
        '*[_type == "author"]{name, "alt": image.alt, "imageUrl": image.asset->url}|order(name asc)',
      )
      .then((authors) => {
        // return console.log(authors)
        return { authors }
      })
      .catch((err) => this.error(500, err))
  }
</script>

<script>
  import Author from '../components/Author.svelte'
  export let authors
</script>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
</style>

<h1>Authors</h1>

<div>
  {#each authors as author}
    <Author {author} />
  {/each}
</div>
