import MuiButton from "@mui/material/Button";
interface props {
  color: string;
  variant: "text" | "outlined" | "contained";
  children: React.ReactNode;
  sx: any;
}

const Button = ({ color, variant, children, sx }: props) => {
  return (
    <MuiButton
      sx={{
        background: color,
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
