import Link from "next/link";

function PostList({ posts }) {
  return (
    <>
      <h1>Posts List</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`} passHref>
            <h2>
              {post.id} {post.title}
            </h2>
          </Link>
        </div>
      ))}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://localhost:4000/products");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
