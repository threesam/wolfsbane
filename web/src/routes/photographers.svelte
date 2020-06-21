<script context="module">
  import client from '../sanityClient'
  export function preload({ params, query }) {
    return client
      .fetch('*[_type == "photographer"]')
      .then((photographers) => {
        // return console.log(authors)
        return { photographers }
      })
      .catch((err) => this.error(500, err))
  }
</script>

<script>
  export let photographers
</script>

<h2>Photographers</h2>

<ul>
  {#each photographers as photographer}
    <li>{photographer.name}</li>
  {/each}
</ul>
