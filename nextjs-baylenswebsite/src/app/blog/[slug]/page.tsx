// type Props = {
//   params: Promise<{ slug: string }>;
// };

// export default async function BlogPostPage({ params }: Props) {
//   const { slug } = await params;

//   return (
//     <div>
//       <h1>Blog Post: {slug}</h1>
//     </div>
//   );
// }
import { PortableText, type SanityDocument } from "next-sanity";
import { portableTextComponents } from "@/app/components/PortableTextComponents";
import { SanityImageSource } from "@sanity/image-url";
import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";

const POST_QUERY = `*[_type == "BlogPost" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? createImageUrlBuilder({ projectId, dataset }).image(source)
        : null;

const options = { next: { revalidate: 30 } };

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  const postImageUrl = post.heroImage
    ? urlFor(post.heroImage)?.width(1000).height(500).url()
    : null;
    console.log(post)
  const authorImageUrl = post.authorImage
    ? urlFor(post.authorImage)?.width(100).height(100).url()
    : null;
    console.log(post)
  return (
    <main className="container mx-auto min-h-screen max-w-7xl p-8 flex flex-col gap-4">
        <div className="flex felx-row justify-between">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>
        <p>{post.readingTime} min read</p>
        </div>
        <div className="max-w-4xl mx-auto">

      {postImageUrl && (
          <Image
          width={1000}
          height={500}
          src={postImageUrl}
          alt={post.title}
          className="rounded-xl mx-auto mt-4"
          />
        )}
      <div className="flex flex-row items-center mt-4 px-4">
        {authorImageUrl && (
            <Image
            width={50}
            height={50}
            src={authorImageUrl}
            alt={post.author}
            className="rounded-full"
            />
        )}
        <div className="flex flex-row justify-between w-full">
        <p className="ml-4 inline-block"> Written by: {post.author}</p>
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="prose mt-4 px-8 mt-8">
        {Array.isArray(post.body) && <PortableText value={post.body} components={portableTextComponents}/>}
      </div>
        </div>
    </main>
  );
}