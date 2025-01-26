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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import Cart from "@/components/Cart";

const Header = () => {
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

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h4" sx={{ marginRight: "5rem", color: "black" }}>
            گجت لاین
          </Typography>

          <IconButton
            sx={{ ":hover": { color: "orange" } }}
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
            <MenuItem onClick={handleMenuClose}>لپ تاپ</MenuItem>
            <MenuItem onClick={handleMenuClose}>هدفون</MenuItem>
            <MenuItem onClick={handleMenuClose}>اسپیکر</MenuItem>
          </Menu>

          <TextField
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="جستجو در گجت لاین..."
            sx={{
              background: "white",
              marginLeft: 2,
              flexGrow: 1,
              maxWidth: "31.25rem",
            }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginLeft: 2,
            }}
          >
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
            <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
              ورود/ثبت نام
            </Typography>
          </Box>

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
                <ShoppingCart />
              </Badge>
            </IconButton>
            <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
              سبد خرید
            </Typography>
          </Box>
        </Box>
      </Toolbar>

      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={toggleCart}
        sx={{
          zIndex: 1300,
        }}
      >
        <Box
          sx={{
            width: "350px",
            height: "100%",
            padding: "2rem",
            backgroundColor: "white",
          }}
        >
          <Cart /> {/* کامپوننت سبد خرید */}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
