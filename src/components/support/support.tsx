"use client";
import React from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";

const PageWrapper = styled("div")({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #007bff, #00d4ff)",
});

const FunContainer = styled(Container)({
  textAlign: "center",
  direction: "rtl",
  fontFamily: "IranSans, Arial, sans-serif",
});

const Support: React.FC = () => {
  const handleHelpClick = () => {
    alert("پشتیبانی نمیکنیم 😜");
  };

  return (
    <PageWrapper>
      <FunContainer maxWidth="sm">
        <Card
          variant="outlined"
          sx={{ padding: 3, borderRadius: 4, boxShadow: 3 }}
        >
          <CardContent>
            <Typography variant="h4" gutterBottom>
              نیاز به پشتیبانی داری؟ 🤔
            </Typography>
            <Typography variant="body1" paragraph>
              جای نگرانی نیست! ما اینجاییم که کمکت کنیم. فقط روی دکمه زیر کلیک
              کن همه چی حله 🎉
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleHelpClick}
            >
              کمک می‌خوام! 🚀
            </Button>
          </CardContent>
        </Card>
      </FunContainer>
    </PageWrapper>
  );
};

export default Support;
