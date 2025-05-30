"use server";
import "server-only";

import { ADMIN_BASE_URL } from "@/config.server";
import type { ISeller, PaginatedResultApi } from "./types";
import { revalidateTag } from "next/cache";
import { apiFetch } from "./base";
import type { SellerType } from "@/lib/validations";

// Create a new Seller
export const createSeller = async (
  body: Partial<SellerType>
): Promise<ISeller> => {
  return apiFetch<ISeller>(`${ADMIN_BASE_URL}/sellers`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

// Update an existing city
export const updateSeller = async (
  id: string,
  body: Partial<SellerType>
): Promise<ISeller> => {
  const data = await apiFetch<ISeller>(`${ADMIN_BASE_URL}/sellers/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  revalidateTag(`sellers-${id}`);
  return data;
};

// Get a paginated list of Sellers
export const getAllSellers = async (
  params?: unknown
): Promise<PaginatedResultApi<ISeller>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<ISeller>>(
    `${ADMIN_BASE_URL}/sellers?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

// Delete a Seller
export const deleteSeller = async (
  id: string
): Promise<{ message: string }> => {
  return apiFetch<{ message: string }>(`${ADMIN_BASE_URL}/sellers/${id}`, {
    method: "DELETE",
  });
};

// Get a Seller by its ID
export const getSellerById = async (id: string): Promise<ISeller> => {
  return apiFetch<ISeller>(`${ADMIN_BASE_URL}/sellers/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleSeller", `sellers-${id}`],
    },
  });
};
