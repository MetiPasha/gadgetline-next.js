import { SELLER_BASE_URL } from "@/config.server";
import { IProperty, PaginatedResultApi } from "../server-api/types";
import { apiFetch } from "../server-api/base";

export const getSellerProperties = async (
  params?: unknown
): Promise<PaginatedResultApi<IProperty>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IProperty>>(
    `${SELLER_BASE_URL}/properties?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};
