import { loadPost } from './api/post';

const LOAD_MORE_STEP = 4;

export default function Page({ initialPost, total }) {
  return (
    <>
      <Head>
        <title>My super blog</title>
      </Head>
      <Section>
        <Cover title="Serik<br /> Askarov" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
        <PostGrid>
          {posts.map((post) => (
            <Post key={post.slug.current} {...post} />
          ))}
        </PostGrid>
        {isLoadButton && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '2rem'
            }}
          >
            <Button onClick={getMorePosts} disabled={loading}>
              {loading ? 'Loading...' : 'Load more'}
            </Button>
          </div>
        )}
      </Section>
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
