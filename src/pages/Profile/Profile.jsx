import "./profile.css";
import { NavLink, Link } from "react-router-dom";
import Arrow from "../../assets/images/left-arrow.svg";

export const Profile = () => {
  return (
    <section className="profile-section">
        <div className="container">

            <div className="profile-section__nav-link-wrapper">
                <Link to="/" className="profile-section__home-link">Главная</Link>

                <span className="profile-section__span-link"></span>

                <p className="profile-section__account-link">Аккаунт</p>
            </div>

            <div className="profile-section__responsive-link-wrapper">
                <Link className="d-flex align-items-center text-decoration-none">
                    <img className="me-2" src={Arrow} alt="icon" width={20} height={20}/>

                    <p className="profile-section__home-link m-0 p-0">Главная</p>
                </Link>
            </div>

            <h2 className="profile-section__title">Мой аккаунт</h2>

            <div className="profile-section__main-wrapper">
                <ul className="profile-section__nav-list">
                    <li className="profile-section__nav-item">
                        <NavLink className="profile-section__nav-link">
                            Мой профиль
                        </NavLink>
                    </li>

                    <li className="profile-section__nav-item">
                        <NavLink className="profile-section__nav-link">
                            Избранное
                        </NavLink>
                    </li>

                    <li className="profile-section__nav-item">
                        <NavLink className="profile-section__nav-link">
                            Выйти из аккаунта
                        </NavLink>
                    </li>
                </ul>

                <div className="profile-section__personal">
                    <h3 className="profile-section__password-title">Личная информация</h3>

                    <form>
                        <div className="input-container">
                            <input type="text" id="username" autocomplete="off" placeholder="" required className="text-input"/>
                            <label for="username" className="label">ФИО или Username в телеграм</label>
                        </div>

                        <div className="input-container">
                            <input type="text" id="username" autocomplete="off" placeholder="" required className="text-input"/>
                            <label for="username" className="label">Телефон</label>
                        </div>

                        <div className="input-container">
                            <input type="text" id="username" autocomplete="off" placeholder="" required className="text-input"/>
                            <label for="username" className="label">E-mail</label>
                        </div>

                        <button className="profile-section__save-btn">Сохранить</button>
                    </form>

                    <button className="profile-section__delete-account">Удалить аккаунт</button>
                </div>

                <div className="profile-section__password-change">
                    <h3 className="profile-section__password-title">Сменить пароль</h3>

                    <form>
                        <input className="profile-section__old-password password-input" type="text" placeholder="Старый пароль" required />

                        <input className="profile-section__new-password password-input" type="text" placeholder="Новый пароль" required />

                        <input className="profile-section__confirm-password password-input" type="text" placeholder="Подтвердите пароль" required />

                        <button className="profile-section__save-btn2">Сохранить</button>
                    </form>
                </div>
            </div>

            <button className="profile-section__delete-account responsive-btn">Удалить аккаунт</button>


        </div>
    </section>
  )
}
