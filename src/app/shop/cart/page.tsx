"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useCartStore } from "@/store/cartProvider";
import ProductPrice from "./productPrice";
import CartTotal from "./cartTotal";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const cartItems = useCartStore((state) => state.items);
  const incrementItem = useCartStore((state) => state.incrementItemCount);
  const decrementItem = useCartStore((state) => state.decrementItemCount);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        p: 3,
        pt: 12,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {cartItems.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={"/empty.jpg"} alt="empty-cart" width={400} height={400} />
          <Typography variant="h5" color="text.secondary">
            سبد خرید شما خالی است.
          </Typography>

          <Typography sx={{ paddingTop: "10px" }}>
            برای مشاهده محصولات بیشتر به صفحه{" "}
            <Link
              href="/products"
              style={{
                color: "blue",
                textDecoration: "none",
              }}
            >
              محصولات
            </Link>{" "}
            بروید.
          </Typography>
        </Box>
      ) : (
        <>
          <Box sx={{ flex: 1, overflowY: "auto", pr: 1 }}>
            {cartItems.map((item, index) => {
              return (
                <Card
                  key={`${item.product.code}-${index}`}
                  sx={{ mb: 2, display: "flex" }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 120, height: 120 }}
                    image={item.product.images.main}
                    alt={item.product.titleFa}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6">{item.product.titleFa}</Typography>

                    {/* ✅ بررسی مقدار قبل از toLocaleString() */}
                    <ProductPrice
                      price={
                        item.productSeller?.lastPrice
                          ? Number(item.productSeller.lastPrice)
                          : 0
                      }
                      discount={item.productSeller?.discount ?? 0}
                    />

                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                      <IconButton
                        onClick={() => incrementItem(item)}
                        color="primary"
                      >
                        <Add />
                      </IconButton>
                      <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                      <IconButton
                        onClick={() =>
                          item.quantity > 1
                            ? decrementItem(
                                item.productSeller.id,
                                item.product.id,
                                item.color
                              )
                            : removeItem(
                                item.productSeller.id,
                                item.product.id,
                                item.color
                              )
                        }
                        color="primary"
                      >
                        {item.quantity > 1 ? <Remove /> : <Delete />}
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              );
            })}
          </Box>

          <Box
            sx={{
              position: "sticky",
              bottom: 0,
              backgroundColor: "white",
              py: 2,
              textAlign: "right",
              borderTop: "1px solid #ddd",
            }}
          >
            <CartTotal cartItems={cartItems} />
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
            >
              ادامه خرید
            </Button>
          </Box>
        </>
      )}
      <Link href={"/payment"}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 2, width: "100%" }}
        >
          پرداخت
        </Button>
      </Link>
    </Box>
  );
};

export default CartPage;
