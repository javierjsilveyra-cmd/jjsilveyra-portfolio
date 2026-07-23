import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
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
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (swiperRef.current) {
        if (e.key === "ArrowLeft") {
          swiperRef.current.slidePrev();
        } else if (e.key === "ArrowRight") {
          swiperRef.current.slideNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={styles.slideshowContainer}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Keyboard]}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
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
