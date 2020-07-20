<script>
  export let collection
  const { title, cover, alt, caption, description } = collection
</script>

<style>
  h1 {
    position: absolute;
    top: 3rem;
    left: 3rem;
    color: var(--emphasized-color);
    font-size: 3rem;
  }
  img {
    width: 100%;
  }
  @media (max-width: 999px) {
    article {
      margin-bottom: 1rem;
    }
  }
</style>

<article>
  <h1>{title}</h1>
  <img src={`${cover}?fit=crop&crop=entropy`} {alt} />
  <!-- <h3>{caption}</h3> -->
  <p>{description}</p>
</article>
