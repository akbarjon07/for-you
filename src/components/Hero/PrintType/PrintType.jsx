import "./printType.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


import Val from "../../../assets/images/valentine.png";
import Feb from "../../../assets/images/february.png";
import Link from "../../../assets/images/Link.png";
import Wed from "../../../assets/images/wednesday.png";
import Ill from "../../../assets/images/illustration.png";
import Anime from "../../../assets/images/anime.png";


export const PrintType = () => {
  return (
    <div className="print-type">
        <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={5.5}
            breakpoints={{
                360: {
                    slidesPerView: 2,
                    spaceBetween: -16
                },
                480: {
                    slidesPerView: 5.5,
                    spaceBetween: 16
                },
            }}
            navigation
            loop={true}
            autoplay={{
                delay:5000,
                disableOnInteraction: false
            }}
            >
            <SwiperSlide>
                <img className="print-type__img" src={Val} alt="img" width={240} height={106}/>
            </SwiperSlide>

            <SwiperSlide>
                <img className="print-type__img" src={Feb} alt="img" width={240} height={106}/>
            </SwiperSlide>

            <SwiperSlide>
                <img className="print-type__img" src={Link} alt="img" width={240} height={106}/>
            </SwiperSlide>

            <SwiperSlide>
                <img className="print-type__img" src={Wed} alt="img" width={240} height={106}/>
            </SwiperSlide>

            <SwiperSlide>
                <img className="print-type__img" src={Ill} alt="img" width={240} height={106}/>
            </SwiperSlide>

            <SwiperSlide>
                <img className="print-type__img" src={Anime} alt="img" width={240} height={106}/>
            </SwiperSlide>

            <SwiperSlide>
                <img className="print-type__img" src={Val} alt="img" width={240} height={106}/>
            </SwiperSlide>

            <SwiperSlide>
                <img className="print-type__img" src={Feb} alt="img" width={240} height={106}/>
            </SwiperSlide>

            <SwiperSlide>
                <img className="print-type__img" src={Link} alt="img" width={240} height={106}/>
            </SwiperSlide>

            <SwiperSlide>
                <img className="print-type__img" src={Wed} alt="img" width={240} height={106}/>
            </SwiperSlide>

            <SwiperSlide>
                <img className="print-type__img" src={Ill} alt="img" width={240} height={106}/>
            </SwiperSlide>

            <SwiperSlide>
                <img className="print-type__img" src={Anime} alt="img" width={240} height={106}/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}
