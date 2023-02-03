const { useRouter } = require("next/router");

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>...isLoading</div>;
  }

  return (
    <div>
      Post: {router.asPath}
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};
export default Post;

//정적인경로 설정 후 이외의 페이지는 fallback : true로 loading 표시후 생성
//fallback blocking은 ssr과 똑같이 기다린후에 보여줌
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: "blocking",
    // fallback: true,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const response = await fetch(`http://localhost:3001/posts/${id}`);
  const post = await response.json();

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}
