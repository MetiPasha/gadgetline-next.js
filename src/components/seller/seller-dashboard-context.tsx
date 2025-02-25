"use client";

import { Box } from "@mui/material";
import SellerNavbar from "./Navbar";
import { useDrawer } from "./seller-drawer-provider";

const DashboardContent = ({ children }: { children: React.ReactNode }) => {
  const { isDrawerOpen } = useDrawer();

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <SellerNavbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          transition: "margin 0.3s ease-in-out",
          marginLeft: isDrawerOpen ? "240px" : "0px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default DashboardContent;
