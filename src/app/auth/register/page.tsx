"use client";
import React, { useState, useReducer } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { Visibility, VisibilityOff, Google } from "@mui/icons-material";
import { validateFormData } from "@/components/validation/registerValidation";

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: "450px",
  margin: "2rem auto",
  padding: theme.spacing(2),
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  boxSizing: "border-box",
}));

const SocialButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  "&.google": { backgroundColor: "#db4437", color: "white" },
  "&:hover": { opacity: 0.9 },
}));

// State and reducer for form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface Action {
  type: "SET_FIELD";
  field: keyof FormData;
  value: string;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

const formReducer = (state: FormData, action: Action): FormData => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const RegistrationForm: React.FC = () => {
  const [formData, dispatch] = useReducer(formReducer, {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name as keyof FormData, value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // اعتبارسنجی فرم با Zod
    const validationResult = validateFormData(formData);

    if (validationResult.isValid) {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // شبیه‌سازی درخواست API
        console.log("Form submitted:", formData);
        dispatch({ type: "SET_FIELD", field: "firstName", value: "" });
        dispatch({ type: "SET_FIELD", field: "lastName", value: "" });
        dispatch({ type: "SET_FIELD", field: "email", value: "" });
        dispatch({ type: "SET_FIELD", field: "password", value: "" });
      } catch (error) {
        console.error("Submission error:", error);
      } finally {
        setLoading(false);
      }
    } else {
      // نمایش ارورها
      setErrors(validationResult.errors);
    }
  };

  return (
    <Container
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/assets/TechPic.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/assets/TechPic.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          zIndex: -1,
        }}
      />
      <StyledCard>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            ایجاد حساب کاربری
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="textSecondary"
            gutterBottom
            sx={{ fontSize: "0.875rem" }}
          >
            برای شروع با سرویس ما ثبت‌نام کنید
          </Typography>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 2, gap: "8px" }}
          >
            <SocialButton
              variant="contained"
              className="google"
              startIcon={<Google />}
            >
              گوگل
            </SocialButton>
            <Typography
              variant="body2"
              align="center"
              color="textSecondary"
              sx={{ fontSize: "0.875rem" }}
            >
              یا با ایمیل ثبت‌نام کنید
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="نام"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              margin="normal"
              required
              sx={{ marginBottom: "10px" }}
            />

            <TextField
              fullWidth
              label="نام خانوادگی"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              margin="normal"
              required
              sx={{ marginBottom: "10px" }}
            />

            <TextField
              fullWidth
              label="آدرس ایمیل"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              margin="normal"
              required
              sx={{ marginBottom: "10px" }}
            />

            <FormControl
              fullWidth
              variant="outlined"
              margin="normal"
              error={!!errors.password}
              required
            >
              <InputLabel>رمز عبور</InputLabel>
              <OutlinedInput
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="رمز عبور"
              />
              <FormHelperText>{errors.password}</FormHelperText>
            </FormControl>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              disabled={loading}
              sx={{ mt: 3 }}
            >
              {loading ? <CircularProgress size={24} /> : "ثبت‌نام"}
            </Button>
          </form>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default RegistrationForm;
