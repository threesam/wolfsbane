<script>
  export let posts
  // posts.length = 5

  let showAllPosts = false

  function formatDate(date) {
    return new Date(date).toLocaleDateString()
  }
</script>

<style>
  ul {
    line-height: 1.5;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
  span {
    font-weight: 900;
  }
  li {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.29);
    display: inline-block;
  }
  a {
    display: flex;
    flex-flow: row;
  }
  img {
    margin-right: 0.5rem;
    width: 100px;
    height: 100px;
  }
</style>

<h2>Posts</h2>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="blog/{post.slug}">
        <img
          src={`${post.image}?fit=crop&crop=entropy&w=100&h=100`}
          alt={post.alt} />
        <div>
          {post.title}
          <br />
          ({formatDate(post.publishedAt)})
          <br />
          by
          <span>
            {post.author ? post.author : 'fuck if i know who wrote this, sorry that was harsh but I really never expected anyone to NOT INPUT AN AUTHOR'}
          </span>
        </div>
      </a>
    </li>
  {/each}
</ul>
