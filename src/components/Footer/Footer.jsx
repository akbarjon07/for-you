import "./footer.css";
import Logo from "../../assets/images/footer-logo.svg";
import Instagram from "../../assets/images/instagram.svg";
import Telegram from "../../assets/images/telegram.svg";
import Facebook from "../../assets/images/facebook.svg";
import Inweb from "../../assets/images/inweb 1.svg"
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__top">
                <div className="footer__top-left">
                    <Link className="footer__logo-link">
                        <img className="footer__logo-img" src={Logo} alt="logo" width={150} height={40}/>
                    </Link>

                    <p className="footer__logo-desc">ForYou - это печать максимально широкого спектра продукции — 24 часа, 7 дней в неделю, удобно, быстро, компетентно и качественно!</p>

                    <ul className="footer__media-list">
                        <li className="footer__media-item">
                            <Link className="footer__media-link">
                                <img className="footer__media-img" src={Instagram} alt="icon" width={40} height={40}/>
                            </Link>
                        </li>

                        <li className="footer__media-item">
                            <Link className="footer__media-link">
                                <img className="footer__media-img" src={Telegram} alt="icon" width={40} height={40}/>
                            </Link>
                        </li>

                        <li className="footer__media-item">
                            <Link className="footer__media-link">
                                <img className="footer__media-img" src={Facebook} alt="icon" width={40} height={40}/>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer__top-right">
                    <ul className="footer__nav-list">
                        <li className="footer__nav-item">
                            <p className="footer__nav-desc">
                                Основные разделы
                            </p>
                        </li>

                        <li className="footer__nav-item">
                            <Link to="catalog" className="footer__nav-link">
                                Футболки
                            </Link>
                        </li>

                        <li className="footer__nav-item">
                            <Link to="catalog" className="footer__nav-link">
                                Лонгсливы
                            </Link>
                        </li>

                        <li className="footer__nav-item">
                            <Link to="catalog" className="footer__nav-link">
                                Свитшоты
                            </Link>
                        </li>

                        <li className="footer__nav-item">
                            <Link to="catalog" className="footer__nav-link">
                                Худи
                            </Link>
                        </li>

                        <li className="footer__nav-item">
                            <Link to="catalog" className="footer__nav-link">
                                Кепки
                            </Link>
                        </li>
                    </ul>

                    <ul className="footer__nav-list custom-list">
                        <li className="footer__nav-item">
                            <p className="footer__nav-desc">
                                Помощь покупателю
                            </p>
                        </li>

                        <li className="footer__nav-item">
                            <Link to="/order" className="footer__nav-link">
                                Как сделать заказ ?
                            </Link>
                        </li>

                        <li className="footer__nav-item">
                            <Link to="/order" className="footer__nav-link">
                                Доставка
                            </Link>
                        </li>

                        <li className="footer__nav-item">
                            <Link to="/about" className="footer__nav-link">
                                О компании
                            </Link>
                        </li>

                        <li className="footer__nav-item">
                            <Link to="/comments" className="footer__nav-link">
                                Отзывы
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="footer__year-wrapper">
                    <p className="footer__year same-desc">{new Date().getFullYear()} © foryou.uz</p>

                    <p className="footer__map same-desc">Карта сайта</p>
                </div>

                <a href="https://inweb.uz/" className="footer__company">
                    <p className="footer__company-name">Разработка -</p>

                    <img className="footer__company-logo" src={Inweb} alt="logo" width={15} height={18}/>
                </a>
            </div>
        </div>
    </footer>
  )
}