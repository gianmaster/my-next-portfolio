interface IDefaultSanityProps {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

export type Post = IDefaultSanityProps & {
  title: string;
  body: string;
  slug: string;
  author: Author;
  lang: Language;
  mainImage: string;
  categories: Category[];
  metaDescription: string;
};

export type Author = IDefaultSanityProps & {
  name: string;
  slug: string;
  image: string;
  bio: string[];
};

export type Category = IDefaultSanityProps & {
  title: string;
  description: string;
};

export type Language = IDefaultSanityProps & {
  code: string;
  description: string;
};

export type Experience = IDefaultSanityProps & {
  name: string;
  role: string;
  lang: Language;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  link: string;
};

export type PageSection = IDefaultSanityProps & {
  name: string;
  lang: Language;
  content: string;
};

export type Skill = IDefaultSanityProps & {
  name: string;
  percentage: number;
};

export type Project = IDefaultSanityProps & {
  name: string;
  description: string;
  link: string;
  repo: string;
  lang: Language;
  image: string;
};

export type SanityResponse<T> = {
  data: T[];
  total: number;
  limit: number;
  offset: number;
  size: number;
};
