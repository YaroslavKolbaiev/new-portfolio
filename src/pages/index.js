import { Projects } from '@/components/Projects/Projects';
import Hero from '@/components/Hero/Hero';
import Head from 'next/head';
import Layout from './layout';
import { Stack } from '@/components/stack/Stack';
import { Experiance } from '@/components/Experiance/Experiance';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        {/* <Projects /> */}
        <Stack />
        <Experiance />
      </Layout>
    </>
  );
}
