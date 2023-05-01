import "./success.css";
import Bg from "../../../assets/images/success.png";

export const Success = () => {
  return (
    <div className="success-card">
        <i class="bi bi-x"></i>

        <img className="success-img" src={Bg} alt="img" width={176} height={240}/>

        <div className="d-flex flex-column align-items-center justify-content-center">
            <h2 className="success-title">Ура! Ваша заявка отправлена</h2>

            <p className="success-desc">В ближайшее время с вами свяжутся наши операторы </p>

            <button className="success-btn">Вернуться на главную</button>
        </div>
    </div>
  )
}