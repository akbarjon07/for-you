import "./hero.css";
import { HeroCard } from "./HeroCard/HeroCard"
import { PrintType } from "./PrintType/PrintType"
import { TopProduct } from "./TopProduct/TopProduct"

export const Hero = () => {
  return (
    <section className="hero-section">
        <div className="container hero-section__container">
            <div className="hero-section__wrapper">
                <HeroCard/>

                <div className="res-print-wrapper">
                  <PrintType/>
                </div>

                <TopProduct/>
            </div>

            <div className="hero-section__print-wrapper">
              <PrintType/>
            </div>
        </div>
    </section>
  )
}
