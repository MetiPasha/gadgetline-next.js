import { SELLER_BASE_URL } from "@/config.server";
import { apiFetch } from "../server-api/base";
import { IOrder, PaginatedResultApi } from "../server-api/types";

// Get a paginated list of colors
export const getSellerOrders = async (
  params?: unknown
): Promise<PaginatedResultApi<IOrder>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IOrder>>(
    `${SELLER_BASE_URL}/orders?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};
