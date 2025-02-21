// app/page.tsx

import Header from "@/components/home/Header";
import PaymentPage from "@/components/paymentstuff/PaymentPage";

import Footer from "@/components/shared/Footer";
import { Box } from "@mui/material";

const Payment = () => {
  return (
    <Box>
      <Header />
      <PaymentPage />
      <Footer />
    </Box>
  );
};

export default Payment;
