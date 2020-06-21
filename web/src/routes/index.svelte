<script context="module">
  import client from '../sanityClient'
  export function preload({ params, query }) {
    return client
      .fetch('*[_type == "author"]')
      .then((posts) => {
        return { posts }
      })
      .catch((err) => this.error(500, err))
  }
</script>

<style>
  h1 {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Wolfsbane</title>
</svelte:head>

<h1>Wolfsbane</h1>
