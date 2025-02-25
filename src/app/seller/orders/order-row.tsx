"use client";
import { IOrder } from "@/api/server-api/types";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";

function OrderRow({ order }: { order: IOrder }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{order.id}</TableCell>
        <TableCell>{order.user.email}</TableCell>
        <TableCell>{order.orderStatus}</TableCell>
        <TableCell>{order.shippingAddress.city}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell colSpan={5} sx={{ p: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ m: 2 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>کالا</TableCell>
                    <TableCell>تعداد</TableCell>
                    <TableCell>قیمت</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.orderItems.map((item) => (
                    <TableRow key={item.productSeller.product.id}>
                      <TableCell>
                        {item.productSeller.product.titleFa}
                      </TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>{item.productSeller.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
export default OrderRow;
