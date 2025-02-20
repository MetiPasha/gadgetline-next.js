"use client";
import { Box, Typography, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import Link from "next/link";
import LaptopMacIcon from "@mui/icons-material/LaptopMac"; // Laptop icon
import HeadphonesIcon from "@mui/icons-material/Headphones"; // Headphones icon
import SmartphoneIcon from "@mui/icons-material/Smartphone"; // Smartphone icon
import DevicesIcon from "@mui/icons-material/Devices"; // General devices icon
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
const Dashboard: React.FC = () => {
  const theme = useTheme(); // Using theme to access colors

  return (
    <Box
      sx={{
        color: "white",
        backgroundColor: theme.palette.secondary.light, // Using secondary color for the background
        padding: "2rem 0",
        direction: "rtl", // Right to left direction for the content
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between", // Space between the icons and content
          alignItems: "center", // Align items in the center
        }}
      >
        {/* Devices icon on the left */}
        <DevicesIcon sx={{ fontSize: 24, color: "aqua" }} />

        {/* Icons and their labels (Laptop, Headphones, Smartphone) */}
        <ul
          style={{
            textTransform: "uppercase", // Capitalizing the text
            textDecoration: "none", // Removing text decoration (underline)
            display: "flex", // Using flexbox for layout
            flexDirection: "row-reverse", // Right to left direction for the list
            padding: 0,
            margin: 0,
            listStyle: "none", // Removing bullet points
            gap: "4rem", // Spacing between the icons
          }}
        >
          {/* Laptop */}
          <li
            style={{
              display: "flex",
              flexDirection: "column", // Align icon and text vertically
              alignItems: "center", // Center align icon and text
              cursor: "pointer", // Change cursor to pointer when hovered
            }}
          >
            <Link
              href="/categories/laptop" // Link for Laptop category
              style={{
                textDecoration: "none", // Remove underline
                color: "inherit", // Inherit text color from parent
                textAlign: "center", // Center text below icon
              }}
            >
              <LaptopMacIcon
                style={{ fontSize: 30, color: theme.palette.primary.main }} // Icon size and color
              />
              <Typography
                variant="body1"
                style={{ marginTop: "0.5rem", fontWeight: "700" }} // Styling the text
              >
                لپ تاپ
              </Typography>
            </Link>
          </li>

          {/* Headphones */}
          <li
            style={{
              display: "flex",
              flexDirection: "column", // Align icon and text vertically
              alignItems: "center", // Center align icon and text
              cursor: "pointer", // Change cursor to pointer when hovered
            }}
          >
            <Link
              href="/categories/phone" // Link for Headphones category
              style={{
                textDecoration: "none", // Remove underline
                color: "inherit", // Inherit text color from parent
                textAlign: "center", // Center text below icon
              }}
            >
              <SmartphoneIcon
                style={{ fontSize: 30, color: theme.palette.primary.main }} // Icon size and color
              />
              <Typography
                variant="body1"
                style={{ marginTop: "0.5rem", fontWeight: "700" }} // Styling the text
              >
                موبایل
              </Typography>
            </Link>
          </li>

          {/* Smartphone */}
          <li
            style={{
              display: "flex",
              flexDirection: "column", // Align icon and text vertically
              alignItems: "center", // Center align icon and text
              cursor: "pointer", // Change cursor to pointer when hovered
            }}
          >
            <Link
              href="/headphones" // Link for Smartphone category
              style={{
                textDecoration: "none", // Remove underline
                color: "inherit", // Inherit text color from parent
                textAlign: "center", // Center text below icon
              }}
            >
              <HeadphonesIcon
                style={{ fontSize: 30, color: theme.palette.primary.main }} // Icon size and color
              />
              <Typography
                variant="body1"
                style={{ marginTop: "0.5rem", fontWeight: "700" }} // Styling the text
              >
                هدفون
              </Typography>
            </Link>
          </li>
        </ul>

        {/* Devices icon on the right */}
        <DevicesOtherIcon sx={{ fontSize: 24, color: "aqua" }} />
      </Container>
    </Box>
  );
};

export default Dashboard;
