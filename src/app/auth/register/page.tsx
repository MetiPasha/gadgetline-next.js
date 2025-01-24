"use client";
import React, { useState, useReducer, useCallback } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  LinearProgress,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { Visibility, VisibilityOff, Google } from "@mui/icons-material";

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: "450px",
  margin: "2rem auto",
  padding: theme.spacing(2),
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  boxSizing: "border-box", // This ensures that padding is included in the element's total width and height
}));

const SocialButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  "&.google": { backgroundColor: "#db4437", color: "white" },
  "&:hover": { opacity: 0.9 },
}));

const PasswordStrength = styled(LinearProgress)<{ value: number }>(
  ({ value }) => ({
    marginTop: "6px",
    height: "4px",
    borderRadius: "2px",
    "& .MuiLinearProgress-bar": {
      backgroundColor:
        value < 30 ? "#f44336" : value < 60 ? "#ff9800" : "#4caf50",
    },
  })
);

// State and reducer for form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface Action {
  type: "SET_FIELD"; // The type of the action, which is "SET_FIELD"
  field: keyof FormData; // The field name must be one of the keys of FormData
  value: string; // The value should be of type string (the value entered in the form)
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
  const [agreed, setAgreed] = useState(false);

  const validatePassword = useCallback((password: string) => {
    const strength = {
      score: 0,
      hasLength: password.length >= 8,
      hasUpper: /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecial: /[!@#$%^&*]/.test(password),
    };
    strength.score =
      (Number(strength.hasLength) +
        Number(strength.hasUpper) +
        Number(strength.hasNumber) +
        Number(strength.hasSpecial)) *
      25;
    return strength;
  }, []);

  const validateField = (name: keyof FormData, value: string) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      switch (name) {
        case "firstName":
          if (value.length < 2) {
            newErrors.firstName = "نام باید حداقل 2 کاراکتر باشد";
          } else {
            delete newErrors.firstName;
          }
          break;

        case "lastName":
          if (value.length < 2) {
            newErrors.lastName = "نام خانوادگی باید حداقل 2 کاراکتر باشد";
          } else {
            delete newErrors.lastName;
          }
          break;

        case "email":
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            newErrors.email = "لطفاً یک آدرس ایمیل معتبر وارد کنید";
          } else {
            delete newErrors.email;
          }
          break;

        case "password":
          const strength = validatePassword(value);
          if (!strength.hasLength) {
            newErrors.password = "رمز عبور باید حداقل 8 کاراکتر باشد";
          } else if (!strength.hasUpper) {
            newErrors.password = "حداقل یک حرف بزرگ وارد کنید";
          } else if (!strength.hasNumber) {
            newErrors.password = "حداقل یک عدد وارد کنید";
          } else if (!strength.hasSpecial) {
            newErrors.password = "حداقل یک کاراکتر خاص وارد کنید";
          } else {
            delete newErrors.password;
          }
          break;

        default:
          break;
      }

      return newErrors;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name as keyof FormData, value });
    validateField(name as keyof FormData, value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && agreed) {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form submitted:", formData);
        dispatch({ type: "SET_FIELD", field: "firstName", value: "" });
        dispatch({ type: "SET_FIELD", field: "lastName", value: "" });
        dispatch({ type: "SET_FIELD", field: "email", value: "" });
        dispatch({ type: "SET_FIELD", field: "password", value: "" });
        setAgreed(false);
      } catch (error) {
        console.error("Submission error:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const passwordStrength = validatePassword(formData.password);

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
        overflow: "hidden", // اسکرول را مخفی می‌کند
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
            sx={{ mb: 2, gap: "8px" }} // فاصله کم و چیدمان در یک خط
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
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="رمز عبور"
              />
              <FormHelperText>{errors.password}</FormHelperText>
              {formData.password && (
                <PasswordStrength
                  variant="determinate"
                  value={passwordStrength.score}
                />
              )}
            </FormControl>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              disabled={
                loading ||
                !agreed ||
                Object.keys(errors).length > 0 ||
                !formData.firstName ||
                !formData.lastName ||
                !formData.email ||
                !formData.password
              }
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
