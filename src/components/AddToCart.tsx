import { IShopProducts, SellerInfo } from "@/api/server-api/types";
import { useCartStore } from "@/store/cartProvider";
import { Button } from "@mui/material";

type Props = {
  product: IShopProducts;
  seller: SellerInfo;
  color: string;
  quantity: number;
};

const AddToCartButton = ({ product, seller, color, quantity }: Props) => {
  const { incrementItemCount } = useCartStore((state) => state);

  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      sx={{ height: "50px", minWidth: "292px" }}
      onClick={() =>
        incrementItemCount({
          product,
          productSeller: seller,
          color,
          quantity,
        })
      }
    >
      افزودن به سبد خرید
    </Button>
  );
};

export default AddToCartButton;
