import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styles from "./index.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PintoresPampeanosImage } from "../../services/pintores-pampeanos";

interface PintoresPampeanosSlideshowProps {
  images: PintoresPampeanosImage[];
}

export default function PintoresPampeanosSlideshow({
  images,
}: PintoresPampeanosSlideshowProps) {
  if (!images || images.length === 0) {
    return null;
  }

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
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className={styles.slideContent}>
              <div className={styles.imageWrapper}>
                <img
                  src={`https:${image.image.url}`}
                  alt={image.image.alt}
                  className={styles.slideImage}
                />
              </div>
              {image.title && (
                <div className={styles.slideInfo}>
                  <h3 className={styles.slideTitle}>{image.title}</h3>
                  {image.description && (
                    <p className={styles.slideDescription}>
                      {image.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
