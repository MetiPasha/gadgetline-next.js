import { SELLER_BASE_URL } from "@/config.server";
import { IBadge, PaginatedResultApi } from "../server-api/types";
import { apiFetch } from "../server-api/base";

export const getSellerBadges = async (params?: unknown) => {
  const search = new URLSearchParams(params as string);
  const data = await apiFetch<PaginatedResultApi<IBadge>>(
    `${SELLER_BASE_URL}/badges?${search.toString()}`
  );
  return data;
};
