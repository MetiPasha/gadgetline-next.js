import Axios from "@/api/client-api/base";
import { IShopProducts, PaginatedResultApi } from "../types";
import { useQuery } from "@tanstack/react-query";

async function getShopAllProducts() {
  const res = await Axios.get<PaginatedResultApi<IShopProducts>>("/products", {
    params: { pageSize: 1000 },
  });
  return res.data;
}
export function useShopProductsQuery() {
  return useQuery({
    queryKey: ["shop-products"],
    queryFn: () => getShopAllProducts(),
  });
}

export const getProductByCode = async (code: number) => {
  try {
    const res = await Axios.get<IShopProducts>(`/products/${code}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
