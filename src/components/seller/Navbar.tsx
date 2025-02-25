"use client";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Category as CategoryIcon,
  ShoppingBasket as ShoppingBasketIcon,
  Smartphone as SmartphoneIcon,
  Money,
} from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import { useDrawer } from "./seller-drawer-provider";
import { logoutAction } from "@/actions/auth/logout";
import Link from "next/link";

const drawerWidth = 240; // عرض منو کشویی

const menuItems = [
  {
    title: "مدیریت محصولات",
    icon: <SmartphoneIcon />,
    href: "/seller/manage-products",
  },
  { title: "سفارشات", icon: <ShoppingBasketIcon />, href: "/seller/orders" },
  { title: "تعیین قیمت", icon: <Money />, href: "/seller/set-price" },
  {
    title: "دسته‌بندی کالاها",
    icon: <CategoryIcon />,
    href: "/seller/category",
  },
];

const SellerNavbar = () => {
  const { isDrawerOpen, toggleDrawer } = useDrawer();

  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "secondary.main", // تغییر رنگ به secondary.main
          color: "secondary.contrastText", // تغییر رنگ متن بر اساس تم
          transition: "margin-left 0.3s ease",
          marginLeft: isDrawerOpen ? `${drawerWidth}px` : "0",
          width: isDrawerOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
        }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          {/* Box حاوی عنوان و فیلد جستجو */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="h6">
              {" "}
              <Link
                href="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                گجت لاین
              </Link>
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              sx={{
                backgroundColor: "#fff",
                borderRadius: 1,
                width: "200px",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          {/* دکمه خروج در گوشه سمت راست */}
          <IconButton
            aria-label="خروج"
            color="inherit"
            edge="end"
            size="large"
            onClick={async () => await logoutAction()}
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#f5f5f5",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            right: 0,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px",
            backgroundColor: "secondary.main",
            color: "#fff",
          }}
        >
          <Typography variant="h6">منوی فروشنده</Typography>
          <Box onClick={toggleDrawer} sx={{ color: "#fff", pb: 5 }}></Box>
        </Box>

        {/* User details */}
        <Box
          sx={{
            textAlign: "center",
            padding: "16px",
            backgroundColor: "#f0f0f0",
          }}
        ></Box>

        {/* List */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.title}
              component="a"
              href={item.href}
              sx={{
                color: "#000",
                cursor: "pointer",
                "&:hover": { bgcolor: "neutral.main" },
              }}
            >
              <ListItemIcon sx={{ color: "black" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SellerNavbar;
