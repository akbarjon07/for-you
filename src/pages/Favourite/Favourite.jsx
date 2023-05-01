import "./favoutite.css";
import { Link } from "react-router-dom";
import { Catalogue } from "../../components/CatalogList/Catalogue/Catalogue";
import { Filters } from "../../components/Filters/Filters";
import { Navbar } from "../../components/CatalogList/Navbar/Navbar";
import { ProductList } from "../../components/CatalogList/ProductList/ProductList";
import { BigSale } from "../../components/BigSale/BigSale";
import Arrow from "../../assets/images/left-arrow.svg";


export const Favourite = () => {
  return (
    <section className="favourite-section">
        <div className="container">

            <div className="favourite-section__nav-wrapper">
                <Link to="/" className="favourite-section__home-nav">Главная</Link>

                <span className="favourite-section__span"></span>

                <p className="favourite-section__fav-nav">Избранное</p>
            </div>

            <div className="profile-section__responsive-link-wrapper">
                <Link className="d-flex align-items-center text-decoration-none">
                    <img className="me-2" src={Arrow} alt="icon" width={20} height={20}/>

                    <p className="favourite-section__home-nav m-0 p-0">Главная</p>
                </Link>
            </div>

            <h2 className="favourite-section__title">Избранные товары</h2>

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