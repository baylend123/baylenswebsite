import { createClient } from "@sanity/client";

export const writeClient = createClient({
  projectId: "cqsj8toq",
  dataset: "production",
  apiVersion: "2026-03-01",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});