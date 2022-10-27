import { sanityClient } from '../lib/sanity.server';
import { Experience, PageSection, Post, Project, Skill } from '../lib/typing';

export const getAllPosts = async () => {
  const query = `
    *[_type == "post"] {
      _id,
      title,
      author -> {
        name,
        image
      },
      description,
      mainImage,
      slug
    }`;

  let posts: Post[] = [];
  try {
    posts = await sanityClient.fetch(query);
  } catch (error) {
    console.error(error);
  }

  return posts;
};

export const getPostBySlug = async (slug: string) => {
  let post: Post | null = null;
  try {
    post = await sanityClient.fetch(
      `*[_type == "post" && slug.current == $slug]`,
      {
        slug,
      }
    );
  } catch (error) {
    console.error(error);
  }

  return post;
};

export const getProfileExperience = async () => {
  const query = `
    *[_type == "profileExperience"]{
      _id,
      company,
      role,
      description,
      location,
      startDate,
      endDate,
      link,
      lang -> {
        code,
        description
      }
    }`;

  let experiences: Experience[] = [];
  try {
    experiences = await sanityClient.fetch(query);
  } catch (error) {
    console.error(error);
  }

  return experiences;
};

export const getProfileSkills = async () => {
  const query = `
    *[_type == "profileSkills"]`;

  let skills: Skill[] = [];
  try {
    skills = await sanityClient.fetch(query);
  } catch (error) {
    console.error(error);
  }

  return skills;
};

export const getProfileProjects = async () => {
  const query = `
    *[_type == "project"]{
      _id,
      name,
      description,
      link,
      repo,
      lang -> {
        code,
        description
      },
      image
    }`;

  let projects: Project[] = [];
  try {
    projects = await sanityClient.fetch(query);
  } catch (error) {
    console.error(error);
  }

  return projects;
};

export const getProfilePageSections = async () => {
  const query = `
    *[_type == "profileSection"]{
      _id,
      content,
      lang -> {
        code,
        description
      }
    }`;

  let pageSections: PageSection[] = [];
  try {
    pageSections = await sanityClient.fetch(query);
  } catch (error) {
    console.error(error);
  }

  return pageSections;
};
