import "./comments.css";
import { NavLink, Link } from "react-router-dom";
import Card from "../../assets/images/card-bg-3.png";
import Arrow from "../../assets/images/left-arrow.svg";


export const Comments = () => {
  return (
    <section className="comments-section">
        <div className="container">

            <div className="comments-section__nav-wrapper">
                <Link to="/" className="comments-section__nav-home">Главная</Link>

                <span className="comments-section__nav-span"></span>

                <Link className="comments-section__nav-com">Отзывы клиентов</Link>
            </div>

            <div className="profile-section__responsive-link-wrapper">
                <Link className="d-flex align-items-center text-decoration-none">
                    <img className="me-2" src={Arrow} alt="icon" width={20} height={20}/>

                    <p className="comments-section__nav-home m-0 p-0">Главная</p>
                </Link>
            </div>

            <h2 className="comments-section__title">Последние отзывы</h2>

            <div className="comments-section__main-wrapper">
                <div className="comments-section__info-wrapper">
                    <h3 className="comments-section__info-title">Информация</h3>

                    <ul className="comments-section__info-list">
                        <li className="comments-section__info-item">
                            <NavLink className="comments-section__info-link">О компании</NavLink>
                        </li>

                        <li className="comments-section__info-item">
                            <NavLink className="comments-section__info-link">Отзывы</NavLink>
                        </li>

                        <li className="comments-section__info-item">
                            <NavLink className="comments-section__info-link">Помощь</NavLink>
                        </li>

                        <li className="comments-section__info-item">
                            <NavLink className="comments-section__info-link">Способы оплаты</NavLink>
                        </li>

                        <li className="comments-section__info-item">
                            <NavLink className="comments-section__info-link">Доставка</NavLink>
                        </li>

                        <li className="comments-section__info-item">
                            <NavLink className="comments-section__info-link">Где мой заказ?</NavLink>
                        </li>

                        <li className="comments-section__info-item">
                            <NavLink className="comments-section__info-link">Контакты</NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="comments-section__comment-list">
                        <li className="comments-section__comment-item">
                            <p className="comments-section__comment-title">Макар К.</p>

                            <p className="comments-section__comment-date">23 января 2023</p>

                            <p className="comments-section__comment-star">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>

                            <p className="comments-section__comment-desc">Заказываю уже раз в 4 футболки, покупал себе, дарил друзьям, сейчас вот планирую ещё заказать в качестве подарка. Очень качественные футболки и приятный материал. После стирки и ношения не растягиваются,что самое приятное-качественная печать на материале, не клеенка какая-то отстойная и не выстирывающиеся краски. Единственное на чёрном цвете видны ворсинки, но ребята об этом предупреждают заранее, да и это не сильно заметно</p>

                            <img className="comments-section__comment-img" src={Card} alt="img" width={108} height={108}/>
                        </li>

                        <li className="comments-section__comment-item">
                            <p className="comments-section__comment-title">Макар К.</p>

                            <p className="comments-section__comment-date">23 января 2023</p>

                            <p className="comments-section__comment-star">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>

                            <p className="comments-section__comment-desc">Заказываю уже раз в 4 футболки, покупал себе, дарил друзьям, сейчас вот планирую ещё заказать в качестве подарка. Очень качественные футболки и приятный материал. После стирки и ношения не растягиваются,что самое приятное-качественная печать на материале, не клеенка какая-то отстойная и не выстирывающиеся краски. Единственное на чёрном цвете видны ворсинки, но ребята об этом предупреждают заранее, да и это не сильно заметно</p>

                            <img className="comments-section__comment-img" src={Card} alt="img" width={108} height={108}/>
                        </li>

                        <li className="comments-section__comment-item">
                            <p className="comments-section__comment-title">Макар К.</p>

                            <p className="comments-section__comment-date">23 января 2023</p>

                            <p className="comments-section__comment-star">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>

                            <p className="comments-section__comment-desc">Заказываю уже раз в 4 футболки, покупал себе, дарил друзьям, сейчас вот планирую ещё заказать в качестве подарка. Очень качественные футболки и приятный материал. После стирки и ношения не растягиваются,что самое приятное-качественная печать на материале, не клеенка какая-то отстойная и не выстирывающиеся краски. Единственное на чёрном цвете видны ворсинки, но ребята об этом предупреждают заранее, да и это не сильно заметно</p>

                            <img className="comments-section__comment-img" src={Card} alt="img" width={108} height={108}/>
                        </li>

                        <li className="comments-section__comment-item">
                            <p className="comments-section__comment-title">Макар К.</p>

                            <p className="comments-section__comment-date">23 января 2023</p>

                            <p className="comments-section__comment-star">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>

                            <p className="comments-section__comment-desc">Заказываю уже раз в 4 футболки, покупал себе, дарил друзьям, сейчас вот планирую ещё заказать в качестве подарка. Очень качественные футболки и приятный материал. После стирки и ношения не растягиваются,что самое приятное-качественная печать на материале, не клеенка какая-то отстойная и не выстирывающиеся краски. Единственное на чёрном цвете видны ворсинки, но ребята об этом предупреждают заранее, да и это не сильно заметно</p>

                            <img className="comments-section__comment-img" src={Card} alt="img" width={108} height={108}/>
                        </li>

                        <li className="comments-section__comment-item">
                            <p className="comments-section__comment-title">Макар К.</p>

                            <p className="comments-section__comment-date">23 января 2023</p>

                            <p className="comments-section__comment-star">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>

                            <p className="comments-section__comment-desc">Заказываю уже раз в 4 футболки, покупал себе, дарил друзьям, сейчас вот планирую ещё заказать в качестве подарка. Очень качественные футболки и приятный материал. После стирки и ношения не растягиваются,что самое приятное-качественная печать на материале, не клеенка какая-то отстойная и не выстирывающиеся краски. Единственное на чёрном цвете видны ворсинки, но ребята об этом предупреждают заранее, да и это не сильно заметно</p>

                            <img className="comments-section__comment-img" src={Card} alt="img" width={108} height={108}/>
                        </li>
                    </ul>

                    <button className="comments-section__comment-btn">Смотреть ещё</button>
                </div>
            </div>
        </div>
    </section>
  )
}
