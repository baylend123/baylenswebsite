import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { BlogCard } from "./blogCard";

import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url";
import { createImageUrlBuilder } from "@sanity/image-url";

const POSTS_QUERY = `*[
  _type == "BlogPost"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, heroImage, author, readingTime}`;

const options = { next: { revalidate: 30 } };

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? createImageUrlBuilder({ projectId, dataset }).image(source)
        : null;

export const BlogList = async () => {
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

    console.log("Fetched posts:", posts[0]); // Debugging log
    return (
        <>
            <div className="flex flex-row gap-4 flex-wrap mx-auto py-8 px-22">
                {posts.map((post) => (
                    <BlogCard key={post._id} title={post.title} publishedAt={post.publishedAt} slug={post.slug.current} heroImage={post.heroImage
                        ? urlFor(post.heroImage)?.width(550).height(310).url()
                        : null}
                        author={post.author}
                        readingTime={post.readingTime}

                        />
                ))}
            </div>
        </>
    )
}