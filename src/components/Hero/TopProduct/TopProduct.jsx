import "./topProduct.css";
import Bg from "../../../assets/images/top-product-bg.png";
import Bg2 from "../../../assets/images/top-product-bg2.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { Link } from "react-router-dom";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


export const TopProduct = () => {
  return (
    <div className="top-product">
        <h2 className="top-product__title">Хиты продаж</h2>
            <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            loop={true}
            autoplay={{
                delay:5000,
                disableOnInteraction: false
            }}
            >
                <SwiperSlide>
                    <Link className="text-decoration-none" to="/product">
                        <div className="top-product__card-wrapper">
                            <img className="top-product__img" src={Bg} alt="img" width={312} height={312}/>

                            <div className="top-product__main-wrapper">
                                <div className="top-product__price-wrapper">
                                    <div className="d-flex align-items-center res-wrapper">
                                        <p className="top-product__new-price">120.000 сум</p>

                                        <p className="top-product__old-price">160.000 сум</p>
                                    </div>

                                    <p className="top-product__discount">20%</p>
                                </div>

                                <p className="top-product__desc">Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон</p>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link className="text-decoration-none" to="/product">
                        <div className="top-product__card-wrapper">
                            <img className="top-product__img" src={Bg2} alt="img" width={312} height={312}/>

                            <div className="top-product__main-wrapper">
                                <div className="top-product__price-wrapper">
                                    <div className="d-flex align-items-center res-wrapper">
                                        <p className="top-product__new-price">120.000 сум</p>

                                        <p className="top-product__old-price">160.000 сум</p>
                                    </div>

                                    <p className="top-product__discount">20%</p>
                                </div>

                                <p className="top-product__desc">Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон</p>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link className="text-decoration-none" to="/product">
                        <div className="top-product__card-wrapper">
                            <img className="top-product__img" src={Bg} alt="img" width={312} height={312}/>

                            <div className="top-product__main-wrapper">
                                <div className="top-product__price-wrapper">
                                    <div className="d-flex align-items-center res-wrapper">
                                        <p className="top-product__new-price">120.000 сум</p>

                                        <p className="top-product__old-price">160.000 сум</p>
                                    </div>

                                    <p className="top-product__discount">20%</p>
                                </div>

                                <p className="top-product__desc">Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон</p>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link className="text-decoration-none" to="/product">
                        <div className="top-product__card-wrapper">
                            <img className="top-product__img" src={Bg2} alt="img" width={312} height={312}/>

                            <div className="top-product__main-wrapper">
                                <div className="top-product__price-wrapper">
                                    <div className="d-flex align-items-center res-wrapper">
                                        <p className="top-product__new-price">120.000 сум</p>

                                        <p className="top-product__old-price">160.000 сум</p>
                                    </div>

                                    <p className="top-product__discount">20%</p>
                                </div>

                                <p className="top-product__desc">Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон</p>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
    </div>
  )
}

