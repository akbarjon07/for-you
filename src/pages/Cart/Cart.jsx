import "./cart.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartIM from "../../assets/images/card-bg-3.png";
import Alert from "../../assets/images/alert.png";
import { BigSale } from "../../components/BigSale/BigSale";
import Arrow from "../../assets/images/left-arrow.svg";


export const Cart = () => {

    const [counter, setCounter] = useState(0);

    const incrementCount = () => {
        setCounter(counter + 1)
    }

    const decrementCount = () => {
        setCounter(counter - 1)
    }

  return (
    <section className="cart-section">
        <div className="container">
            <div className="cart-section__nav-wrapper">
                <Link to="/" className="cart-section__nav-home">Главная</Link>

                <span className="cart-section__nav-span"></span>

                <Link className="cart-section__nav__cart">Корзина</Link>
            </div>

            <div className="profile-section__responsive-link-wrapper">
                <Link className="d-flex align-items-center text-decoration-none">
                    <img className="me-2" src={Arrow} alt="icon" width={20} height={20}/>

                    <p className="cart-section__nav-home m-0 p-0">Главная</p>
                </Link>
            </div>

            <h2 className="cart-section__title">Моя корзина</h2>

            <div className="cart-section__cart-wrapper">
                <ul className="cart-section__cart-list">
                    <li className="cart-section__cart-item">

                        <div>
                            <img className="cart-section__cart-img" src={CartIM} alt="img" width={240} height={240}/>

                            <div className="res-cart-btn-wrapper">
                                    <button className="same-btn">
                                        <i class="bi bi-heart same-icon"></i>
                                    </button>

                                    <button className="same-btn res-del-btn">
                                        <i class="bi bi-trash3 same-icon"></i>
                                    </button>
                             </div>
                        </div>


                        <div className="cart-section__cart-information">
                            <div className="cart-section__cart-name-wrapper">
                                <div className="cart-section__cart-title-wrapper">
                                    <h3 className="cart-section__cart-heading">Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон</h3>

                                    <p className="cart-section__cart-title">Артикул: Dragon 06</p>
                                </div>

                                <select className="cart-section__cart-size-select responsive-select">
                                    <option value="">XS (44-46)</option>
                                    <option value="">S (47-48)</option>
                                    <option value="">M (49-50)</option>
                                </select>

                                <div className="cart-section__cart-quatity-wrapper">
                                    <button className="cart-section__cart-minus-btn c-button" onClick={decrementCount}>
                                        <i class="bi bi-dash-circle"></i>
                                    </button>

                                    <span className="cart-section__cart-quantity-num">{counter}</span>

                                    <button className="cart-section__cart-plus-btn c-button" onClick={incrementCount}>
                                        <i class="bi bi-plus-circle"></i>
                                    </button>
                                </div>

                                <div className="cart-section__cart-price-wrapper">
                                    <p className="cart-section__cart-new-price">120.000 сум</p>

                                    <p className="cart-section__cart-old-price">160.000 сум</p>
                                </div>
                            </div>

                            <select className="cart-section__cart-size-select res-none-display">
                                <option value="">XS (44-46)</option>
                                <option value="">S (47-48)</option>
                                <option value="">M (49-50)</option>
                            </select>

                            <div className="cart-section__cart-btn-wrapper">
                                <button className="cart-section__cart-like-btn same-btn">
                                    <i class="bi bi-heart same-icon"></i>

                                    Добавить в избранное
                                </button>

                                <button className="cart-section__cart-delete-btn same-btn">
                                    <i class="bi bi-trash3 same-icon"></i>

                                    Удалить из избранных
                                </button>
                            </div>
                        </div>

                    </li>

                    <li className="cart-section__cart-item">

                        <div>
                            <img className="cart-section__cart-img" src={CartIM} alt="img" width={240} height={240}/>

                            <div className="res-cart-btn-wrapper">
                                    <button className="same-btn">
                                        <i class="bi bi-heart same-icon"></i>
                                    </button>

                                    <button className="same-btn res-del-btn">
                                        <i class="bi bi-trash3 same-icon"></i>
                                    </button>
                             </div>
                        </div>


                        <div className="cart-section__cart-information">
                            <div className="cart-section__cart-name-wrapper">
                                <div className="cart-section__cart-title-wrapper">
                                    <h3 className="cart-section__cart-heading">Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон</h3>

                                    <p className="cart-section__cart-title">Артикул: Dragon 06</p>
                                </div>

                                <select className="cart-section__cart-size-select responsive-select">
                                    <option value="">XS (44-46)</option>
                                    <option value="">S (47-48)</option>
                                    <option value="">M (49-50)</option>
                                </select>

                                <div className="cart-section__cart-quatity-wrapper">
                                    <button className="cart-section__cart-minus-btn c-button" onClick={decrementCount}>
                                        <i class="bi bi-dash-circle"></i>
                                    </button>

                                    <span className="cart-section__cart-quantity-num">{counter}</span>

                                    <button className="cart-section__cart-plus-btn c-button" onClick={incrementCount}>
                                        <i class="bi bi-plus-circle"></i>
                                    </button>
                                </div>

                                <div className="cart-section__cart-price-wrapper">
                                    <p className="cart-section__cart-new-price">120.000 сум</p>

                                    <p className="cart-section__cart-old-price">160.000 сум</p>
                                </div>
                            </div>

                            <select className="cart-section__cart-size-select res-none-display">
                                <option value="">XS (44-46)</option>
                                <option value="">S (47-48)</option>
                                <option value="">M (49-50)</option>
                            </select>

                            <div className="cart-section__cart-btn-wrapper">
                                <button className="cart-section__cart-like-btn same-btn">
                                    <i class="bi bi-heart same-icon"></i>

                                    Добавить в избранное
                                </button>

                                <button className="cart-section__cart-delete-btn same-btn">
                                    <i class="bi bi-trash3 same-icon"></i>

                                    Удалить из избранных
                                </button>
                            </div>
                        </div>

                    </li>

                    <li className="cart-section__cart-item">

                        <div>
                            <img className="cart-section__cart-img" src={CartIM} alt="img" width={240} height={240}/>

                            <div className="res-cart-btn-wrapper">
                                    <button className="same-btn">
                                        <i class="bi bi-heart same-icon"></i>
                                    </button>

                                    <button className="same-btn res-del-btn">
                                        <i class="bi bi-trash3 same-icon"></i>
                                    </button>
                             </div>
                        </div>


                        <div className="cart-section__cart-information">
                            <div className="cart-section__cart-name-wrapper">
                                <div className="cart-section__cart-title-wrapper">
                                    <h3 className="cart-section__cart-heading">Футболка oversize 3D унисекс Аниме Tokyo Revengers: дракон</h3>

                                    <p className="cart-section__cart-title">Артикул: Dragon 06</p>
                                </div>

                                <select className="cart-section__cart-size-select responsive-select">
                                    <option value="">XS (44-46)</option>
                                    <option value="">S (47-48)</option>
                                    <option value="">M (49-50)</option>
                                </select>

                                <div className="cart-section__cart-quatity-wrapper">
                                    <button className="cart-section__cart-minus-btn c-button" onClick={decrementCount}>
                                        <i class="bi bi-dash-circle"></i>
                                    </button>

                                    <span className="cart-section__cart-quantity-num">{counter}</span>

                                    <button className="cart-section__cart-plus-btn c-button" onClick={incrementCount}>
                                        <i class="bi bi-plus-circle"></i>
                                    </button>
                                </div>

                                <div className="cart-section__cart-price-wrapper">
                                    <p className="cart-section__cart-new-price">120.000 сум</p>

                                    <p className="cart-section__cart-old-price">160.000 сум</p>
                                </div>
                            </div>

                            <select className="cart-section__cart-size-select res-none-display">
                                <option value="">XS (44-46)</option>
                                <option value="">S (47-48)</option>
                                <option value="">M (49-50)</option>
                            </select>

                            <div className="cart-section__cart-btn-wrapper">
                                <button className="cart-section__cart-like-btn same-btn">
                                    <i class="bi bi-heart same-icon"></i>

                                    Добавить в избранное
                                </button>

                                <button className="cart-section__cart-delete-btn same-btn">
                                    <i class="bi bi-trash3 same-icon"></i>

                                    Удалить из избранных
                                </button>
                            </div>
                        </div>

                    </li>
                </ul>

                <div className="cart-section__cart-booking-wrapper">
                    <Link to="/order" className="text-decoration-none">
                        <button className="cart-section__cart-booking-btn">Перейти к оформлению</button>
                    </Link>

                    <div className="cart-section__cart-booking-price">

                        <div className="d-flex justify-content-between">
                            <p className="cart-section__cart-all-price">Итого</p>

                            <span className="all-price">400000 сум</span>
                        </div>

                        <div className="d-flex justify-content-between">
                            <p className="cart-section__cart-common-price">Товары</p>

                            <span className="common-price">520000 сум</span>
                        </div>

                        <div className="d-flex justify-content-between">
                            <p className="cart-section__cart-sale-price">Скидки на товары</p>

                            <span className="sale-price">-120000 сум</span>
                        </div>

                        <input className="cart-section__cart-promokod-input" placeholder="Введите промокод" type="text" />
                    </div>
                </div>

            </div>

            <BigSale/>
        </div>
    </section>
  )
}
