import { colors, createTheme } from "@mui/material";

const theme = createTheme({
  direction: "rtl", // تنظیم جهت راست به چپ برای زبان فارسی
  typography: {
    fontFamily: "vazirmatn", // فونت انتخابی شما
  },
  palette: {
    primary: {
      main: "#3d73e6", // رنگ اصلی آبی
      light: "#3841b3", // رنگ روشن آبی
      dark: "#3c62d3", // رنگ تیره آبی
      contrastText: "#ffffff", // رنگ متن برای کنتراست
    },
    secondary: {
      main: "#191c1d", // رنگ اصلی مشکی
      light: "#393c3d", // رنگ روشن مشکی
      dark: "#575b5c", // رنگ تیره مشکی
      contrastText: "#ffffff", // رنگ متن برای کنتراست
    },
    background: {
      default: colors.grey[200], // رنگ پس‌زمینه پیش‌فرض
    },
  },
});

export default theme;
