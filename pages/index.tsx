import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navigator from '../components/Navigator';
import * as sanityService from '../services/sanity.service';

// https://github.com/awran5/react-simple-typewriter
// https://react-simple-typewriter.vercel.app/?path=/story/introduction--page

// export async function getStaticProps() {
//   const env_vars = {
//     db_password: process.env.DB_PASSWORD ?? '',
//   };

//   return {
//     props: {
//       env_vars,
//     },
//   };
// }

export async function getServerSideProps() {
  const posts = await sanityService.getAllPosts();
  const sections = await sanityService.getProfilePageSections();
  const projects = await sanityService.getProfileProjects();
  const skills = await sanityService.getProfileSkills();
  const experiences = await sanityService.getProfileExperience();

  return {
    props: {
      posts,
      sections,
      projects,
      skills,
      experiences,
    },
  };
}

const Home: NextPage = (props) => {
  console.log({ props });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-sky-500">
      <Head>
        <title>Giancarlos Cercado - Full-stack Engineer</title>
        <link rel="icon" href="/ico.ico" />
        <meta
          name="description"
          content="Giancarlos Cercado - Full-stack Engineer (Node/React/Vue/Typescript)"
        />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to Giancarlos Cercado</h1>
        <Navigator />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
