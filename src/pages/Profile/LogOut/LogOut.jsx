import "./logOut.css";
import Close from "../../../assets/images/close.svg";
import Logout from "../../../assets/images/logout.png";

export const LogOut = () => {
  return (
    <div className="logout-wrapper">
        <button className="logout-wrapper__close-btn">
            <img className="logout-wrapper__close-img" src={Close} alt="img" width={24} height={24}/>
        </button>

        <img className="logout-wrapper__img" src={Logout} alt="img" width={133} height={308}/>

        <h3 className="logout-wrapper__close-title">Вы уверены что хотите выйти из аккаунта?</h3>

        <div className="logout-wrapper__btn-wrapper">
            <button className="logout-wrapper__exit-btn">Выйти</button>

            <button className="logout-wrapper__stay-btn">Остаться</button>
        </div>
    </div>
  )
}
