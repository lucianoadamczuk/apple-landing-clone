// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Slide } from ".";

interface Props {
  display: string[];
}

export default function Carousel({ display }: Props) {
  return (
    <>
      <Swiper
        slidesPerView={1.2}
        centeredSlides
        spaceBetween={5}
        loop
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        style={{
          height: "90vh",
        }}
        className=" my-10 Carousel"
      >
        {display.map((item) => (
          <SwiperSlide className=" cursor-pointer">
            <Slide image={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
