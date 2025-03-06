// import { useInfiniteQuery } from "@tanstack/react-query";
// import Axios from "@/api/client-api/base";
// import { IShopProducts, PaginatedResultApi } from "@/api/server-api/types";

// async function getShopAllProducts({ pageParam = 1 }) {
//   const res = await Axios.get<PaginatedResultApi<IShopProducts>>("/products", {
//     params: { pageSize: 8, page: pageParam },
//   });
//   return res.data;
// }

// export function useShopProductsQuery() {
//   return useInfiniteQuery<PaginatedResultApi<IShopProducts>>({
//     queryKey: ["shop-products"],
//     queryFn: ({ pageParam }) => getShopAllProducts({ pageParam }),
//     initialPageParam: 1,
//     getNextPageParam: (lastPage, allPages) => {
//       return lastPage.hasNextPage ? allPages.length + 1 : undefined;
//     },
//   });
// }
