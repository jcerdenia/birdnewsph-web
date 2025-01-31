// lib/sanity.js
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "v1",
  useCdn: true,
});

export const QUERY = {
  // Get articles published in the last 72 hours to date
  articles: `
    *[_type == "article"
      && dateTime(_createdAt) >= dateTime($date) - 60*60*72 
      && dateTime(_createdAt) < dateTime($date)
    ] | order(_createdAt desc) {
      _id,
      _createdAt,
      title,
      slug,
    }
  `,
  // Get articles published in the last 72 hours to date
  taggedArticles: `
    *[
      _type == "article"
      && dateTime(_createdAt) >= dateTime($date) - 60*60*72
      && dateTime(_createdAt) < dateTime($date)
      && $tags[0] in tags
    ] | order(_createdAt desc) {
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
