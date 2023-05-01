import "./fail.css";
import Bg from "../../../assets/images/fail.png";

export const Fail = () => {
  return (
    <div className="success-card">
        <i class="bi bi-x"></i>

        <img className="success-img" src={Bg} alt="img" width={248} height={248}/>

        <div className="d-flex flex-column align-items-center justify-content-center">
            <h2 className="success-title">Кажется что-то пошло не так...</h2>

            <p className="success-desc">Проверьте все-ли заполнено правильно или повторите попытку позже</p>

            <button className="success-btn">Вернуться на главную</button>
        </div>
    </div>
  )
}