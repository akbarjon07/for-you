import "./product.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Swipe1 from "../../assets/images/swipe-1.png";
import Swipe2 from "../../assets/images/swipe-2.png";
import Swipe3 from "../../assets/images/swipe-3.png";
import Swipe4 from "../../assets/images/swipe-4.png";
import Swipe5 from "../../assets/images/swipe-5.png";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { BigSale } from "../../components/BigSale/BigSale";

export const Product = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="product-section">
        <div className="container">

            <div className="d-flex align-items-center mb-5">
                <Link to="/" className="home-nav-link">Главная</Link>

                <span className="product-section__span"></span>

                <Link to="/" className="home-nav-link ms-2">Футболки</Link>

                <span className="product-section__span"></span>

                <Link to="/" className="home-nav-link ms-2 text-dark">Футболка Арт-бокс</Link>
            </div>

            <div className="product-section__main-wrapper">
                <div className="product-section__img-wrapper">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        direction="vertical"
                        spaceBetween={0}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={Swipe1} alt="img" width={108} height={108}/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Swipe2} alt="img" width={108} height={108}/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Swipe3} alt="img" width={108} height={108}/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Swipe4} alt="img" width={108} height={108}/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Swipe5} alt="img" width={108} height={108}/>
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                        }}
                        spaceBetween={0}
                        slidesPerView={1}
                        // navigation={true}
                        // thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                        >
                        <SwiperSlide>
                            <img src={Swipe1} alt="img" width={580} height={580}/>
                        </SwiperSlide>

                        {/* <SwiperSlide>
                            <img src={Swipe2} alt="img" width={580} height={580}/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Swipe3} alt="img" width={580} height={580}/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Swipe4} alt="img" width={580} height={580}/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src={Swipe5} alt="img" width={580} height={580}/>
                        </SwiperSlide> */}
                    </Swiper>
                </div>

                <div className="product-section__info-wrapper ms-5">
                    <h1 className="product-section__title">Cyberpunk Samurai</h1>

                    <div className="product-section__model-wrapper">
                        <p className="product-section__model">Артикул: Cyber 03</p>

                        <Link to="/comments" className="product-section__comments">Отзывов: 512</Link>
                    </div>

                    <p className="product-section__new-price">79,000 сум</p>

                    <p className="product-section__old-price">119,000 сум</p>

                    <div className="product-section__size-wrapper">
                        <p className="product-section__size">Размер:</p>

                        <Link className="product-section__size-link">Как узнать размер?</Link>
                    </div>

                    <ul className="product-section__size-list">
                        <li className="product-section__size-item">XS (44-46)</li>

                        <li className="product-section__size-item">XS (44-46)</li>

                        <li className="product-section__size-item">XS (44-46)</li>

                        <li className="product-section__size-item">XS (44-46)</li>

                        <li className="product-section__size-item">XS (44-46)</li>

                        <li className="product-section__size-item">XS (44-46)</li>

                    </ul>

                    <p className="product-section__color">Цвет:</p>

                    <ul className="product-section__color-list">
                        <li className="product-section__color-item">
                            <img className="product-section__color-img" src={Swipe1} alt="img" width={80} height={80}/>
                        </li>
                    </ul>

                    <p className="product-section__content">Состав: <span className="product-section__content-name">92% хлопок, 8% эластан</span></p>

                    <div className="product-section__btn-wrapper">
                        <button className="product-section__save-btn">Добавить в корзину</button>

                        <button className="product-section__like-btn">
                            <i className="bi bi-heart"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="product-section__description-wrapper">
                <h2 className="product-section__heading">О товаре</h2>

                <p className="product-section__desc">Футболка из хлопка с добавлением эластана (аналог лайкры): за счет этого ткань немного тянется, хорошо держит форму и комфортно садится по фигуре. Силуэт приталенный, ориентирован на мужчин с широкими плечами и узкими бедрами. Понравится тем, кто хочет подчеркнуть достоинства своего торса и любит футболки “по фигуре”.

                <br /><br />• Детали: приталенный силуэт, круглый вырез ворота, длина до линии бедра, короткий рукав
                <br />• Состав: 92% хлопок, 8% эластан
                <br />• Правила ухода: перед стиркой вывернуть наизнанку, стирка ручная или машинная в щадящем режиме при температуре не выше 30 градусов, без отбеливателя. Нельзя гладить по принту
                </p>
            </div>

            <div className="product-section__comments-wrapper">
                <h2 className="product-section__comments-title">Отзывы клиентов</h2>

                <ul className="product-section__comments-list">
                    <Swiper
                        modules={Navigation}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation={true}
                        >
                        <SwiperSlide>
                            <li className="product-section__comments-item">
                                <div className="comments-card">
                                    <div className="comments-card__name-wrapper">
                                        <h4 className="comments-card__username">Макар К.</h4>

                                        <p className="comments-card__date">23 января 2023</p>
                                    </div>

                                    <p className="comments-card__rate">⭐ ⭐ ⭐ ⭐ ⭐</p>
                                </div>

                                <p className="comments-card__desc">Из четырёх футболок открыл пока эту. Качеством и внешним видом доволен. Остальные на подарок, так что открывать пока нельзя.</p>

                                <div className="comments-card__img-wrapper">
                                    <img className="comments-card__img" src={Swipe1} alt="img" width={108} height={108}/>
                                    <img className="comments-card__img" src={Swipe2} alt="img" width={108} height={108}/>
                                </div>
                            </li>
                        </SwiperSlide>

                        <SwiperSlide>
                            <li className="product-section__comments-item">
                                <div className="comments-card">
                                    <div className="comments-card__name-wrapper">
                                        <h4 className="comments-card__username">Макар К.</h4>

                                        <p className="comments-card__date">23 января 2023</p>
                                    </div>

                                    <p className="comments-card__rate">⭐ ⭐ ⭐ ⭐ ⭐</p>
                                </div>

                                <p className="comments-card__desc">Из четырёх футболок открыл пока эту. Качеством и внешним видом доволен. Остальные на подарок, так что открывать пока нельзя.</p>

                                <div className="comments-card__img-wrapper">
                                    <img className="comments-card__img" src={Swipe1} alt="img" width={108} height={108}/>
                                    <img className="comments-card__img" src={Swipe2} alt="img" width={108} height={108}/>
                                </div>
                            </li>
                        </SwiperSlide>

                        <SwiperSlide>
                            <li className="product-section__comments-item">
                                <div className="comments-card">
                                    <div className="comments-card__name-wrapper">
                                        <h4 className="comments-card__username">Макар К.</h4>

                                        <p className="comments-card__date">23 января 2023</p>
                                    </div>

                                    <p className="comments-card__rate">⭐ ⭐ ⭐ ⭐ ⭐</p>
                                </div>

                                <p className="comments-card__desc">Из четырёх футболок открыл пока эту. Качеством и внешним видом доволен. Остальные на подарок, так что открывать пока нельзя.</p>

                                <div className="comments-card__img-wrapper">
                                    <img className="comments-card__img" src={Swipe1} alt="img" width={108} height={108}/>
                                    <img className="comments-card__img" src={Swipe2} alt="img" width={108} height={108}/>
                                </div>
                            </li>
                        </SwiperSlide>

                        <SwiperSlide>
                            <li className="product-section__comments-item">
                                <div className="comments-card">
                                    <div className="comments-card__name-wrapper">
                                        <h4 className="comments-card__username">Макар К.</h4>

                                        <p className="comments-card__date">23 января 2023</p>
                                    </div>

                                    <p className="comments-card__rate">⭐ ⭐ ⭐ ⭐ ⭐</p>
                                </div>

                                <p className="comments-card__desc">Из четырёх футболок открыл пока эту. Качеством и внешним видом доволен. Остальные на подарок, так что открывать пока нельзя.</p>

                                <div className="comments-card__img-wrapper">
                                    <img className="comments-card__img" src={Swipe1} alt="img" width={108} height={108}/>
                                    <img className="comments-card__img" src={Swipe2} alt="img" width={108} height={108}/>
                                </div>
                            </li>
                        </SwiperSlide>
                    </Swiper>
                </ul>

                <div className="comments-card__btn-wrapper">
                    <button className="comments-card__leave-btn">Оставить отзыв</button>

                    <Link to="/comments" className="comments-card__all-btn">Смотреть все отзывы</Link>
                </div>
            </div>

            <BigSale/>
        </div>
    </section>
  )
}

