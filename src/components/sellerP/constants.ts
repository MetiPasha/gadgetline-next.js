import {
  Category,
  ShoppingBasket,
  Dashboard,
  PhoneAndroid,
} from "@mui/icons-material";

export const SIDEBAR_ITEMS = [
  { href: "/sellerp", Icon: Dashboard, text: "فروشنده" },
  { href: "/sellerp/categories", Icon: Category, text: "دسته‌بندی کالاها" },
  { href: "/sellerp/products", Icon: PhoneAndroid, text: "محصولات" },
  { href: "/sellerp/orders", Icon: ShoppingBasket, text: "سفارشات" },
];
