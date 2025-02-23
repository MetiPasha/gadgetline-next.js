import Header from "@/components/home/Header";
import PaymentSuccess from "@/components/paymentstuff/PaymentSuccess";
import Footer from "@/components/shared/Footer";
import { Box } from "@mui/material";

const Payment = () => {
  return (
    <Box>
      <Header />
      <PaymentSuccess />
      <Footer />
    </Box>
  );
};

export default Payment;
