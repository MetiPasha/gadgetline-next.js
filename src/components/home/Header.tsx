"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Badge,
  Box,
  Drawer,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle, ShoppingCart, Favorite } from "@mui/icons-material"; // Import the Favorite icon
import Cart from "@/components/Cart";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const theme = useTheme();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // ارسال کاربر به صفحه جستجو هنگام فشردن Enter
  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const handleLoginClick = () => {
    router.push("/auth/login");
  };

  const handleFavoritesClick = () => {
    router.push("/favorites"); // Redirect to favorites page
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: theme.palette.primary.dark }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h4"
            sx={{ marginRight: "5rem", color: theme.palette.secondary.light }}
          >
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              گجت لاین
            </Link>
          </Typography>

          <IconButton
            sx={{ ":hover": { color: theme.palette.secondary.light } }}
            color="inherit"
            onClick={handleMenuClick}
          >
            <MenuIcon />
            دسته‌بندی
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <Link href="/categories/laptop" passHref legacyBehavior>
              <MenuItem onClick={handleMenuClose} component="a">
                لپ تاپ
              </MenuItem>
            </Link>
            <Link href="/categories/phone" passHref legacyBehavior>
              <MenuItem onClick={handleMenuClose} component="a">
                موبایل
              </MenuItem>
            </Link>
            <MenuItem onClick={handleMenuClose}>هدفون</MenuItem>
          </Menu>

          {/* فرم جستجو */}
          <form
            onSubmit={handleSearchSubmit}
            style={{ display: "flex", flexGrow: 1 }}
          >
            <TextField
              variant="outlined"
              size="small"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="جستجو در گجت لاین..."
              sx={{
                borderRadius: "12px",
                background: theme.palette.background.default,
                marginLeft: 2,
                flexGrow: 1,
                maxWidth: "31.25rem",
              }}
            />
          </form>
        </Box>

        <Typography
          variant="h6"
          sx={{
            color: theme.palette.secondary.main,
            marginLeft: 4,
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          کیفیت برتر، قیمت بهتر
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginLeft: 2,
            }}
          >
            <IconButton color="inherit" onClick={handleFavoritesClick}>
              <Favorite sx={{ fontSize: "1.7rem" }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginLeft: 2,
            }}
          >
            <IconButton color="inherit" onClick={handleLoginClick}>
              <AccountCircle sx={{ fontSize: "1.7rem" }} />
            </IconButton>
          </Box>

          {/* اضافه کردن دکمه علاقه‌مندی */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginLeft: 2,
            }}
          >
            <IconButton color="inherit" onClick={toggleCart}>
              <Badge badgeContent={cartItems} color="error">
                <ShoppingCart sx={{ fontSize: "1.7rem" }} />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      </Toolbar>

      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={toggleCart}
        sx={{ zIndex: 1300 }}
      >
        <Box
          sx={{
            width: "350px",
            height: "100%",
            padding: "2rem",
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Cart />
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
