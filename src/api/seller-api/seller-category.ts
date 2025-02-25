import { SELLER_BASE_URL } from "@/config.server";
import { ICategory, PaginatedResultApi } from "../server-api/types";
import { apiFetch } from "../server-api/base";

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
