import { SELLER_BASE_URL } from "@/config.server";
import { apiFetch } from "../server-api/base";
import { ICity, PaginatedResultApi } from "../server-api/types";

export const getSellerCities = async (
  params?: unknown
): Promise<PaginatedResultApi<ICity>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<ICity>>(
    `${SELLER_BASE_URL}/cities?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};
