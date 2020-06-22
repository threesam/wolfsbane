<script>
  export let author
</script>

<style>
  a {
    display: flex;
    flex-flow: row;
    align-items: center;
    box-shadow: 0 0.125rem 5px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    overflow: hidden;
  }
  span {
    margin-left: 1rem;
  }
</style>

<a href="authors/{author.slug}">
  {#if author.imageUrl}
    <img
      src={`${author.imageUrl}?fit=crop&crop=entropy&w=100&h=100`}
      alt={author.alt} />
  {:else}
    <img
      src="./great-success.png"
      alt="no author image"
      width="100"
      height="100" />
  {/if}
  <span>{author.name}</span>
</a>
