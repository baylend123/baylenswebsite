import { defineField, defineType } from "sanity";

export const commentType = defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    defineField({
      name: "post",
      title: "Post",
      type: "reference",
      to: [{ type: "BlogPost" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      validation: (rule) => rule.required().min(2).max(80),
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required().min(2).max(2000),
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "author",
      subtitle: "message",
    },
  },
});