import "./ownPrintBooking.css";
import Link from "../../assets/images/link-logo.svg";

export const Booking = () => {
    return (
        <section className="booking">
            <div className="container booking__container">
                <h2 className="booking__title">Футболĸа с твоим принтом!</h2>

                <p className="booking__desc">Заполните форму и наши специалисты свяжутся с вами в телеграмм</p>

                <form className="booking__form">
                    <div className="booking__form-wrapper">
                        <input className="booking__name-input input" type="text" placeholder="Имя или Username в Телеграмм*"/>

                        <input className="booking__number-input input" type="text" placeholder="Телефон*"/>

                        <textarea className="res-input" placeholder="Добавь пожелания. Например: хочу футболĸу с приĸрепленным принтом :)"></textarea>

                        <label htmlFor="file-upload" class="custom-file-upload">
                            <img className="booking__img" src={Link} alt="link" />
                        </label>
                        <input id="file-upload" type="file"/>


                        <div className="booking__btn-wrapper">
                            <button className="booking__btn">Отправить</button>

                            <div className="booking__check">
                                <input className="booking__check-box" type="checkbox"/>

                                <p className="booking__check-desc">I’m not a robot</p>
                            </div>
                        </div>
                    </div>

                    <textarea className="booking__message-input input" placeholder="Добавь пожелания. Например: хочу футболĸу с приĸрепленным принтом :)"></textarea>

                </form>

            </div>
        </section>
    )
}