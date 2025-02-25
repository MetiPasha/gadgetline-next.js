import Axios from "@/api/client-api/base";
import { ICategory, PaginatedResultApi } from "@/api/server-api/types";
import { useQuery } from "@tanstack/react-query";

async function getSellerAllCategories(params: { q?: string }) {
  const res = await Axios.get<PaginatedResultApi<ICategory>>(
    "/shop/categories",
    {
      params: { ...params, pageSize: 25 },
    }
  );
  return res.data;
}

export function useSellerCategoriesQuery(q: string) {
  return useQuery({
    queryKey: ["sellerCategories", q],
    queryFn: () => getSellerAllCategories({ q }),
  });
}
