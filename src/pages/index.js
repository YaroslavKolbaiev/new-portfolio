import { Layout } from "@/pages/layout";
import { Projects } from "@/components/Projects/Projects";
import Hero from "@/components/Hero/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Projects />
      </Layout>
    </>
  );
}
