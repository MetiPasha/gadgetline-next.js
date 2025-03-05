import { Box } from "@mui/material";

import Header from "@/components/home/Header";
import Footer from "@/components/shared/Footer";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box bgcolor="background.paper">
      <Header />
      {/* header is fixed so main component must be careful about margin */}
      <Box mt={16} />
      <Box component="main">{children}</Box>
      <Footer />
    </Box>
  );
}
