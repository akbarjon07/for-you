import { BigSale } from "../../components/BigSale/BigSale";
import { CatalogueList } from "../../components/CatalogList/CatalogueList";
import { Hero } from "../../components/Hero/Hero";
import { NavLinks } from "../../components/Navlinks/Navlinks";
import { Booking } from "../../components/OwnPrintBooking/OwnPrintBooking";
import { Questions } from "../../components/Questions/Questions";
import { TopPrints } from "../../components/TopPrints/TopPrints";
import "./home.css";

export const Home = () => {
  return (
    <>
        <Hero/>
        <CatalogueList/>
        <BigSale/>
        <NavLinks/>
        <Booking/>
        <Questions/>
        <TopPrints/>
    </>
  )
}

export default Home