import { loadPost } from './api/post';

const LOAD_MORE_STEP = 4;

export default function Page({ initialPost, total }) {
  return (
    <>
      Hello World!
    </>
  );
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadPost(0, LOAD_MORE_STEP);

  console.log('posts');

  return {
    props: {
      initialPost: posts,
      total
    }
  };
};
