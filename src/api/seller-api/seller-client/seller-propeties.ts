import Axios from "@/api/client-api/base";
import { IProperty, PaginatedResultApi } from "@/api/server-api/types";
import { useQuery } from "@tanstack/react-query";

async function getSellerAllProperties(params: { q?: string }) {
  const res = await Axios.get<PaginatedResultApi<IProperty>>(
    "/shop/properties",
    {
      params: { ...params, pageSize: 25 },
    }
  );
  return res.data;
}

export function useSellerPropertiesQuery(q: string) {
  return useQuery({
    queryKey: ["sellerProperties", q],
    queryFn: () => getSellerAllProperties({ q }),
  });
}
