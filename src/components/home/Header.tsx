"use client"; // This indicates the component is a client-side React component.

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
import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import Cart from "@/components/Cart";
import { useRouter } from "next/navigation";

const Header = () => {
  const theme = useTheme(); // Get the current theme for styling.
  const router = useRouter(); // Next.js router for navigation.
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // State for handling menu anchor.
  const [searchQuery, setSearchQuery] = useState(""); // State for the search input value.
  const [cartItems, setCartItems] = useState(1); // State for the number of items in the cart.
  const [cartOpen, setCartOpen] = useState(false); // State to control the visibility of the cart drawer.

  // Handles the opening of the menu.
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Handles the closing of the menu.
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Updates the search query state on input change.
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Toggles the cart drawer open/close state.
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  // Navigates to the login page.
  const handleLoginClick = () => {
    router.push("/auth/login");
  };

  return (
    <AppBar
      position="sticky" // Keeps the header sticky at the top of the page.
      sx={{
        backgroundColor: theme.palette.primary.dark, // Background color based on theme.
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between", // Space between logo/search and user options.
          alignItems: "center",
        }}
      >
        {/* Left Section: Logo, Menu, and Search */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Logo */}
          <Typography
            variant="h4"
            sx={{
              marginRight: "5rem",
              color: theme.palette.secondary.light, // Styled using theme.
            }}
          >
            گجت لاین
          </Typography>

          {/* Category Menu Button */}
          <IconButton
            sx={{
              ":hover": { color: theme.palette.secondary.light }, // Hover effect.
            }}
            color="inherit"
            onClick={handleMenuClick} // Opens the category menu.
          >
            <MenuIcon />
            دسته‌بندی
          </IconButton>

          {/* Category Dropdown Menu */}
          <Menu
            anchorEl={anchorEl} // Position of the menu.
            open={Boolean(anchorEl)} // Menu visibility.
            onClose={handleMenuClose} // Closes the menu.
          >
            <MenuItem onClick={handleMenuClose}>لپ تاپ</MenuItem>
            <MenuItem onClick={handleMenuClose}>هدفون</MenuItem>
            <MenuItem onClick={handleMenuClose}>موبایل</MenuItem>
          </Menu>

          {/* Search Bar */}
          <TextField
            variant="outlined"
            size="small"
            value={searchQuery} // Controlled input value.
            onChange={handleSearchChange} // Updates the search query.
            placeholder="جستجو در گجت لاین..." // Placeholder text.
            sx={{
              background: theme.palette.background.default, // Background styling.
              marginLeft: 2,
              flexGrow: 1, // Makes the search bar grow to fill space.
              maxWidth: "31.25rem", // Limits the width.
            }}
          />
        </Box>

        {/* Brand Slogan */}
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.secondary.main,
            marginLeft: 4,
            fontWeight: "bold",
            fontSize: "2rem", // Large font for visibility.
          }}
        >
          کیفیت برتر، قیمت بهتر
        </Typography>

        {/* Right Section: Login and Cart */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Login Button */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Centers icon and text vertically.
              marginLeft: 2,
            }}
          >
            <IconButton color="inherit" onClick={handleLoginClick}>
              <AccountCircle />
            </IconButton>
            <Typography
              variant="body2"
              sx={{ fontSize: "0.75rem", color: theme.palette.secondary.light }}
            >
              ورود/ثبت نام
            </Typography>
          </Box>

          {/* Cart Button */}
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
            <Typography
              variant="body2"
              sx={{ fontSize: "0.75rem", color: theme.palette.secondary.light }}
            >
              سبد خرید
            </Typography>
          </Box>
        </Box>
      </Toolbar>

      {/* Cart Drawer */}
      <Drawer
        anchor="right" // Opens the drawer from the right side.
        open={cartOpen} // Controlled visibility.
        onClose={toggleCart} // Closes the drawer.
        sx={{
          zIndex: 1300, // Ensures the drawer is above other components.
        }}
      >
        <Box
          sx={{
            width: "350px", // Fixed width for the cart drawer.
            height: "100%", // Full height.
            padding: "2rem", // Adds padding inside the drawer.
            backgroundColor: theme.palette.background.default, // Styled using theme.
          }}
        >
          <Cart /> {/* Cart component rendering the cart items. */}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
