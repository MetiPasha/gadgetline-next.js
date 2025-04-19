import { OrderItemWithQuantity } from "@/store/cart";
import { Typography } from "@mui/material";

interface CartTotalProps {
  cartItems: OrderItemWithQuantity[];
}

const CartTotal = ({ cartItems }: CartTotalProps) => {
  const totalAmount = cartItems.reduce(
    (acc, item) =>
      acc +
      item.productSeller.lastPrice *
        (1 - item.productSeller.discount / 100) *
        item.quantity,
    0
  );

  return (
    <Typography fontSize="16px" fontWeight="600" textAlign="right">
      جمع کل: {totalAmount.toLocaleString()} تومان
    </Typography>
  );
};

export default CartTotal;
