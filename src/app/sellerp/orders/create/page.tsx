import { CreateBadgeForm } from "@/components/forms/create-badge";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function CreateOrders() {
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ایجاد سفارش جدید</Typography>
          <CreateBadgeForm />
        </CardContent>
      </Card>
    </Box>
  );
}
