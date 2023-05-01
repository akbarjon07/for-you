import "./questions.css";
import { Link } from "react-router-dom";
import Four from "../../assets/images/four.svg";
import Eight from "../../assets/images/eight.svg";
import Twelve from "../../assets/images/twelvw.svg";
import Sixteen from "../../assets/images/sixteen.svg";

export const Questions = () => {
  return (
    <section className="question">
        <div className="container question__container">
            <h2 className="question__main-title">Частые вопросы</h2>

            <p className="question__desc">Все , что вам нужно знать о продукте и товарах. Не можете найти ответ на интересующий вас вопрос? Пожалуйста <Link to="#" className="question__desc-link">свяжитесь с нашей командой</Link> </p>

            <ul className="question__list">
                <li className="question__item">
                    <div className="question__name">
                        <img className="question__img" src={Four} alt="icon" width={24} height={24}/>
                        <h4 className="question__title">Что такое «принт» ?</h4>
                    </div>

                    <p className="question__name-desc">«Принт» — это рисунок, узор или надпись, напечатанные на изделиях из ткани или керамики</p>
                </li>

                <li className="question__item">
                    <div className="question__name">
                        <img className="question__img" src={Eight} alt="icon" width={24} height={24}/>
                        <h4 className="question__title">Что такое 3D печать?</h4>
                    </div>

                    <p className="question__name-desc">Нанесение рисунка на ткань с использованием термопресса, что позволяет получить яркое объемное изображение, стойкое к различным воздействиям (стирка, глажка, повседневная носка).</p>
                </li>

                <li className="question__item">
                    <div className="question__name">
                        <img className="question__img" src={Twelve} alt="icon" width={24} height={24}/>
                        <h4 className="question__title">Как выбрать размер?</h4>
                    </div>

                    <p className="question__name-desc">«Для этого достаточно измерить обхват груди и разделить полученное число на 2. Если значение при этом получилось нечетным, то его следует увеличить на единицу. Затем свериться с таблицей размеров. Можете <Link to="#" className="question__desc-link">взглянуть на пример!</Link> </p>
                </li>

                <li className="question__item">
                    <div className="question__name">
                        <img className="question__img" src={Sixteen} alt="icon" width={24} height={24}/>
                        <h4 className="question__title">Как стирать футболку с принтом?</h4>
                    </div>

                    <p className="question__name-desc">Стирать либо вручную, либо на деликатном режиме (макс. 600 оборотов при отжиме), вывернув футболку наизнанку.</p>
                </li>
            </ul>
        </div>
    </section>
  )
}
