import "./catalog.css";
import { Link } from "react-router-dom";
import { Filters } from "../../components/Filters/Filters";
import { Catalogue } from "../../components/CatalogList/Catalogue/Catalogue";
import { Navbar } from "../../components/CatalogList/Navbar/Navbar";
import { ProductList } from "../../components/CatalogList/ProductList/ProductList";
import Arrow from "../../assets/images/left-arrow.svg";
import { BigSale } from "../../components/BigSale/BigSale";


export const Catalog = () => {
  return (
    <section className="catalog-section">
        <div className="container catalog-section__container">
            <div className="catalog-section__nav-wrapper">
                <Link to="/" className="catalog-section__nav-home">Главная</Link>

                <span className="catalog-section__nav-span"></span>

                <p className="catalog-section__nav-catalog">Каталог</p>
            </div>

            <div className="profile-section__responsive-link-wrapper">
                <Link className="d-flex align-items-center text-decoration-none">
                    <img className="me-2" src={Arrow} alt="icon" width={20} height={20}/>

                    <p className="catalog-section__nav-home m-0 p-0">Главная</p>
                </Link>
            </div>

            <h2 className="catalog-section__title">Популярные футболки</h2>

            <div className="catalog-section__res-btn-wrapper">
                <button className="catalog-section__filter-btn">
                    <i class="bi bi-collection me-2"></i>

                    <p className="catalog-section__filter-desc">Список</p>
                </button>

                <button className="catalog-section__filter-btn filter-btn">
                    <i class="bi bi-funnel me-2"></i>

                    <p className="catalog-section__filter-desc">Фильтры</p>
                </button>
            </div>

            <div className="d-flex justify-content-between mb-5">
                <div>
                    <Catalogue/>

                    <Filters/>
                </div>

                <div className="d-flex flex-column">
                    <Navbar/>

                    <ProductList/>
                </div>
            </div>

            <BigSale/>
        </div>
    </section>
  )
}
