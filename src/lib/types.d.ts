import type { PortableTextBlock } from "next-sanity";

export interface ArticleHead {
  _id: string;
  title: string;
  _createdAt: string;
  slug: string;
}

export interface Article extends ArticleHead {
  body: PortableTextBlock[];
  tags: string[];
  source: string;
}
