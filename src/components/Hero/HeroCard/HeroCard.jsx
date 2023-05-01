import "./heroCard.css";

export const HeroCard = () => {
    return (
        <div className="hero-card">
            <div className="hero-card__wrapper">
                <p className="hero-card__desc">@printy_na_futbolki</p>

                <h2 className="hero-card__title">Подпишитесь на телеграм канал нашего магазина!</h2>

                <a href="https://t.me/printy_na_futbolki" target="_blank" className="hero-card__btn">Подписаться</a>
            </div>
        </div>
    )
}