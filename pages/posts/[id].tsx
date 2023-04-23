import { getPost, getPosts } from "@/api/post/api";
import Contents from "@/components/Post/Contents";
import Title from "@/components/Post/Title";
import { Post } from "@/types/posts.dto";
import { GetStaticPaths, GetStaticProps } from "next";

interface Props {
  post: Post;
}

const PostDetail = ({ post }: Props) => {
  return (
    <div>
      <h1>
        <Title title={post.title} />
        <Contents contents={post.content} />
      </h1>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  const paths = posts.map((post: Post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const post = await getPost(Number(id));

  return {
    props: { post },
  };
};

export default PostDetail;
