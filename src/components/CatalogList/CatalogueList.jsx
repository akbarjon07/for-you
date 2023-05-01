import { Catalogue } from "./Catalogue/Catalogue";
import { Navbar } from "./Navbar/Navbar";
import { ProductList } from "./ProductList/ProductList";
import { Filters } from "../Filters/Filters";
import "./catalogueList.css";

export const CatalogueList = () => {
  return (
    <section className="catalogue-list">
        <div className="container catalogue-list__container">
            <Catalogue/>

            <div className="catalogue-list__wrapper">
                <Navbar/>

                <ProductList/>
            </div>
        </div>
    </section>
  )
}
