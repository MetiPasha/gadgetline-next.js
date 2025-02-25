"use server";
import "server-only";
import { SELLER_BASE_URL } from "@/config.server";
import { revalidateTag } from "next/cache";
import { CategoryType } from "@/lib/validations";
import { apiFetch } from "../server-api/base";
import { ICategory, PaginatedResultApi } from "../server-api/types";

// Create a new category
export const createSellerCategory = async (
  body: Partial<CategoryType>
): Promise<ICategory> => {
  try {
    return apiFetch<ICategory>(`${SELLER_BASE_URL}/categories`, {
      method: "POST",
      body: JSON.stringify(body),
    });
  } catch (e) {
    throw e;
  }
};

// Update an existing category
export const updateSellerCategory = async (
  id: string,
  body: Partial<CategoryType>
): Promise<ICategory> => {
  const data = await apiFetch<ICategory>(
    `${SELLER_BASE_URL}/categories/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(body),
    }
  );
  revalidateTag(`categories-${id}`);
  return data;
};

// Get a paginated list of categories
export const getSellerCategories = async (
  params?: unknown
): Promise<PaginatedResultApi<ICategory>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<ICategory>>(
    `${SELLER_BASE_URL}/categories?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

// Delete a category
export const deleteSellerCategory = async (
  id: string
): Promise<{ message: string }> => {
  return apiFetch<{ message: string }>(`${SELLER_BASE_URL}/categories/${id}`, {
    method: "DELETE",
  });
};

// Get a category by its ID
export const getSellerCategoryById = async (id: string): Promise<ICategory> => {
  return apiFetch<ICategory>(`${SELLER_BASE_URL}/categories/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleCategory", `categories-${id}`],
    },
  });
};
