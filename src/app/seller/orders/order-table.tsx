import { IOrder, PaginatedResultApi } from "@/api/server-api/types";
import { TableContainer } from "@/components/seller/tables/TableContainer";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { use } from "react";
import OrderRow from "./order-row";

export function SellerOrdersTable({
  orders,
}: {
  orders: Promise<PaginatedResultApi<IOrder>>;
}) {
  const allOrders = use(orders);

  return (
    <Box sx={{ p: 2 }}>
      <Paper sx={{ borderRadius: 2, boxShadow: 2, overflow: "hidden" }}>
        <TableContainer title="Orders">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>شناسه</TableCell>
                <TableCell>کاربر</TableCell>
                <TableCell>وضعیت</TableCell>
                <TableCell>شهر</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allOrders?.results?.length ? (
                allOrders.results.map((order) => (
                  <OrderRow key={order.id} order={order} />
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    سفارشی یافت نشد!
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
