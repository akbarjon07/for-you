import "./bigSale.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import Bg from "../../assets/images/pr-list-bg.png";
import Bg2 from "../../assets/images/pr-list-bg2.png";

export const BigSale = () => {
  return (
    <section className="big-sale">
        <div className="container">
            <h2 className="big-sale__title">Большие скидки</h2>

            <ul className="big-sale__list">

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={38}
                    slidesPerView={4}
                    loop={true}
                    breakpoints={{
                        360: {
                            slidesPerView: 2,
                            spaceBetween: -15
                        },
                        480: {
                            slidesPerView: 4,
                            spaceBetween: 38
                        },
                    }}
                    navigation
                    autoplay={{
                        delay:5000,
                        disableOnInteraction: false
                    }}
                    >
                    <SwiperSlide>
                        <li className="big-sale__item">
                            <Link className="big-sale__link" >
                                <img className="big-sale__img" src={Bg} alt="img" width={312} height={312}/>

                                <div className="big-sale__main-wrapper">
                                    <div className="top-product__price-wrapper">
                                        <div className="d-flex align-items-center sale-wrapper">
                                            <p className="big-sale__new-price">120.000 сум</p>

                                            <p className="big-sale__old-price">160.000 сум</p>
                                        </div>

                                        <p className="big-sale__discount">20%</p>
                                    </div>

                                    <p className="big-sale__desc">Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон</p>
                                </div>
                            </Link>
                        </li>
                    </SwiperSlide>

                    <SwiperSlide>
                            <li className="big-sale__item">
                                <Link className="big-sale__link">
                                    <img className="big-sale__img" src={Bg2} alt="img" width={312} height={312}/>

                                    <div className="big-sale__main-wrapper">
                                        <div className="top-product__price-wrapper">
                                            <div className="d-flex align-items-center sale-wrapper">
                                                <p className="big-sale__new-price">120.000 сум</p>

                                                <p className="big-sale__old-price">160.000 сум</p>
                                            </div>

                                            <p className="big-sale__discount">20%</p>
                                        </div>

                                        <p className="big-sale__desc">Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон</p>
                                    </div>
                                </Link>
                            </li>
                    </SwiperSlide>

                    <SwiperSlide>
                        <li className="big-sale__item">
                            <Link className="big-sale__link">
                                <img className="big-sale__img" src={Bg} alt="img" width={312} height={312}/>

                                <div className="big-sale__main-wrapper">
                                    <div className="top-product__price-wrapper">
                                        <div className="d-flex align-items-center sale-wrapper">
                                            <p className="big-sale__new-price">120.000 сум</p>

                                            <p className="big-sale__old-price">160.000 сум</p>
                                        </div>

                                        <p className="big-sale__discount">20%</p>
                                    </div>

                                    <p className="big-sale__desc">Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон</p>
                                </div>
                            </Link>
                        </li>
                    </SwiperSlide>

                    <SwiperSlide>
                            <li className="big-sale__item">
                                <Link className="big-sale__link">
                                    <img className="big-sale__img" src={Bg2} alt="img" width={312} height={312}/>

                                    <div className="big-sale__main-wrapper">
                                        <div className="top-product__price-wrapper">
                                            <div className="d-flex align-items-center sale-wrapper">
                                                <p className="big-sale__new-price">120.000 сум</p>

                                                <p className="big-sale__old-price">160.000 сум</p>
                                            </div>

                                            <p className="big-sale__discount">20%</p>
                                        </div>

                                        <p className="big-sale__desc">Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон</p>
                                    </div>
                                </Link>
                            </li>
                    </SwiperSlide>

                    <SwiperSlide>
                            <li className="big-sale__item">
                                <Link className="big-sale__link">
                                    <img className="big-sale__img" src={Bg} alt="img" width={312} height={312}/>

                                    <div className="big-sale__main-wrapper">
                                        <div className="top-product__price-wrapper">
                                            <div className="d-flex align-items-center sale-wrapper">
                                                <p className="big-sale__new-price">120.000 сум</p>

                                                <p className="big-sale__old-price">160.000 сум</p>
                                            </div>

                                            <p className="big-sale__discount">20%</p>
                                        </div>

                                        <p className="big-sale__desc">Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон</p>
                                    </div>
                                </Link>
                            </li>
                    </SwiperSlide>

                    <SwiperSlide>
                            <li className="big-sale__item">
                                <Link className="big-sale__link">
                                    <img className="big-sale__img" src={Bg2} alt="img" width={312} height={312}/>

                                    <div className="big-sale__main-wrapper">
                                        <div className="top-product__price-wrapper">
                                            <div className="d-flex align-items-center sale-wrapper">
                                                <p className="big-sale__new-price">120.000 сум</p>

                                                <p className="big-sale__old-price">160.000 сум</p>
                                            </div>

                                            <p className="big-sale__discount">20%</p>
                                        </div>

                                        <p className="big-sale__desc">Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон</p>
                                    </div>
                                </Link>
                            </li>
                    </SwiperSlide>

                    <SwiperSlide>
                            <li className="big-sale__item">
                                <Link className="big-sale__link">
                                    <img className="big-sale__img" src={Bg} alt="img" width={312} height={312}/>

                                    <div className="big-sale__main-wrapper">
                                        <div className="top-product__price-wrapper">
                                            <div className="d-flex align-items-center sale-wrapper">
                                                <p className="big-sale__new-price">120.000 сум</p>

                                                <p className="big-sale__old-price">160.000 сум</p>
                                            </div>

                                            <p className="big-sale__discount">20%</p>
                                        </div>

                                        <p className="big-sale__desc">Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон</p>
                                    </div>
                                </Link>
                            </li>
                    </SwiperSlide>

                    <SwiperSlide>
                            <li className="big-sale__item">
                                <Link className="big-sale__link">
                                    <img className="big-sale__img" src={Bg2} alt="img" width={312} height={312}/>

                                    <div className="big-sale__main-wrapper">
                                        <div className="top-product__price-wrapper">
                                            <div className="d-flex align-items-center sale-wrapper">
                                                <p className="big-sale__new-price">120.000 сум</p>

                                                <p className="big-sale__old-price">160.000 сум</p>
                                            </div>

                                            <p className="big-sale__discount">20%</p>
                                        </div>

                                        <p className="big-sale__desc">Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон</p>
                                    </div>
                                </Link>
                            </li>
                    </SwiperSlide>
                </Swiper>
            </ul>
        </div>
    </section>
  )
}
