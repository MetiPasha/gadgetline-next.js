import Axios from "@/api/client-api/base";
import { IBrand, PaginatedResultApi } from "@/api/server-api/types";
import { useQuery } from "@tanstack/react-query";
async function getSellerBrands(params: { q?: string }) {
  const res = await Axios.get<PaginatedResultApi<IBrand>>("/shop/brands", {
    params: { ...params, pageSize: 25 },
  });
  return res.data;
}
export function useSellerBrandsQuery(q: string) {
  return useQuery({
    queryKey: ["sellerBrands", q],
    queryFn: () => getSellerBrands({ q }),
  });
}
