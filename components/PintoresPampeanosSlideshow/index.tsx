import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styles from "./index.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { PintoresPampeanosImage } from "../../services/api";

interface PintoresPampeanosSlideshowProps {
  images: PintoresPampeanosImage[];
}

export default function PintoresPampeanosSlideshow({
  images,
}: PintoresPampeanosSlideshowProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className={styles.slideshowContainer}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        className={styles.swiper}
        spaceBetween={0}
        slidesPerView={1}
      >
        {images.map((image) => {
          const src = image.image?.url || "";
          const alt = image.image?.alt || image.title || "Imagen";
          return (
            <SwiperSlide key={image.id}>
              <div className={styles.slideContent}>
                <div className={styles.imageWrapper}>
                  {src ? (
                    <Image
                      src={src.startsWith("//") ? `https:${src}` : src}
                      alt={alt}
                      width={image.image?.width || 1200}
                      height={image.image?.height || 800}
                      className={styles.slideImage}
                      loading="lazy"
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>Imagen no disponible</div>
                  )}
                </div>

                {(image.title || image.description) && (
                  <div className={styles.slideInfo}>
                    {image.title && <h3 className={styles.slideTitle}>{image.title}</h3>}
                    {image.description && (
                      <p className={styles.slideDescription}>{image.description}</p>
                    )}
                  </div>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
