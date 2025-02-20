"use client";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

const images = [
  "/assets/laptop/Lbanner1.jpg",
  "/assets/laptop/Lbanner2.jpg",
  "/assets/laptop/Lbanner3.jpg",
];

const Banner = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      style={{ width: "100%", height: "100%", marginTop: "5px" }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              width: "100%",
              height: { xs: 300, md: 400 },
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
