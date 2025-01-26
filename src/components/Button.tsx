import MuiButton from "@mui/material/Button";
import { useTheme } from "@mui/material/styles"; // برای استفاده از تم

interface props {
  color: "primary" | "secondary"; // فقط primary و secondary
  variant: "text" | "outlined" | "contained";
  children: React.ReactNode;
  sx?: any; // sx اختیاری باشد
}

const Button = ({ color, variant, children, sx }: props) => {
  const theme = useTheme(); // گرفتن تم

  return (
    <MuiButton
      color={color} // استفاده از primary یا secondary
      sx={{
        backgroundColor:
          color === "primary" ? theme.palette.primary.light : undefined, // رنگ آبی روشن از پالت
        "&:hover": {
          backgroundColor:
            color === "primary" ? theme.palette.primary.main : undefined, // رنگ اصلی برای هاور
        },
        width: "10rem",
        padding: "0.5rem 1rem",
        borderRadius: 0,
        fontWeight: 800,
        textAlign: "right",
        ...sx, // استایل‌های اضافی
      }}
      variant={variant}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
