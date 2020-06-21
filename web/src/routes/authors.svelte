<script context="module">
  import client from '../sanityClient'
  export function preload({ params, query }) {
    return client
      .fetch('*[_type == "author"]')
      .then((authors) => {
        // return console.log(authors)
        return { authors }
      })
      .catch((err) => this.error(500, err))
  }
</script>

<script>
  export let authors
</script>

<h2>Authors</h2>

<ul>
  {#each authors as author}
    <li>{author.name}</li>
  {/each}
</ul>
