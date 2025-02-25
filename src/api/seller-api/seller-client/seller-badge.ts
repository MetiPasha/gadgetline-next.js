import Axios from "@/api/client-api/base";
import { IBadge, PaginatedResultApi } from "@/api/server-api/types";
import { useQuery } from "@tanstack/react-query";
async function getSellerBadges(params: { q?: string }) {
  const res = await Axios.get<PaginatedResultApi<IBadge>>("/shop/badges", {
    params: { ...params, pageSize: 25 },
  });
  return res.data;
}
export function useSellerBadgesQuery(q: string) {
  return useQuery({
    queryKey: ["sellerBadges", q],
    queryFn: () => getSellerBadges({ q }),
  });
}
