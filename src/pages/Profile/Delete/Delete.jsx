import "./delete.css";
import Deleted from "../../../assets/images/delete.png";
import Close from "../../../assets/images/close.svg";

export const Delete = () => {
  return (
    <div className="logout-wrapper">
        <button className="logout-wrapper__close-btn">
            <img className="logout-wrapper__close-img" src={Close} alt="img" width={24} height={24}/>
        </button>

        <img className="logout-wrapper__img" src={Deleted} alt="img" width={247} height={248}/>

        <h3 className="logout-wrapper__close-title">Вы уверены что хотите удалить свой аккаунт?</h3>

        <div className="logout-wrapper__btn-wrapper">
            <button className="logout-wrapper__exit-btn">Отменить</button>

            <button className="logout-wrapper__stay-btn">Удалить</button>
        </div>
    </div>
  )
}

