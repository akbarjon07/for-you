import "./order.css";
import OrderIM from "../../assets/images/card-bg-3.png"
import { BigSale } from "../../components/BigSale/BigSale";
import { Link } from "react-router-dom";
import Arrow from "../../assets/images/left-arrow.svg";


export const Order = () => {
    return (
        <section className="order-section">
            <div className="container">

                <div className="d-flex align-items-center mb-4 order-section__nav-wrapper">
                    <Link className="order-section__nav-link" to="/">Главная</Link>

                    <span className="order-section__nav-span"></span>

                    <Link className="order-section__nav-link ms-2" to="/cart">Корзина</Link>

                    <span className="order-section__nav-span"></span>

                    <Link className="order-section__nav-link ms-2 order" to="/order">Оформление заказа</Link>
                </div>

                <div className="profile-section__responsive-link-wrapper">
                    <Link className="d-flex align-items-center text-decoration-none">
                        <img className="me-2" src={Arrow} alt="icon" width={20} height={20}/>

                        <p className="order-section__nav-link m-0 p-0">Главная</p>
                    </Link>
                </div>

                <h2 className="order-section__title">Оформление заказа</h2>

                <div className="order-section__order-list-wrapper">
                    <ul className="order-section__order-list">
                    <li className="order-section__order-item">
                            <img className="order-section__order-img" src={OrderIM} alt="img" width={160} height={160}/>

                            <div>
                                <div className="order-section__order-name-info">
                                    <h3 className="order-section__order-heading">Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон</h3>

                                    <p className="order-section__order-desc order-section__res-order-desc">Артикул: Dragon 06</p>

                                    <p className="order-section__order-size order-section__res-order-size">XS (44-46)</p>

                                    <p className="order-section__order-quantity">x1</p>

                                    <div className="order-section__order-price-wrapper">
                                        <p className="order-section__order-new-price">120.000 сум</p>

                                        <p className="order-section__order-old-price">160.000 сум</p>
                                    </div>
                                </div>

                                <p className="order-section__order-desc res-order-desc">Артикул: Dragon 06</p>

                                <p className="order-section__order-size res-order-size">XS (44-46)</p>
                            </div>


                        </li>

                        <li className="order-section__order-item">
                            <img className="order-section__order-img" src={OrderIM} alt="img" width={160} height={160}/>

                            <div>
                                <div className="order-section__order-name-info">
                                    <h3 className="order-section__order-heading">Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон</h3>

                                    <p className="order-section__order-desc order-section__res-order-desc">Артикул: Dragon 06</p>

                                    <p className="order-section__order-size order-section__res-order-size">XS (44-46)</p>

                                    <p className="order-section__order-quantity">x1</p>

                                    <div className="order-section__order-price-wrapper">
                                        <p className="order-section__order-new-price">120.000 сум</p>

                                        <p className="order-section__order-old-price">160.000 сум</p>
                                    </div>
                                </div>

                                <p className="order-section__order-desc res-order-desc">Артикул: Dragon 06</p>

                                <p className="order-section__order-size res-order-size">XS (44-46)</p>
                            </div>


                        </li>

                        <li className="order-section__order-item">
                            <img className="order-section__order-img" src={OrderIM} alt="img" width={160} height={160}/>

                            <div>
                                <div className="order-section__order-name-info">
                                    <h3 className="order-section__order-heading">Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон</h3>

                                    <p className="order-section__order-desc order-section__res-order-desc">Артикул: Dragon 06</p>

                                    <p className="order-section__order-size order-section__res-order-size">XS (44-46)</p>

                                    <p className="order-section__order-quantity">x1</p>

                                    <div className="order-section__order-price-wrapper">
                                        <p className="order-section__order-new-price">120.000 сум</p>

                                        <p className="order-section__order-old-price">160.000 сум</p>
                                    </div>
                                </div>

                                <p className="order-section__order-desc res-order-desc">Артикул: Dragon 06</p>

                                <p className="order-section__order-size res-order-size">XS (44-46)</p>
                            </div>


                        </li>
                    </ul>

                    <h3 className="order-section__second-title res-form">Личные данные</h3>

                    <form className="order-section__form res-form">
                        <input className="order-section__name-input order-input" type="text" placeholder="ФИО*" required/>

                        <div className="order-section__input-wrapper">
                            <input className="order-section__phone-input order-input" type="text" placeholder="Телефон*" required/>

                            <input className="order-section__mail-input order-input" type="text" placeholder="E-mail"/>
                        </div>

                        <input className="order-section__message-input order-input" type="text" placeholder="Комментарий к заказу*" required/>
                    </form>

                    <div className="order-section__card-wrapper">
                        <button className="order-section__card-btn">Отправить заявку</button>

                        <div className="order-section__card-price-wrapper">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <p className="order-section__card-all-price">Итого</p>
                                <span className="order-all-price">400000 сум</span>
                            </div>

                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <p className="order-section__card-common-price">Товары</p>
                                <span className="order-common-price">520000 сум</span>
                            </div>

                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <p className="order-section__card-sale-price">Скидки на товары</p>
                                <span className="order-sale-price">-120000 сум</span>
                            </div>

                            <input className="order-section__card-promokod-input" placeholder="Введите промокод" type="text" />
                        </div>
                    </div>
                </div>

                <h3 className="order-section__second-title res-form-none">Личные данные</h3>

                <form className="order-section__form res-form-none">
                    <input className="order-section__name-input order-input" type="text" placeholder="ФИО*" required/>

                    <div className="order-section__input-wrapper">
                        <input className="order-section__phone-input order-input" type="text" placeholder="Телефон*" required/>

                        <input className="order-section__mail-input order-input" type="text" placeholder="E-mail"/>
                    </div>

                    <input className="order-section__message-input order-input" type="text" placeholder="Комментарий к заказу*" required/>
                </form>

                <BigSale/>
            </div>
        </section>
    )
}