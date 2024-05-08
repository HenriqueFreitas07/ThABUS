import { IonContent, IonPage } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.

type CarouselProps = {
  items: JSX.Element[];
};

export default function Carousel({ items }: CarouselProps) {
  return (
    <Swiper
    effect={'cards'}
    grabCursor={true}
    modules={[EffectCards]}
    >
      {items.map((item, index) => {
        return <SwiperSlide key={index}>{item}</SwiperSlide>;
      })}
    </Swiper>
  );
}
