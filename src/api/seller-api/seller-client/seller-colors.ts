import Axios from "@/api/client-api/base";
import { IColor, PaginatedResultApi } from "@/api/server-api/types";
import { useQuery } from "@tanstack/react-query";

async function getSellerColors(params: { q?: string }) {
  const res = await Axios.get<PaginatedResultApi<IColor>>("/shop/colors", {
    params: { ...params, pageSize: 25 },
  });
  return res.data;
}

export function useSellerColorsQuery(q: string) {
  return useQuery({
    queryKey: ["sellerColors", q],
    queryFn: () => getSellerColors({ q }),
  });
}
