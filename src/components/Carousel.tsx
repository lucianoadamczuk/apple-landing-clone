// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

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
        className=" my-10"
      >
        {display.map((item) => (
          <SwiperSlide>
            <Slide image={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
