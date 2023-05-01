import "./catalogue.css";
import { Link } from "react-router-dom";

export const Catalogue = () => {
  return (
    <div className="catalogue">
        <h2 className="catalogue__title">Каталог</h2>

        <ul className="catalogue__list">
            <li className="catalogue__item">
                <Link to="/catalog" className="catalogue__link">
                    Заказать свой дизайн
                </Link>
            </li>

            <li className="catalogue__item">
                <Link to="/catalog" className="catalogue__link">
                    Авторское <sup className="catalogue__num">123</sup>
                </Link>
            </li>

            <li className="catalogue__item">
                <Link to="/catalog" className="catalogue__link">
                    Айти <sup className="catalogue__num">123</sup>
                </Link>
            </li>

            <li className="catalogue__item">
                <Link to="/catalog" className="catalogue__link">
                    Знаменитости <sup className="catalogue__num">123</sup>
                </Link>
            </li>

            <li className="catalogue__item">
                <Link to="/catalog" className="catalogue__link">
                    Игры <sup className="catalogue__num">123</sup>
                </Link>
            </li>

            <li className="catalogue__item">
                <Link to="/catalog" className="catalogue__link">
                    Кино Сериалы <sup className="catalogue__num">123</sup>
                </Link>
            </li>

            <li className="catalogue__item">
                <Link to="/catalog" className="catalogue__link">
                    Комиксы <sup className="catalogue__num">123</sup>
                </Link>
            </li>

            <li className="catalogue__item">
                <Link to="/catalog" className="catalogue__link">
                    Музыка <sup className="catalogue__num">123</sup>
                </Link>
            </li>

            <li className="catalogue__item">
                <Link to="/catalog" className="catalogue__link">
                    Мультфильмы <sup className="catalogue__num">123</sup>
                </Link>
            </li>

            <li className="catalogue__item">
                <Link to="/catalog" className="catalogue__link">
                    Надписи <sup className="catalogue__num">123</sup>
                </Link>
            </li>

            <li className="catalogue__item">
                <Link to="/catalog" className="catalogue__link">
                    Разное <sup className="catalogue__num">123</sup>
                </Link>
            </li>

            <li className="catalogue__item">
                <Link to="/catalog" className="catalogue__link">
                    Символика <sup className="catalogue__num">123</sup>
                </Link>
            </li>

            <li className="catalogue__item">
                <Link to="/catalog" className="catalogue__link">
                    Спорт <sup className="catalogue__num">123</sup>
                </Link>
            </li>

            <li className="catalogue__item">
                <Link to="/catalog" className="catalogue__link">
                    Футбол <sup className="catalogue__num">123</sup>
                </Link>
            </li>
        </ul>
    </div>
  )
}
