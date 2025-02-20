import { Box, Typography } from "@mui/material";

interface ProductPriceProps {
  price: number;
  discount: number;
}

const ProductPrice = ({ price, discount }: ProductPriceProps) => {
  const discountedPrice = price * (1 - discount / 100);

  return (
    <Box display="flex" alignItems="center" pt={1}>
      <Typography
        variant="caption"
        color="gray"
        sx={{
          textDecoration: discount > 0 ? "line-through" : "none",
        }}
      >
        {price.toLocaleString()} تومان
      </Typography>
      {discount > 0 && (
        <Typography variant="caption" color="red" sx={{ ml: 1 }}>
          {discountedPrice.toLocaleString()} تومان
        </Typography>
      )}
    </Box>
  );
};

export default ProductPrice;
