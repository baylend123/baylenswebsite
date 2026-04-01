import Hero from "./components/hero";
import { BlogList } from "./components/blogList";

export default async function IndexPage() {

  return (
    <main className="container mx-auto min-h-screen p-8">
      <Hero />
      <BlogList />
    </main>
  );
}