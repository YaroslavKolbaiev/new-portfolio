import { Layout } from "@/Layout/Layout";
import { Projects } from "@/Projects/Projects";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
    </Layout>
  );
}
