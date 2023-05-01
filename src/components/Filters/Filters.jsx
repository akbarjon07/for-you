import "./filter.css";
import { NavLink } from "react-router-dom";

export const Filters = () => {
  return (
    <div className="filters__wrapper mt-5">
        <h3 className="filters__title">Фильтры</h3>

        <ul className="filters__nav-list">
            <li className="filters__nav-item">
                <NavLink className="filters__nav-link">Футболки</NavLink>
            </li>

            <li className="filters__nav-item">
                <NavLink className="filters__nav-link">Лонгсливы</NavLink>
            </li>

            <li className="filters__nav-item">
                <NavLink className="filters__nav-link">Свитшоты</NavLink>
            </li>

            <li className="filters__nav-item">
                <NavLink className="filters__nav-link">Худи</NavLink>
            </li>

            <li className="filters__nav-item">
                <NavLink className="filters__nav-link">Кепки</NavLink>
            </li>
        </ul>

        <div className="filters__price-wrapper">
            <h4 className="filters__pricer">Цена</h4>

            <input className="filters__range-input" type="range" />

            <div className="d-flex align-items-center">
                <input className="filters__min-input price-input" type="text" placeholder="От"/>

                <input className="filters__max-input price-input ms-2" type="text" placeholder="До"/>
            </div>
        </div>

        <div className="mb-5">
            <h4 className="filters__size">Размеры</h4>

            <div className="d-flex align-items-center mb-3">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <p HTMLfor="vehicle1" className="m-0 p-0 ms-3 filters__input-desc">Все размеры</p>
            </div>

            <div className="d-flex align-items-center mb-3">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <p HTMLfor="vehicle1" className="m-0 p-0 ms-3 filters__input-desc">XS</p>
            </div>

            <div className="d-flex align-items-center mb-3">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <p HTMLfor="vehicle1" className="m-0 p-0 ms-3 filters__input-desc">M</p>
            </div>

            <div className="d-flex align-items-center mb-3">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <p HTMLfor="vehicle1" className="m-0 p-0 ms-3 filters__input-desc">L</p>
            </div>

            <div className="d-flex align-items-center mb-3">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <p HTMLfor="vehicle1" className="m-0 p-0 ms-3 filters__input-desc">XL</p>
            </div>

            <div className="d-flex align-items-center mb-3">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <p HTMLfor="vehicle1" className="m-0 p-0 ms-3 filters__input-desc">2XL</p>
            </div>
        </div>

        <div>
            <h4 className="filters__size">Цвет</h4>

            <div className="d-flex align-items-center mb-3">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <p HTMLfor="vehicle1" className="m-0 p-0 ms-3 filters__input-desc">Все цвета</p>
            </div>

            <div className="d-flex align-items-center mb-3">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <p HTMLfor="vehicle1" className="m-0 p-0 ms-3 filters__input-desc">Чёрный</p>
            </div>

            <div className="d-flex align-items-center mb-3">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <p HTMLfor="vehicle1" className="m-0 p-0 ms-3 filters__input-desc">Белый</p>
            </div>

            <div className="d-flex align-items-center mb-3">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <p HTMLfor="vehicle1" className="m-0 p-0 ms-3 filters__input-desc">Красный</p>
            </div>

            <div className="d-flex align-items-center mb-3">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <p HTMLfor="vehicle1" className="m-0 p-0 ms-3 filters__input-desc">Жёлтый</p>
            </div>

            <div className="d-flex align-items-center mb-3">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <p HTMLfor="vehicle1" className="m-0 p-0 ms-3 filters__input-desc">Голубой</p>
            </div>
        </div>
    </div>

  )
}
