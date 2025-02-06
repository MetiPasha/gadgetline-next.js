import {
  Category,
  ShoppingBasket,
  Dashboard,
  PhoneAndroid,
} from "@mui/icons-material";

export const SIDEBAR_ITEMS = [
  { href: "/dashboard", Icon: Dashboard, text: "فروشنده" },
  { href: "/dashboard/categories", Icon: Category, text: "دسته‌بندی کالاها" },
  { href: "/dashboard/products", Icon: PhoneAndroid, text: "محصولات" },
  { href: "/dashboard/orders", Icon: ShoppingBasket, text: "سفارشات" },
];
