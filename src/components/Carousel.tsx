import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';

// Optional parameters to pass to the swiper instance.
// See https://swiperjs.com/swiper-api for valid options.
const slideOpts = {
    initialSlide: 1,
    speed: 400,
};
type CarouselProps = {
    items: JSX.Element[];
}

export default function Carousel({ items }: CarouselProps) {
    return (
        <Swiper
            autoplay={true}
            keyboard={true}
            pagination={true}
            scrollbar={true}
            zoom={true}
        >
            {items.map((item, index) => (
                <SwiperSlide key={index}>{item}</SwiperSlide>
            ))}
        </Swiper>
    )
}
