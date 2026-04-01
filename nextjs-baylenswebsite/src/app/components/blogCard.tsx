import { SanityImageSource } from "@sanity/image-url/signed";
import Link from "next/link";
import Image from "next/image";

export const BlogCard = ({title, publishedAt, slug, heroImage, author, readingTime }: { title: string; publishedAt: string; slug: string; heroImage: string | null | undefined; author: string; readingTime: number }) => {
    console.log("Rendering BlogCard with props:", { title, publishedAt, slug, heroImage, author, readingTime }); // Debugging log
    return (
        <div className="cursor-pointer hover:bg-[#D7B980] p-2 rounded bg-[#D7B980]/50 hover:shadow">
   
                <Link href={`/blog/${slug}`}>
                <Image
                    src={heroImage || "/placeholder.png"}
                    alt={title}
                    width={400}
                    height={200}
                    className="mb-4 rounded object-cover"
                />
                <div className="px-2 ">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="mt-2">{readingTime} min read</p>
                    <div className="flex flex-row justify-between mt-2 ">
                        <p>Author: {author}</p>
                        <p>{new Date(publishedAt).toLocaleDateString()}</p>
                    </div>
                </div>
                </Link>
  
        </div>
    )
}