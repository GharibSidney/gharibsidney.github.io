"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";

export function Fabricationboisplus() {
  const images = [
    "/fabricationsboisplus_images/product.jpg",
    "/fabricationsboisplus_images/accueil.jpg",
    "/fabricationsboisplus_images/midpage.jpg",
  ];
  return (
    <ImagesSlider className="h-[10rem]" images={images} overlay={false}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
      </motion.div>
    </ImagesSlider>
  );
}
