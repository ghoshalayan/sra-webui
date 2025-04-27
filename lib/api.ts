// This file would contain the API functions to interact with Strapi CMS
// Example implementation for a real project

import { StrapiResponse, StrapiPagination, StrapiData } from './types';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const API_TOKEN = process.env.STRAPI_API_TOKEN;

/**
 * Helper to make GET requests to Strapi API endpoints
 */
export async function fetchAPI<T>(
  endpoint: string,
  options = {}
): Promise<StrapiResponse<T>> {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  const res = await fetch(`${API_URL}${endpoint}`, mergedOptions);
  
  if (!res.ok) {
    console.error(await res.text());
    throw new Error(`An error occurred please try again`);
  }
  
  const data = await res.json();
  return data;
}

/**
 * Get all entries from a collection type
 */
export async function getAllOfType<T>(
  type: string, 
  queryParams = {}
): Promise<StrapiData<T>[]> {
  const params = new URLSearchParams(queryParams as Record<string, string>);
  const data = await fetchAPI<T[]>(`/api/${type}?${params.toString()}`);
  return data.data;
}

/**
 * Get a single entry by slug
 */
export async function getBySlug<T>(
  type: string,
  slug: string,
  queryParams = {}
): Promise<StrapiData<T> | null> {
  const params = new URLSearchParams({
    'filters[slug][$eq]': slug,
    ...queryParams as Record<string, string>,
  });
  
  const data = await fetchAPI<T[]>(`/api/${type}?${params.toString()}`);
  
  return data.data.length > 0 ? data.data[0] : null;
}

/**
 * Get events with pagination
 */
export async function getEvents(
  page = 1,
  pageSize = 10,
  queryParams = {}
): Promise<{ data: StrapiData<any>[]; pagination: StrapiPagination }> {
  const params = new URLSearchParams({
    'pagination[page]': page.toString(),
    'pagination[pageSize]': pageSize.toString(),
    'sort': 'date:asc',
    ...queryParams as Record<string, string>,
  });
  
  const data = await fetchAPI(`/api/events?${params.toString()}`);
  
  return {
    data: data.data,
    pagination: data.meta.pagination,
  };
}