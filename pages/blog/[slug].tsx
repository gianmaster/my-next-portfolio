import { useRouter } from 'next/router';

const BlogBySlugPage = () => {
  const router = useRouter();
  const slug = router.query?.slug ?? 'no-slug';
  return (
    <div>
      <h1>{slug}</h1>
      <p>{`here is the content of ${slug}`}</p>
    </div>
  );
};

export default BlogBySlugPage;
