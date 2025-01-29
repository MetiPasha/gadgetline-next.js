"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { validateLoginData } from "@/lib/loginValidation"; // ایمپورت تابع validateLoginData

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(4),
  position: "relative",
  zIndex: 1,
}));

const StyledForm = styled("form")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(1),
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  padding: theme.spacing(4),
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    "& fieldset": {
      borderColor: "#D3D3D3",
    },
    "&:hover fieldset": {
      borderColor: "#4B0082",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#4B0082",
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
  backgroundColor: "linear-gradient(to right, #1976d3 0%, #1976d3 100%)",
  color: "#FFFFFF",
  borderRadius: "4px",
  height: "48px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor:
      "linear-gradient(to right,rgb(110, 152, 195) 0%, #1976d3 100%)",
  },
}));

const StyledLink = styled(Link)({
  color: "gray",
});

const StyledRegisterLink = styled(Link)({
  color: "gray",
});

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // اضافه کردن وضعیت برای نمایش/مخفی کردن پسورد

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: "" }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrors((prev) => ({ ...prev, password: "" }));
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev); // تغییر وضعیت نمایش/مخفی بودن پسورد
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // اعتبارسنجی داده‌ها با استفاده از تابع validateLoginData
    const validationResult = validateLoginData({ email, password });

    if (validationResult.isValid) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        console.log("ورود با موفقیت انجام شد", { email, password });
      }, 2000);
    } else {
      setErrors(validationResult.errors);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1976D2, #42A5F5, #BBDEFB)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <StyledContainer component="main" maxWidth="xs">
        <StyledForm onSubmit={handleSubmit} noValidate>
          <Typography
            component="h1"
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: "bold",
              color: "#2F4F4F",
              textAlign: "center",
            }}
          >
            ورود
          </Typography>
          <StyledTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="ایمیل"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
          <StyledTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="رمز عبور"
            type={showPassword ? "text" : "password"} // اگر showPassword true باشد، پسورد نمایش داده می‌شود
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon color="action" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    onClick={handleClickShowPassword} // با کلیک بر روی آیکون چشم وضعیت نمایش/مخفی شدن پسورد تغییر می‌کند
                    edge="end"
                    sx={{ color: "gray" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "ورود"
            )}
          </StyledButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <StyledLink href="#" variant="body2">
              فراموشی رمز عبور؟
            </StyledLink>
            <StyledRegisterLink href="/auth/register" variant="body2">
              ثبت نام
            </StyledRegisterLink>
          </Box>
        </StyledForm>
      </StyledContainer>
    </Box>
  );
};

export default LoginPage;
