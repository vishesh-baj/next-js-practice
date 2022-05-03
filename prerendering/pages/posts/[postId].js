// import { useRouter } from "next/router";

function Post({ post }) {
  //   const router = useRouter();

  //   if (router.isFallback) {
  //     return <h1>Loading....</h1>;
  //   }

  return (
    <>
      <h1>
        {post.id} {post.title}
      </h1>
      <p>{post.body}</p>
    </>
  );
}

export default Post;

export async function getStaticPaths() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await response.json();

  //   Contains all the paths values
  //   const paths = data.map((post) => {
  //     return {
  //       params: {
  //         postId: `${post.id}`,
  //       },
  //     };
  //   });
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    // paths,
    fallback: "blocking",
  };
}

// context argument contains the params object from which we can access the postId
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  console.log(`Generating page for the path /posts/${params.postId}`);

  return {
    props: {
      post: data,
    },
  };
}
