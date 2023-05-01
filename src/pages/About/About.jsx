import "./about.css";
import ProCom from "../../assets/images/about-bg.png";
import Benefit from "../../assets/images/benefit.svg";
import Benefit2 from "../../assets/images/benefit-2.svg";
import Benefit3 from "../../assets/images/benefit-3.svg";
import Benefit4 from "../../assets/images/benefit-4.svg";
import Benefit5 from "../../assets/images/benefit-5.svg";
import Benefit6 from "../../assets/images/benefit-6.svg";
import { Booking } from "../../components/OwnPrintBooking/OwnPrintBooking";


export const About = () => {
  return (
    <section className="about-section">
        <div className="container">
            <h2 className="about-section__title">О компании “ForYou”</h2>

            <img className="about-section__img" src={ProCom} alt="img" width={1360} height={600}/>

            <div className="about-section__description-wrapper">
                <h3 className="about-section__description-title">Немного информации</h3>

                <p className="about-section__description-desc">
                    Мы — Vsemayki.ru: российский интернет-магазин, создаем по заказу одежду и аксессуары с принтами.
                    <br />Родились в Новосибирске в 2007 году и за 13 лет выросли в крупнейшую в своей сфере компанию: ежедневно на наш сайт заходят больше 100 000 человек и за год они делают больше 500 тысяч заказов.

                    <br /><br />В каталоге магазина более 150 000 макетов и их становится больше каждый день. Напечатать понравившиеся принты можно на почти 200 видах товаров: от брелка и футболки до рюкзака и куртки.

                    <br /><br />Мы поддерживаем индивидуальность и самовыражение, поэтому разработали специальный онлайн-конструктор: так каждый может создавать вещи со своим дизайном.

                    <br /><br />Такого оборудования, как у нас, нет ни у кого из конкурентов. Наш сублимационный принтер MS JP4 Evo Textile Version — представитель самых передовых технологий в мире текстиля и в России есть только у нас. На таких же машинах создают одежду для известных мировых брендов как Adidas, Nike, Puma и Dolce&Gabbana.

                    <br /><br />Для дизайнеров у нас работает специальная партнерская программа: регистрируешь в ней свои изображения и получаешь процент с продаж. Изготовление, рекламу и доставку мы берем на себя. Детали здесь.
                    <br />Работаем и с оптовыми заказчиками, подробнее здесь.</p>
            </div>

            <div className="advantage-wrapper">
                <h3 className="advantage-title">Что выделяет нас среди остальных?</h3>

                <ul className="advantage-list">
                    <li className="advantage-item">
                        <img className="advantage-img" src={Benefit} alt="img" width={64} height={64}/>

                        <h4 className="advantage-heading">Дышащая ткань</h4>

                        <p className="advantage-desc">Мы используем ткань и материалы премиум качества для комфортного ношения и нанесения принта</p>
                    </li>

                    <li className="advantage-item">
                        <img className="advantage-img" src={Benefit2} alt="img" width={64} height={64}/>

                        <h4 className="advantage-heading">Долговечные принты</h4>

                        <p className="advantage-desc">Мы используем ткань и материалы премиум качества для комфортного ношения и нанесения принта</p>
                    </li>

                    <li className="advantage-item">
                        <img className="advantage-img" src={Benefit3} alt="img" width={64} height={64}/>

                        <h4 className="advantage-heading">Долговечные принты</h4>

                        <p className="advantage-desc">Мы используем ткань и материалы премиум качества для комфортного ношения и нанесения принта</p>
                    </li>

                    <li className="advantage-item">
                        <img className="advantage-img" src={Benefit4} alt="img" width={64} height={64}/>

                        <h4 className="advantage-heading">Уникальная ткань</h4>

                        <p className="advantage-desc">Мы используем ткань и материалы премиум качества для комфортного ношения и нанесения принта</p>
                    </li>

                    <li className="advantage-item">
                        <img className="advantage-img" src={Benefit5} alt="img" width={64} height={64}/>

                        <h4 className="advantage-heading">Ручной пошив</h4>

                        <p className="advantage-desc">Мы используем ткань и материалы премиум качества для комфортного ношения и нанесения принта</p>
                    </li>

                    <li className="advantage-item">
                        <img className="advantage-img" src={Benefit6} alt="img" width={64} height={64}/>

                        <h4 className="advantage-heading">Контроль качества</h4>

                        <p className="advantage-desc">Мы используем ткань и материалы премиум качества для комфортного ношения и нанесения принта</p>
                    </li>
                </ul>
            </div>

            <Booking/>
        </div>
    </section>
  )
}