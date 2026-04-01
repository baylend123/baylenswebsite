import type { PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "@/sanity/client";

const builder = createImageUrlBuilder(client);
const urlFor = (source: SanityImageSource) => builder.image(source);

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="mt-10 mb-6 text-4xl font-bold leading-tight text-[#200B04]">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-3xl font-bold leading-tight text-[#200B04]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-2xl font-semibold leading-snug text-[#6B4D29]">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 mb-2 text-xl font-semibold text-[#6B4D29]">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="mb-5 text-base leading-8 text-[#3B2A1A]">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-[#D88A2D] pl-4 italic text-[#6B4D29]">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 text-[#3B2A1A]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 text-[#3B2A1A]">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-[#200B04]">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");

      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer noopener" : undefined}
          className="font-medium text-[#B96D1F] underline underline-offset-4 hover:text-[#8E5317]"
        >
          {children}
        </a>
      );
    },
  },

  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value).width(1200).auto("format").url();

      return (
        <div className="my-8 overflow-hidden rounded-2xl">
          <Image
            src={imageUrl}
            alt={value.alt || "Post image"}
            width={1200}
            height={700}
            className="h-auto w-full object-cover"
          />
          {value.alt && (
            <p className="mt-2 text-sm text-[#6B4D29]/80">{value.alt}</p>
          )}
        </div>
      );
    },
  },
};