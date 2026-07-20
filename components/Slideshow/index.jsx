// Import Swiper React components
import { Navigation, Autoplay, Pagination, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./index.module.css";

export default function Slideshow(props) {
  return (
    <>
      <div className={styles.slideshowContainer}>
        <Swiper
          modules={[Navigation, Autoplay, Pagination, Keyboard]}
          spaceBetween={50}
          autoplay={{
            disableOnInteraction: true,
            delay: 5000,
            pauseOnMouseEnter: true,
          }}
          pagination
          slidesPerView={1}
          className={styles.swiperContainer}
          navigation
          keyboard={{
            enabled: true,
          }}
          centeredSlides
          loop
        >
          {props.slides.map((slide) => {
            return (
              <SwiperSlide className={styles.swiperSlide} key={slide.title + "_slide"}>
                <img
                  className={styles.swiperImage}
                  src={"https:" + slide.image.url}
                  alt={slide.title}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={styles.mobileSlideshow}>
        {props.slides.map((slide) => {
          return (
            <img
            key={slide.title + "_slide_img"}
              className={styles.swiperImage}
              src={"https:" + slide.image.url}
              alt={slide.title}
            />
          );
        })}
      </div>
    </>
  );
}
