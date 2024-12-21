// lib/sanity.js
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "v1",
  useCdn: true,
});

export const QUERY = {
  // Get articles published in the last 72 hours
  articles: `
    *[_type == "article" && dateTime(_createdAt) > dateTime(now()) - 60*60*72]
    | order(_createdAt desc) {
      _id,
      _createdAt,
      title,
      slug,
    }
  `,
  // Get article by slug
  article: `
    *[_type == "article" && slug == $slug][0]{
      _id,
      _createdAt,
      title,
      body,
      tags,
      source,
    }`,
};

export default client;
