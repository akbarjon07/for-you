import "./navLinks.css";
import { Link } from "react-router-dom";

export const NavLinks = () => {
    return (
        <section className="navlinks-section">
            <div className="container navlinks-section__container">
                <div className="navlinks-section__wrapper">
                    <h4 className="navlinks-section__wrapper-title">Популярные футболки</h4>

                    <Link to="/catalog" className="navlinks-section__wrapper__link">Смотреть все</Link>
                </div>

                <div className="d-flex flex-column link-wrapper">
                    <div className="navlinks-section__wrapper1 second">
                        <h4 className="navlinks-section__wrapper-title second-title">Лучшие лонгсливы</h4>

                        <Link to="/catalog" className="navlinks-section__wrapper__link">Смотреть все</Link>
                    </div>

                    <div className="navlinks-section__wrapper1 third">
                        <h4 className="navlinks-section__wrapper-title second-title">Кепки и бейсболки</h4>

                        <Link to="/catalog" className="navlinks-section__wrapper__link">Смотреть все</Link>
                    </div>
                </div>

                <div className="navlinks-section__wrapper fourth">
                    <h4 className="navlinks-section__wrapper-title">Теплые свитшоты</h4>

                    <Link to="/catalog" className="navlinks-section__wrapper__link">Смотреть все</Link>
                </div>
            </div>
        </section>
    )
}