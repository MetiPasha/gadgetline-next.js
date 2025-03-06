"use client";
import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

interface ProductCommentsProps {
  comments: string[];
  newComment: string;
  onNewCommentChange: (value: string) => void;
  handleAddComment: () => void;
}

const ProductComments: React.FC<ProductCommentsProps> = ({
  comments,
  newComment,
  onNewCommentChange,
  handleAddComment,
}) => {
  return (
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
          onChange={(e) => onNewCommentChange(e.target.value)}
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
  );
};

export default ProductComments;
