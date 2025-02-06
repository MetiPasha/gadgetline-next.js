import AuthProvider from "@/components/AuthProvider";
import DrawerHeader from "@/components/sellerP/components/DrawerHeader";
import DrawerProvider from "@/components/sellerP/DrawerProvider";
import MiniDrawer from "@/components/sellerP/MiniDrawer";
import SellerHeader from "@/components/sellerP/SellerHeader";
import QueryProvider from "@/components/QueryProvider";
import { auth } from "@/lib/session";
import { Box } from "@mui/material";

async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { accessToken } = await auth();
  return (
    <AuthProvider accessToken={accessToken || ""}>
      <QueryProvider>
        <Box sx={{ display: "flex" }}>
          <DrawerProvider>
            <SellerHeader />
            <MiniDrawer />
          </DrawerProvider>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            {children}
          </Box>
        </Box>
      </QueryProvider>
    </AuthProvider>
  );
}

export default DashboardLayout;
