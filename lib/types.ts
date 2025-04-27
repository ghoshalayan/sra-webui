// Types for Strapi API responses

export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiData<T> {
  id: number;
  attributes: T;
}

export interface StrapiResponse<T> {
  data: StrapiData<T>[];
  meta: {
    pagination: StrapiPagination;
  };
}

export interface StrapiImage {
  data: {
    id: number;
    attributes: {
      url: string;
      width: number;
      height: number;
      formats: {
        thumbnail: { url: string; width: number; height: number };
        small: { url: string; width: number; height: number };
        medium: { url: string; width: number; height: number };
        large: { url: string; width: number; height: number };
      };
    };
  };
}

export interface Event {
  title: string;
  description: string;
  content: string;
  slug: string;
  date: string;
  time: string;
  location: string;
  image: StrapiImage;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Page {
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Gallery {
  title: string;
  description: string;
  images: {
    data: StrapiData<{
      url: string;
      width: number;
      height: number;
      alternativeText: string;
      caption: string;
      formats: {
        thumbnail: { url: string; width: number; height: number };
        small: { url: string; width: number; height: number };
        medium: { url: string; width: number; height: number };
        large: { url: string; width: number; height: number };
      };
    }>[];
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: StrapiImage;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}