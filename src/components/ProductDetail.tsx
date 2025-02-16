"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  Chip,
  TextField,
} from "@mui/material";
import { LocalOffer, ShoppingCart, Favorite } from "@mui/icons-material";

const ProductDetail: React.FC = () => {
  const [mainImage, setMainImage] = useState("/assets/product/black3.jpg");
  const [selectedColor, setSelectedColor] = useState("black");
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const thumbnails = [
    "/assets/product/black3.jpg",
    "/assets/product/black2.jpg",
    "/assets/product/black4.jpg",
  ];

  const colorOptions = [
    { color: "black", label: "سیاه" },
    { color: "blue", label: "آبی" },
    { color: "red", label: "قرمز" },
  ];

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box
              component="img"
              src={mainImage}
              alt="Product Image"
              sx={{
                width: "100%",
                borderRadius: 2,
                marginBottom: "1rem",
              }}
            />

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
              }}
            >
              {thumbnails.map((thumbnail, index) => (
                <Box
                  key={index}
                  component="img"
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(thumbnail)}
                  sx={{
                    width: "70px",
                    height: "70px",
                    borderRadius: 1,
                    cursor: "pointer",
                    border:
                      mainImage === thumbnail
                        ? "2px solid #1976d2"
                        : "2px solid transparent",
                    transition: "border 0.3s ease",
                  }}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom>
              هدفون xx99 Mark
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              امتیاز ⭐4
            </Typography>
            <Box sx={{ my: 2 }}>
              <Typography variant="h5" color="primary">
                قیمت $50
              </Typography>
              <Chip
                icon={<LocalOffer />}
                label="تخفیف ویژه"
                color="secondary"
                sx={{ mt: 1 }}
              />
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ my: 2 }}>
              <Typography variant="h6" gutterBottom>
                ویژگی‌ها:
              </Typography>
              <Box component="ul" sx={{ pl: 4 }}>
                <li>
                  <Typography variant="body1">قابلیت حمل</Typography>
                </li>
                <li>
                  <Typography variant="body1">ضدآب</Typography>
                </li>
                <li>
                  <Typography variant="body1">نگهداری شارژ بالا</Typography>
                </li>
                <li>
                  <Typography variant="body1">محگم و مقاوم</Typography>
                </li>
              </Box>
            </Box>

            <Box sx={{ my: 2 }}>
              <Typography variant="h6" gutterBottom>
                رنگ‌بندی محصول:
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {colorOptions.map((option) => (
                  <Box
                    key={option.color}
                    onClick={() => handleColorChange(option.color)} // تغییر رنگ انتخابی
                    sx={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: option.color,
                      cursor: "pointer",
                      border:
                        selectedColor === option.color
                          ? "3px solid #1976d2"
                          : "none",
                      transition: "border 0.3s ease",
                    }}
                  />
                ))}
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ShoppingCart />}
                sx={{ mr: 2 }}
              >
                افزودن به سبد خرید
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<Favorite />}
              >
                افزودن به علاقه‌مندی‌ها
              </Button>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            توضیحات محصول:
          </Typography>
          <Typography variant="body1" paragraph>
            هدفون XX99 Mark یکی از بهترین گزینه‌های موجود برای علاقه‌مندان به
            صدای باکیفیت است. این هدفون با طراحی مدرن و ارگونومیک، تجربه‌ای راحت
            و دلپذیر برای استفاده طولانی‌مدت فراهم می‌کند.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            نظرات کاربران:
          </Typography>

          <Box sx={{ my: 2 }}>
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    کاربر {index + 1}:
                  </Typography>
                  <Typography variant="body1">{comment}</Typography>
                </Box>
              ))
            ) : (
              <Typography variant="body1" color="text.secondary">
                هنوز نظری ثبت نشده است.
              </Typography>
            )}
          </Box>

          <Box sx={{ mt: 2 }}>
            <TextField
              label="نظر خود را بنویسید"
              fullWidth
              multiline
              rows={4}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddComment}
              >
                ارسال نظر
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProductDetail;
