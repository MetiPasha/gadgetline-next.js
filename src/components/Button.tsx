import MuiButton from "@mui/material/Button";
import { useTheme } from "@mui/material/styles"; // برای استفاده از تم

interface props {
  color: "primary" | "secondary";
  variant: "text" | "outlined" | "contained";
  children: React.ReactNode;
  sx?: any;
}

const Button = ({ color, variant, children, sx }: props) => {
  const theme = useTheme();

  return (
    <MuiButton
      color={color}
      sx={{
        backgroundColor:
          color === "primary" ? theme.palette.primary.light : undefined,
        "&:hover": {
          backgroundColor:
            color === "primary" ? theme.palette.primary.main : undefined,
        },
        width: "10rem",
        padding: "0.5rem 1rem",
        borderRadius: 0,
        fontWeight: 800,
        textAlign: "right",
        ...sx,
      }}
      variant={variant}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
