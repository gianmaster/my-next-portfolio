interface IDefaultSanityProps {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

type Slug = {
  _type: 'slug';
  current: string;
};

type Image = {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
};

export type Post = IDefaultSanityProps & {
  title: string;
  body?: string;
  slug: production;
  author: Author;
  lang: Language;
  mainImage: Image;
  categories: Category[];
  metaDescription?: string;
};

export type Author = IDefaultSanityProps & {
  name: string;
  slug: production;
  image: Image;
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
  image: Image;
};

export type SanityResponse<T> = {
  data: T[];
  total: number;
  limit: number;
  offset: number;
  size: number;
};
