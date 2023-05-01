import "./header.css";
import Logo from "../../assets/images/logo.svg";
import Telegram from '../../assets/images/baseline-telegram.svg';
import { Link, NavLink } from "react-router-dom";
import { DropDown } from "./DropDown/DropDown";


export const Header = () => {
  return (
    <header className="header">
        <div className="container header__container">

            <button className="header__res-menu">
                <i class="bi bi-list"></i>
            </button>

            <Link className="header__logo-link" to="/">
                <img className="header__logo-img" src={Logo} alt="logo" width={165} height={44}/>
            </Link>

            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <NavLink to="/catalog" className="header__nav-link">Футболки</NavLink>
                    </li>

                    <li className="header__nav-item">
                        <NavLink to="/catalog" className="header__nav-link">Лонгслив</NavLink>
                    </li>

                    <li className="header__nav-item">
                        <NavLink to="/catalog" className="header__nav-link">Свитшоты</NavLink>
                    </li>

                    <li className="header__nav-item">
                        <NavLink to="/catalog" className="header__nav-link">Худи</NavLink>
                    </li>

                    <li className="header__nav-item">
                        <NavLink to="/catalog" className="header__nav-link">Кепки</NavLink>
                    </li>
                </ul>
            </nav>

            <a className="header__telegram-link" href="https://t.me/printy_na_futbolki" target="_blank">
                <img className="header__telegram-icon" src={Telegram} alt="icon" width={24} height={24}/>

                <p className="header__telegram-desc">Написать в телеграм</p>
            </a>

            <ul className="header__icon-list">
                <li className="header__icon-item">
                    <Link className="header__icon-search-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9428 15.9428C16.3333 15.5523 16.9665 15.5523 17.357 15.9428L21.707 20.2928C22.0975 20.6833 22.0975 21.3165 21.707 21.707C21.3165 22.0975 20.6833 22.0975 20.2928 21.707L15.9428 17.357C15.5523 16.9665 15.5523 16.3333 15.9428 15.9428Z" fill="black"></path></svg>
                    </Link>
                </li>

                <li className="header__icon-item  user-res">
                    <Link to="/profile" className="header__icon-user-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.46447 15.4645C5.40215 14.5268 6.67392 14 8 14H16C17.3261 14 18.5979 14.5268 19.5355 15.4645C20.4732 16.4021 21 17.6739 21 19V21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21V19C19 18.2044 18.6839 17.4413 18.1213 16.8787C17.5587 16.3161 16.7956 16 16 16H8C7.20435 16 6.44129 16.3161 5.87868 16.8787C5.31607 17.4413 5 18.2044 5 19V21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21V19C3 17.6739 3.52678 16.4021 4.46447 15.4645Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z" fill="black"></path></svg>
                    </Link>
                </li>

                <li className="header__icon-item">
                    <Link to="/favourite" className="header__icon-liked-link">
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.462 1.49337C15.2508 1.16652 16.0963 0.998291 16.9501 0.998291C17.804 0.998291 18.6495 1.16652 19.4383 1.49337C20.2269 1.82015 20.9435 2.2991 21.5471 2.90284C22.1508 3.5064 22.6301 4.2233 22.9569 5.01197C23.2837 5.80078 23.4519 6.64627 23.4519 7.50012C23.4519 8.35397 23.2837 9.19945 22.9569 9.98826C22.6301 10.777 22.1511 11.4936 21.5472 12.0972C21.5472 12.0973 21.5473 12.0972 21.5472 12.0972L12.7072 20.9372C12.3167 21.3277 11.6835 21.3277 11.293 20.9372L2.45301 12.0972C1.23378 10.878 0.548828 9.22437 0.548828 7.50012C0.548828 5.77587 1.23378 4.12224 2.45301 2.90301C3.67224 1.68378 5.32587 0.998826 7.05012 0.998826C8.77437 0.998826 10.428 1.68378 11.6472 2.90301L12.0001 3.2559L12.3528 2.90318C12.3528 2.90323 12.3529 2.90312 12.3528 2.90318C12.9564 2.29935 13.6732 1.82018 14.462 1.49337ZM16.9501 2.99829C16.359 2.99829 15.7737 3.11476 15.2276 3.34104C14.6815 3.56731 14.1853 3.89897 13.7674 4.31706L12.7072 5.37722C12.3167 5.76775 11.6835 5.76775 11.293 5.37722L10.233 4.31722C9.38886 3.47307 8.24394 2.99883 7.05012 2.99883C5.8563 2.99883 4.71138 3.47307 3.86723 4.31722C3.02307 5.16138 2.54883 6.3063 2.54883 7.50012C2.54883 8.69393 3.02307 9.83885 3.86723 10.683L12.0001 18.8159L20.133 10.683C20.5511 10.2651 20.8829 9.76878 21.1092 9.22268C21.3355 8.67658 21.4519 8.09124 21.4519 7.50012C21.4519 6.90899 21.3355 6.32366 21.1092 5.77755C20.8829 5.23145 20.5513 4.73528 20.1332 4.31739C19.7153 3.8993 19.2188 3.56731 18.6727 3.34104C18.1266 3.11476 17.5412 2.99829 16.9501 2.99829Z" fill="black"></path></svg>
                    </Link>
                </li>

                <li className="header__icon-item">
                    <Link to="cart" className="header__icon-cart-link text-decoration-none">
                        <svg className="position-absolute" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_108_1866)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 21C7 19.8954 7.89543 19 9 19C10.1046 19 11 19.8954 11 21C11 22.1046 10.1046 23 9 23C7.89543 23 7 22.1046 7 21Z" fill="#242424"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18 21C18 19.8954 18.8954 19 20 19C21.1046 19 22 19.8954 22 21C22 22.1046 21.1046 23 20 23C18.8954 23 18 22.1046 18 21Z" fill="#242424"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H5C5.47663 0 5.88701 0.336385 5.98055 0.803743L6.82043 5H23C23.298 5 23.5805 5.13293 23.7705 5.36256C23.9605 5.59218 24.0381 5.89458 23.9823 6.18733L22.3809 14.5848C22.2437 15.2754 21.868 15.8958 21.3195 16.3373C20.7738 16.7766 20.0916 17.011 19.3914 17H9.68864C8.98837 17.011 8.3062 16.7766 7.76048 16.3373C7.21225 15.8959 6.83664 15.2759 6.69933 14.5857C6.69927 14.5854 6.69939 14.5859 6.69933 14.5857L5.02879 6.2392C5.02201 6.21159 5.01638 6.18353 5.01195 6.15508L4.18032 2H1C0.447715 2 0 1.55228 0 1ZM7.22073 7L8.66084 14.1952C8.70656 14.4254 8.83179 14.6322 9.01461 14.7793C9.19743 14.9265 9.42619 15.0047 9.66084 15.0002L9.68 15H19.4L19.4192 15.0002C19.6538 15.0047 19.8826 14.9265 20.0654 14.7793C20.2474 14.6328 20.3723 14.4273 20.4185 14.1984L21.7913 7H7.22073Z" fill="#242424"></path></g><defs><clipPath id="clip0_108_1866"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>

                        <div className="header__icon-cart-num">0</div>
                    </Link>
                </li>
            </ul>

            <DropDown/>
        </div>
    </header>
  )
}

