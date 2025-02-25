import { SELLER_BASE_URL } from "@/config.server";
import { apiFetch } from "../server-api/base";
import { IColor, PaginatedResultApi } from "../server-api/types";

export const getSellerColors = async (
  params?: unknown
): Promise<PaginatedResultApi<IColor>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IColor>>(
    `${SELLER_BASE_URL}/colors?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};
