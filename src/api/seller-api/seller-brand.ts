import { SELLER_BASE_URL } from "@/config.server";
import { IBrand, PaginatedResultApi } from "../server-api/types";
import { apiFetch } from "../server-api/base";

export const getSellerBrands = async (
  params?: unknown
): Promise<PaginatedResultApi<IBrand>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IBrand>>(
    `${SELLER_BASE_URL}/brands?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};
