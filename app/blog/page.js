async function getBlogPosts() {
  const postsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      // cache: "force-cache", ///< SSG getStaticSideProps
      cache: "no-store", ///< SSR getServerSideProps
      // next: {
      //   revalidate: 20, ///< ISR revalidate
      // },
    }
  );
  return postsResponse.json();
}

export default async function Blog() {
  const posts = await getBlogPosts();
  console.log(posts);
  return (
    <div>
      <h1>Posts</h1>
      <p>
        This is a page that presents data taken from
        https://jsonplaceholder.typicode.com/posts in a list
      </p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      ;
    </div>
  );
}
